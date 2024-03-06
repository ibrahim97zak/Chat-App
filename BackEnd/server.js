import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth/auth.rouets.js"
import messageRoutes from "./routes/message/message.rouets.js"
import usersRoutes from "./routes/users/user.routes.js"
import connectToDB from "./DB/connectDb.js";
const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config();
app.use(express.json()); // to parse the incoming requests with JSON payloads(from req.body)
app.use(cookieParser())//to handle cookies and be able to access them

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", usersRoutes);

app.listen(PORT, () => {
    connectToDB();
    console.log(`Server is running on ${PORT}`)
});