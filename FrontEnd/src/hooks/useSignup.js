import { useState } from "react"
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

 
const useSignup = () => {
    const [loading,setLoading] =useState(false);
    const {setAuthUser}=useAuthContext()

    const signup=async ({fullName,userName,password,confirmPassword,gender})=>{
        const succses= handelInputsErrors({fullName,userName,password,confirmPassword,gender});
         if(!succses) return;
         setLoading(true);
         try {
            const result= await fetch("/api/auth/signup",{
                method: "POST",
                headers: {"content-type":"application/json"},
                body: JSON.stringify({fullName,userName,password,confirmPassword,gender})
            })
            const data= await result.json();
            if(data.error){
                throw new Error(data.error)
            }
            toast.success("Account Created Successfully");
            //add user info in the global state
            localStorage.setItem("chat-user",JSON.stringify(data));
            setAuthUser(data)
            
         } catch (error) {
            toast.error(error.message);
         }finally{
            setLoading(false)
         }
    }
    return{loading,signup}
}

export default useSignup

function handelInputsErrors ({fullName,userName,password,confirmPassword,gender}){
    if(!fullName || !userName || !password || !confirmPassword || !gender){
        toast.error("please fill all the fields")
        return false
    }
    if (password !== confirmPassword) {

        toast.error("passwords do not match")
        return false
    }
    if (password.length <6) {
        toast.error("password must be at least 6 charachters")
        return false
    }
    return true

}