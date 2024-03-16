
const GenderCheckBox = () => {
  return (
    <div className="flex">
        <div className="form-control">
      <label htmlFor="male" className={`label gap-2 cursor-pointer`}>
        <span className=" label-text text-slate-800">Male</span>
        <input type="checkbox" className="checkbox border-slate-900" />
      </label>
        </div>
        <div className="form-control">
      <label htmlFor="male" className={`label gap-2 cursor-pointer`}>
        <span className=" label-text text-slate-800">Female</span>
        <input type="checkbox" className="checkbox border-slate-900" />
      </label>
        </div>
    </div>

  )
}

export default GenderCheckBox
//starter code

// const GenderCheckBox = () => {
//   return (
//     <div className="flex">
//         <div className="form-control">
//       <label htmlFor="male" className={`label gap-2 cursor-pointer`}>
//         <span className=" label-text text-slate-800">Male</span>
//         <input type="checkbox" className="checkbox border-slate-900" />
//       </label>
//         </div>
//         <div className="form-control">
//       <label htmlFor="male" className={`label gap-2 cursor-pointer`}>
//         <span className=" label-text text-slate-800">Female</span>
//         <input type="checkbox" className="checkbox border-slate-900" />
//       </label>
//         </div>
//     </div>

//   )
// }

// export default GenderCheckBox