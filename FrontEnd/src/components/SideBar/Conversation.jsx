import React, { useEffect } from 'react'
import useConversation from '../../zustand/useConversation';
import { useSocketContext } from '../../context/SocketContext';
import { useIsMobile } from '../../hooks/useIsMobile';
import MessageContainer from '../messages/MessageContainer';
import {useNavigate } from "react-router-dom";


const Conversation = ({ conversation,lastIdx,emoji }) => {

	const {selectedConversation,setSelectedConversation}=useConversation();
	const isSelected = selectedConversation?._id === conversation._id;
	const {onlineUsers}=useSocketContext(); 
	const isOnline = onlineUsers.includes(conversation._id);
	const isMobile= useIsMobile();
	
	const navigate  = useNavigate();
	
	const handleClick = () => {
		// Navigate to the desired component
		navigate("../messages/MessageContainer");
	  };
	  
	return (
		<>
			<div className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
			${isSelected ?"bg-sky-500":""}
			`}  onClick={()=>{
				 setSelectedConversation(conversation)
				 
				 if(isMobile){
					handleClick()
				 }
				 }}>
			
				<div className={`avatar ${isOnline ?"online":""} `}>
					<div className='w-12 rounded-full'>
						<img
							src={conversation.profilePicture}
							alt='user avatar'
						/>
					</div>
				</div>

				<div className='flex flex-col flex-1'>
					<div className='flex gap-3 justify-between'>
						<p className='font-bold text-gray-200'>{conversation.userName}</p>
						<span className='text-xl'>{emoji}</span>
					</div>
				</div>
			</div>

			{!lastIdx && <div className='divider my-0 py-0 h-1' />}
		</>
	);
};
export default Conversation;
//starter
// const Conversation = () => {
// 	return (
// 		<>
// 			<div className='flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer'>
// 				<div className='avatar online'>
// 					<div className='w-12 rounded-full'>
// 						<img
// 							src='https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png'
// 							alt='user avatar'
// 						/>
// 					</div>
// 				</div>

// 				<div className='flex flex-col flex-1'>
// 					<div className='flex gap-3 justify-between'>
// 						<p className='font-bold text-gray-200'>John Doe</p>
// 						<span className='text-xl'>🎃</span>
// 					</div>
// 				</div>
// 			</div>

// 			<div className='divider my-0 py-0 h-1' />
// 		</>
// 	);
// };
// export default Conversation;