import User from "../../../models/user.model.js";

export const getUserToSideBar =async(req,res,next) => {
    try {
        const loggedInUser = req.user._id;
        const filtredUsers = await User.find({_id:{ $ne:loggedInUser }}).select("-password");//get all users from db except the  current user
        return res.status(200).json(filtredUsers)
    } catch (error) {
        console.log("error in getUserToSideBar controller:",error.message)
        return res.status(500).json({error:"enternal server error"});
    }
}