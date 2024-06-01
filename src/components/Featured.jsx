import React from 'react'

function Featured() {
  return (
    <div className='w-full h-screen bg-[#f1f1f1]'>
        <div className='w-full py-10 px-10 '>
            <h1 className='border-b-2 tracking-tight text-[6vw] mb-10 border-zinc-600'>Featured Projects</h1>
        </div>
        <div className='w-full flex px-10 gap-5'>
            <div className='w-1/2 rounded-xl h-[65vh] bg-cover bg-[url("https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png")]'>

            </div>
            <div className='w-1/2 rounded-xl h-[65vh] bg-cover bg-[url("https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg")]'></div>
        </div>

    </div>
  )
}

export default Featured