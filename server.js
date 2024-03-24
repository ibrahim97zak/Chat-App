import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./BackEnd/routes/auth/auth.rouets.js"
import messageRoutes from "./BackEnd/routes/message/message.rouets.js"
import usersRoutes from "./BackEnd/routes/users/user.routes.js"
import connectToDB from "./BackEnd/DB/connectDB.js";
import { app, server } from "./BackEnd/socket/socket.js";
import { fileURLToPath } from "url";

const PORT = process.env.PORT || 5000;

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename)

const __dirname=path.resolve()

dotenv.config();

app.use(express.json()); // to parse the incoming requests with JSON payloads(from req.body)
app.use(cookieParser())//to handle cookies and be able to access them

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", usersRoutes);

const staticPath = path.join(__dirname, '/FrontEnd/dist');
app.use(express.static(staticPath));

//render front/client at any path
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname,'/FrontEnd/dist/index.html'))
})

server.listen(PORT, () => {
    connectToDB();
    console.log(`Server is running on ${PORT}`)
    console.log("hi",__dirname)
});