import jwt  from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute=async(req,res,next)=>{
    try {
        const token = req.cookies.jwt;
        if( !token ) {
            return res.status(401).send({ error: ' Unautherized -No Token Provided' });
        }
        const decoded =  jwt.verify(token, process.env.JWT_SECRET);//to check if  the token is valid or not
        if(!decoded){
            return res.status(401).send({ error: ' Unautherized -invalid Token ' });
        }
        const user=await User.findById(decoded.userId)
        .select('-password') //we do not want to send back the password so we use select and pass in an array of fields that

        if (!user) {
            return res.status(404).send({error:"user not found"})
        }
        req.user=user;//it means that user from the requist  can access this route and he is the user from DB
        next(); //if everything is good , we will move to the next middleware function in our routes file
    } catch (error) {
        return res.status(500).json({ error: ' error in protect route middleware', message: error.message });

    }
}
export default protectRoute;