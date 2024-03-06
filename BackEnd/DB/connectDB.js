import mongoose from "mongoose";


const connectToDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URL)
        console.log("connected successfully to DB")
    } catch (error) {
        console.log("error to connect to DB")
    }
}
export default connectToDB;