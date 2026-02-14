import React from 'react'

const Work = () => {
  return (
    <div id='work' className='bg-zinc-950  h-full w-full'>
      <h1 className='flex flex-auto justify-center text-6xl text-green-500 font-extrabold mt-20'><span className='text-white'>My</span> Latest Work</h1>
      <div className='px-35 py-20'>
        <div className='flex gap-7 '>
            <div className='hover:scale-105 transition'>
                <img className='h-60' src="https://greatstack.in/portfolio/assets/project_1-5xYOfh0z.svg" alt="" />
            </div>
            <div className='hover:scale-105 transition'>
                <img className='h-60' src="https://greatstack.in/portfolio/assets/project_2-ko3fLZz-.svg" alt="" />
            </div>
            <div className='hover:scale-105 transition'>
                <img className='h-60' src="https://greatstack.in/portfolio/assets/project_3-G9x9U39U.svg" alt="" />
            </div>
        </div>
        <div className='flex gap-7 mt-5'>
            <div className='hover:scale-110 transition'>
                <img className='h-60' src="https://greatstack.in/portfolio/assets/project_4-KRxErSUy.svg" alt="" />
            </div>
            <div className='hover:scale-105 transition'>
                <img className='h-60' src="https://greatstack.in/portfolio/assets/project_5-u53cBB9v.svg" alt="" />
            </div>
            <div className='hover:scale-105 transition'>
                <img className='h-60' src="https://greatstack.in/portfolio/assets/project_6-VGGcxYRF.svg" alt="" />
            </div>
        </div>
        </div>
        <div className='group flex flex-auto justify-center hover:scale-105 transition '>
            <button className='px-7 py-3 bg-green-500 font-extrabold text-xl text-white rounded-full group-hover:w-50 transition'>Show More</button>
        </div>
    </div>

  )
}

export default Work
