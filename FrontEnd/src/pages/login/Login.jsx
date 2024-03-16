const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-blue-200 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
        <h1 className="text-3xl font-semibold text-center text-gray-300" >Login
        <span className="text-blue-900">ChatApp</span></h1>
        <form>
            <div className="username">
                <label className="label p-2">
                    <span className="text-base label-text text-slate-800">username</span> 
                </label>
                <input type="text" placeholder="Enter username" className="w-full input input-bordered h-10"></input>
            </div>
            <div className="password">
                <label className="label p-2">
                    <span className="text-base label-text text-slate-800">password</span> 
                </label>

                <input type="password" placeholder="Enter password" className="w-full input input-bordered h-10"></input>
            </div>
            <a href="#" className="text-sm   text-slate-800 hover:underline hover:text-blue-600 mt-2 inline-block">{"Don't"}have an account?</a>
            <div className="flex items-center justify-center">
                <button className="btn btn-xsm w-auto btn-outline mt-2 text-2xl text-gray-300"> Login</button>
            </div>
        </form>
        </div>
    </div>
  )
}

export default Login

//starter code
// const Login = () => {
//     return (
//       <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//           <div className="w-full p-6 rounded-lg shadow-md bg-blue-600 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border border-gray-100">
//           <h1 className="text-3xl font-semibold text-center text-gray-300" >Login
//           <span className="text-blue-500">ChatApp</span></h1>
//           <form>
//               <div className="username">
//                   <label className="label p-2">
//                       <span className="text-base label-text text-slate-800">username</span> 
//                   </label>
//                   <input type="text" placeholder="Enter username" className="w-full input input-bordered h-10"></input>
//               </div>
//               <div className="password">
//                   <label className="label p-2">
//                       <span className="text-base label-text text-slate-800">password</span> 
//                   </label>
//                   <input type="password" placeholder="Enter password" className="w-full input input-bordered h-10"></input>
//               </div>
//               <a href="#" className="text-sm   text-slate-800 hover:underline hover:text-blue-600 mt-2 inline-block">{"Don't"}have an account?</a>
//               <div className="flex items-center justify-center">
//                   <button className="btn btn-xsm w-auto btn-outline mt-2 text-2xl text-gray-300"> Login</button>
//               </div>
//           </form>
//           </div>
//       </div>
//     )
//   }
  
//   export default Login