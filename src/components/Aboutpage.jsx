import React from 'react'

function Aboutpage() {
  return (
    <div className='py-20 px-20 bg-[#cdea68] text-[3vw] rounded-tl-3xl rounded-tr-3xl'>
        <h1 className='leading-10 mb-12 tracking-tight'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
        <div className='w-full flex pt-8 border-t-[.2vw] border-[#98ab50] '>
            <div className='w-1/2'>
                <h1 className='mt-10'>Our Approach</h1>
                <button className='px-6 py-2 flex uppercase gap-2 justify-center items-center text-xl mt-10 rounded-full bg-[#000000] text-white'>Read More
                <div className='w-2 h-2 rounded-full bg-zinc-100'></div>
                </button>
            </div>
            <div className='w-1/2 h-[80vh] border-2 rounded-3xl bg-[#c8da81] '></div>
        </div>
    </div>
  )
}

export default Aboutpage