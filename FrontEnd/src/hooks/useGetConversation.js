import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetConversation = () => {
 const [loading,setLoading]=useState(false);
 const  [conversations, setConversations] = useState([]);

useEffect(()=>{
    //get conversation when the component mounts
    const  getConv= async()=>{
        setLoading(true)
        try {
            const result = await fetch("/api/users");
            const data = await result.json();
            if(data.error){throw new Error(data.error)}
            setConversations(data);
        } catch (error) {
            toast.error(error.message);
        }finally{
          setLoading(false)
        
        }
    }
    getConv();
} , []);
return { loading, conversations};
}

export default useGetConversation