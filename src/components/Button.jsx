import React from 'react'

const Button = ({label, iconURL}) => {
  return (
 <button className={`flex justify-center items-center ${iconURL ? "bg-coral-red text-white" : "bg-transparent border text-slate-gray border-slate-gray" } bg-coral-red py-4 px-7 rounded-full gap-2 font-montserrat leading-none `}>
     {label}
   {iconURL && <img src={iconURL} alt="buttonImg" className='ml-2 rounded-full w-5 h-5' />}
 </button>
  )
}

export default Button