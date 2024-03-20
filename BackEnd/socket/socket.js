import { Server } from "socket.io";
import http from "http";
import express  from "express";

const app = express(); 
const server = http.createServer(app);
const io=new Server(server,{
    cors: {
         origin:["http://localhost:3000"],
         methods: ["GET", "POST"]
        }
})

export const getReceiverSocketid=(reciverId)=>{
return userSocketMap[reciverId]
}

const userSocketMap = {};//{userId : socket}

io.on("connection", (socket) => {
   console.log(`a user connected ${socket.id}`);

   const userId = socket.handshake.query.userId;
if(userId !="undefined")userSocketMap[userId] = socket.id;

//io.emit() is used to send events to all the connected clients
io.emit("getOnlineUsers", Object.keys(userSocketMap))//to know  who's online and offline


// socket.on() is used to listen to the events. can be used both on client and server side
   socket.on('disconnect', ()=>{
       console.log(`user disconnected ${socket.id}`)
       delete userSocketMap[userId]; //delete the user from our map when user logs out
       io.emit("getOnlineUsers", Object.keys(userSocketMap))  
   })
})

export {app,io,server}