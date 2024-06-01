import React from 'react'
import { FaLongArrowAltUp } from "react-icons/fa";function Landingpage() {
  return (
    <div className='w-full h-[85vh]'>
    <div className='Textstructure mt-[8vh] ml-[6vw]'>
        {["WE CREATE","EYE-OPENING","PRESENTATIONS"].map((item,index)=>{
            return( <div className='masker -mt-4'>
                <div className='w-fit flex items-center justify-center'>
                    {index===1 && ( <div className='w-[10vw] h-[5.6vw] mb-[.2vw] rounded-md bg-green-500 '></div> )}
            <h1 className='text-8xl leading-1 font-bold font-["Gilroy"]  tracking-tight'>{item}</h1></div>
        </div>)
        })}
       </div>
       <div className='border-t flex justify-between px-6 items-center border-zinc-400  mt-40'>
        {["For public and private companies","From the first pitch to IPO"].map((item,index)=>(
            <p className='text-md leading-none px-3 py-4 font-light tracking-tight'>{item}</p>
        ))}
        <div className='flex justify-center items-center gap-2'><div className='start px-3 py-1 border-[.1vw] rounded-full border-zinc-600 '>Start the project</div>
        <div className='w-9 h-9 flex items-center justify-center rotate-45 border-[.1vw] rounded-full border-zinc-600 '>
            <FaLongArrowAltUp/>
        </div></div>
    </div>
     </div>
     
    
  )
}

export default Landingpage