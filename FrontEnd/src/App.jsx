import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/login/Login'
import SignUp from './pages/signup/Signup'
import Home from './pages/home/Home'
import {Toaster} from 'react-hot-toast'
import { useAuthContext } from './context/AuthContext'
import { useIsMobile } from './hooks/useIsMobile'
import MessageContainer from './components/messages/MessageContainer'
import useConversation from './zustand/useConversation'
import { useEffect } from 'react'





function App() {
const {authUser}=useAuthContext();
const isMobileView = useIsMobile();
const {selectedConversation,setSelectedConversation} = useConversation()
// const isMobile =()=>{
//   if(isMobileView && authUser &&selectedConversation){
//     console.log("IS WORK",selectedConversation)
//     return true;
//   }
  
// }

  return (
    <div className="p-4 h-screen flex items-center justify-center">
      
     <Routes>
      <Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} /> }/> 
      <Route path="/login" element={authUser ? <Navigate to= '/' /> : <Login />} />
      <Route path="/signup" element={authUser ? <Navigate to= '/' /> : <SignUp />} />
      <Route path='/messages/MessageContainer' element= {<MessageContainer />} /> 
     </Routes>
     <Toaster/>
    </div>
  )
}  
 
export default App
