import { useEffect } from 'react'

import { useSocketContext } from '../context/SocketContext'
import useConversation from '../zustand/useConversation'
import notificationSound from "../assets/sounds/notification.mp3";


const useListenMessage = () => {
const {socket}= useSocketContext()
    const {messages, setMessages} = useConversation()
    // Listener for new messages.
    useEffect(()=>{
        socket?.on("newMessage",(newMessage)=>{
            newMessage.shouldShake=true;
            const sound = new Audio(notificationSound);
			sound.play();
            setMessages([...messages, newMessage])
        })
        return ()=>socket?.off('newMessage')  // when component is unmount we dont  need the listener anymore
          
        
    },[socket,setMessages,messages])
}

export default useListenMessage