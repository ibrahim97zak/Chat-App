import React, { useState } from 'react'
import GenderCheckBox from './GenderCheckBox'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup'

const Signup = () => {
    const [inputs,setInputs] =useState ({
        fullName: '',
        userName: '',
        password: '',  
        confirmPassword: '',
        gender:'',
    }) 
    
    const {loading,signup} = useSignup()

    const handleGender=(gender)=>{
        setInputs({...inputs , gender : gender}) 
    }
    const handleSubmit=async(e)=>{
        e.preventDefault()
        await signup(inputs)
        
    }
  return (
    <div className="flex flex-col items-center justify-center md:min-w-96  mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-blue-200 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
        <h1 className="text-3xl font-semibold text-center text-gray-100" >Sign Up
        <span className="text-blue-900">ChatApp</span></h1>
        <form onSubmit={handleSubmit}>
            <div className="fullname">
                <label className="label p-2">
                    <span className="text-base label-text text-slate-800">Full Name</span> 
                </label>
                <input type="text" placeholder="John Doe" className="w-full input input-bordered h-10"
                 value={inputs.fullName}
                 onChange={(e)=>setInputs({...inputs,fullName:e.target.value})}
                 />
            </div>
            <div className="username">
                <label className="label p-2">
                    <span className="text-base label-text text-slate-800">username</span> 
                </label>
                <input type="text" placeholder="John22Doe" className="w-full input input-bordered h-10"
                value={inputs.userName}
                 onChange={(e)=>setInputs({...inputs,userName:e.target.value})}/>
            </div>
            <div className="password">
                <label className="label p-2">
                    <span className="text-base label-text text-slate-800">password</span> 
                </label>
                <input type="password" placeholder="Enter password" className="w-full input input-bordered h-10"
                value={inputs.password}
                 onChange={(e)=>setInputs({...inputs,password:e.target.value})}/>
            </div>
            <div className="cpassword">
                <label className="label p-2">
                    <span className="text-base label-text text-slate-800"> Confirm password</span> 
                </label>
                <input type="password" placeholder="Confirm your password" className="w-full input input-bordered h-10"
                value={inputs.confirmPassword}
                 onChange={(e)=>setInputs({...inputs,confirmPassword:e.target.value})}/>
            </div>
            
            <GenderCheckBox onCheckboxChange={handleGender} selectedGender={inputs.gender} />
            <Link to='/login' className="text-sm   text-slate-800 hover:underline hover:text-blue-600 mt-2 inline-block">Already have an account?</Link>
            <div className="flex items-center justify-center">
                
            <button className='btn btn-block btn-sm mt-2 border border-slate-700' disabled={loading}>
							{loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
						</button>
            </div>
        </form>
        </div>
    </div>
  )
}

export default Signup

//starter code 
// import React from 'react'
// import GenderCheckBox from './GenderCheckBox'

// const Signup = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//         <div className="w-full p-6 rounded-lg shadow-md bg-blue-600 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border border-gray-100">
//         <h1 className="text-3xl font-semibold text-center text-gray-100" >Sign Up
//         <span className="text-blue-500">ChatApp</span></h1>
//         <form>
//             <div className="fullname">
//                 <label className="label p-2">
//                     <span className="text-base label-text text-slate-800">Full Name</span> 
//                 </label>
//                 <input type="text" placeholder="John Doe" className="w-full input input-bordered h-10"></input>
//             </div>
//             <div className="userName">
//                 <label className="label p-2">
//                     <span className="text-base label-text text-slate-800">userName</span> 
//                 </label>
//                 <input type="text" placeholder="John22Doe" className="w-full input input-bordered h-10"></input>
//             </div>
//             <div className="password">
//                 <label className="label p-2">
//                     <span className="text-base label-text text-slate-800">password</span> 
//                 </label>
//                 <input type="password" placeholder="Enter password" className="w-full input input-bordered h-10"></input>
//             </div>
//             <div className="cpassword">
//                 <label className="label p-2">
//                     <span className="text-base label-text text-slate-800"> Confirm password</span> 
//                 </label>
//                 <input type="password" placeholder="Confirm your password" className="w-full input input-bordered h-10"></input>
//             </div>
            
//             <GenderCheckBox/>
//             <a href="#" className="text-sm   text-slate-800 hover:underline hover:text-blue-600 mt-2 inline-block">Already have an account?</a>
//             <div className="flex items-center justify-center">
//                 <button className="btn btn-xsm w-auto btn-outline mt-2 text-2xl text-gray-100"> Sign Up</button>
//             </div>
//         </form>
//         </div>
//     </div>
//   )
// }

// export default Signup