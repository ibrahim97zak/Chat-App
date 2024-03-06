import getTokenAndCookie from "../../../utilites/generateToken.js";
import User from "../../../models/user.model.js"
import bcrypt from "bcryptjs"
export const signup=async(req,res) => {
    try {
        const{fullName, userName,gender, password,confirmPassword} =  req.body;
        if(password !== confirmPassword){
            return res.status(400).json({error:"Passwords do not match"});
        }
        const user = await User.findOne({userName});
        if (user) {
            return res.status(400).json({ error: 'userName already exists' }); 
        }
        //hash the password before saving it to database
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password,salt);
        // profile pic
        const boyProfilePic= `https://avatar.iran.liara.run/public/boy?username=${userName}`;
        const girlProfilePic= `https://avatar.iran.liara.run/public/girl?username=${userName}`;
        //create user
        const newUser = new User({
            message:"signup successfully",
            fullName,
            userName,
            password:hashPassword,
            gender,
            profilePicture: gender === "male" ? boyProfilePic : girlProfilePic
        });
    if(newUser){
        //generate jwt token
        getTokenAndCookie (newUser._id,res);
        await newUser.save();
        return res.status(201).json({
            _id:newUser._id,
            fullName: newUser.fullName,
            userName: newUser.userName,
            profilePicture: newUser.profilePicture
        });
    }else{
        return res.status(400).json({ error: 'invalid user data ', message: error.message });
    }

    } catch (error) {
        return res.status(500).json({ error: 'sign  up failed', message: error.message });
    }
}
export const login= async (req,res) => {
    try {
        const {userName,password}= req.body;
        const user =await User.findOne( {userName} );
        const isPasswordCorrect = await  bcrypt.compare(password,user?.password|| "");//compare password if its correct
        if (!user || !isPasswordCorrect ) {
           return res.status(400).json({ error:'Invalid username or password' });
        }
        //if user exists and password is correct generate the token and cookie then send them to client side
        getTokenAndCookie(user._id,res);
        return res.status(200).json({
            message:"login successfully",
            _id:user._id,
            fullName: user.fullName,
            userName: user.userName,
            profilePicture: user.profilePicture
        });
    } catch (error) {
        return res.status(500).json({ error: ' signin failed', message: error.message });

    }
}
export const logout=(req,res) => {
    try {
        res.cookie("jwt","",{maxAge:0});
        return res.status(200).json({ message:"logged out successfully" })
    } catch (error) {
        return res.status(500).json({ error: ' logout failed', message: error.message });

    }
}