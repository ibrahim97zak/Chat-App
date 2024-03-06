import jwt from "jsonwebtoken";

const getTokenAndCookie =(userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET ,{//creats token by passing user id
         expiresIn: '15d'
         });  // 1 hour
    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 *60*1000,//MS FORMAT max age for a cookie to live
        httpOnly: true, // prevent XSS attacks cross-site scripting attacks
        sameSite:"strict", // prevents the cookie from being accessed by client-side script
        secure: process.env.NODE_ENV !== "development" //only send over https

     })
}
export default getTokenAndCookie;