import Conversation from "../../../models/conversation.model.js";
import Message from "../../../models/message.model.js";
import { getReceiverSocketid, io } from "../../../socket/socket.js";

export const sendMessage =async(req,res,next) => {
    try {
        const {message} = req.body;
        const {id:receiverId}=req.params;//structing varibles insted of id=req.params.id to get the value from params 
        const senderId = req.user._id; //get user's ID from token

        let conversation=await Conversation.findOne({
            participants:{$all:[senderId,receiverId]},
        })
        if(!conversation){
            conversation=await Conversation.create({
                participants:[senderId,receiverId]
            })
        }
        const newMessage=new Message({
            senderId,
            receiverId,
            message
        })
        if(newMessage){
            conversation.messages.push(newMessage._id);//add to conversation messages array
        }
        await Promise.all([
            conversation.save(),  
            newMessage.save() 
        ])
        // SOCKET IO FUNCTIONALITY WILL GO HERE
		const receiverSocketId = getReceiverSocketid(receiverId);
		if (receiverSocketId) {
			// io.to(<socket_id>).emit() used to send events to specific client
			io.to(receiverSocketId).emit("newMessage", newMessage);
		}
        return res.status(201).json(newMessage)
    } catch (error) {
        console.log("error in send message controller:",error.message)
        return res.status(500).json({error:"enternal server error"});
    }
}
export const getMessages =async(req,res,next) => {
    try {
        const {id:userToChatId} = req.params
        const senderId = req.user._id; //get user's ID from token
        const conversation= await Conversation.findOne({
            'participants': {$all : [senderId , userToChatId ]}}).populate('messages');//not referance but acctual messages
            if (!conversation) {
                return res.status(200).json([])
                
            }
            const messages=conversation.messages;
            return res.status(200).json(messages)
        
    } catch (error) {
        console.log("error in get message controller:",error.message)
        return res.status(500).json({error:"enternal server error"});
    }
}