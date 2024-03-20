import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import useConversation from "../../zustand/useConversation";
import useGetConversation from "../../hooks/useGetConversation";
import toast from "react-hot-toast";

const SearchInput = () => {
  const [search,setSearch]= useState("")
  const{setSelectedConversation}=useConversation()
  const {conversations}=useGetConversation()
  const handelSubmit=(e)=>{
    e.preventDefault();
    if(!search){
      return toast.error('search is empty')
    };
    console.log(search)
    if(search.length<3 ||search.length===0){
      return toast.error('search must be at least 3 characters')
    }
    const conversation= conversations.find((c)=> c.fullName.toLowerCase().includes(search.toLowerCase()))
    if(conversation){
      setSelectedConversation(conversation)
      setSearch('');
    }else toast.error(`user not found`);
  }

  return (
    <form onSubmit={handelSubmit} className="flex items-center gap-2">
        <input type="text" placeholder="Search" className="input input-bordered rounded-full" 
        value={search}
        onChange={(e)=>setSearch(e.target.value)}/>
        <button type="submit" className="btn btn-circle bg-sky-500 text-white"><BsSearch /></button>
    </form>
    )
}

export default SearchInput

//starter
// import { BsSearch } from "react-icons/bs";

// const SearchInput = () => {
//   return (
//     <form className="flex items-center gap-2">
//         <input type="text" placeholder="Search" className="input input-bordered rounded-full" />
//         <button type="submit" className="btn btn-circle bg-sky-500 text-white"><BsSearch /></button>
//     </form>
//     )
// }

// export default SearchInput