import React from 'react'
import { motion } from "framer-motion"
function Marquee() {
  return (
    <div className='w-full py-10  rounded-tl-3xl rounded-tr-3xl text-white bg-[#004d43]'>
        <div className='text border-t-2 border-b-2 text-[17vw]  uppercase  border-zinc-300 flex whitespace-nowrap'>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity ,duration:5}} className='mb-[2vh] leading-none'>We are ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:5}} className='mb-[2vh] leading-none'>We are ochi</motion.h1>

        </div>
    </div>
  )
}

export default Marquee