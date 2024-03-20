import React from 'react'
import { useAuthContext } from '../../context/AuthContext'
import useConversation from '../../zustand/useConversation'
import { extractTime } from '../../utils/extractTime'

const Message = ({ message }) => {
  const {authUser} =useAuthContext()
  const {selectedConversation} =useConversation ()
  const fromME=message.senderId===authUser?._id;//check  if the current user is the sender of this message
  const formatedTime=extractTime(message.createdAt)
  const chatClassName=fromME?'chat-end':'chat-start'; //add class to style depending on who sent the message
  const profilePicture =fromME? authUser?.profilePicture : selectedConversation?.profilePicture
  const BubbleBgColor = fromME ? 'bg-blue-500' : ''
  const shakeClass = message.shouldShake ? "shake" : ""
  return (
    <div className={`chat ${chatClassName}`}>
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
            <img src={profilePicture} />
            </div>
        </div>
        <div className={`chat-bubble text-white ${BubbleBgColor} ${shakeClass} pb-2`}>{message.message}</div>
			<div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{formatedTime}</div>
    </div>
  )
}

export default Message