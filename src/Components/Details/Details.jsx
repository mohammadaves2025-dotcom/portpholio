import React from 'react'
import { assets } from "../../assets/assets";



const Details = () => {
    return (
        <div id="details" className="h-full bg-zinc-950 text-white mt-20 p-6 ml-10 mr-40">
            <h1
                className="
                            text-4xl md:text-7xl font-extrabold
                            text-center px-6 tracking-wide
                            [font-family:'Poppins',sans-serif]
                            text-green-500
                            
                            drop-shadow-lg
                        "
            >
                <span className='text-white'>About</span> Me
            </h1>
            <div className='flex gap-10 mt-20'>
                <div className='flex flex-col'>
                    <img className='w-260 rounded-full ' src={assets.logo} alt="logo" />
                    <h1 className='text-2xl font-extrabold text-green-400 ml-27'>Mohammad Aves</h1>
                </div>
                <div className='text-md font-semibold'>
                    <p className='mb-5'>I am a Full Stack Web Developer specializing in the MERN stack, with hands-on experience in building complete, real-world web applications. I work across both frontend and backend to develop scalable features, RESTful APIs, and efficient databases.</p>
                    <p>Alongside development, I apply strong Data Structures and Algorithms fundamentals to write optimized, maintainable code and solve complex problems.</p>
                    <div className="mt-10 p-6 rounded-2xl bg-zinc-800/60 border border-zinc-700 backdrop-blur-sm">
                        <h2 className="
    text-2xl font-bold mb-4
    bg-gradient-to-r from-emerald-400 to-cyan-500
    bg-clip-text text-transparent
    [font-family:'Poppins',sans-serif]
  ">
                            Academic Background
                        </h2>

                        <p className="text-zinc-300 leading-relaxed">
                            I am currently a 2nd-year B.Tech student in Electrical and Computer Engineering
                            at <span className="font-semibold text-white">Jamia Millia Islamia, New Delhi</span>.
                            Alongside my academic curriculum, I actively focus on full-stack web development
                            and problem-solving using Data Structures and Algorithms.
                        </p>

                        <div className="flex flex-wrap gap-6 mt-6 text-center">
                            <div className="px-6 py-4 rounded-xl bg-zinc-900 hover:scale-105 transition">
                                <h3 className="text-xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                                    2nd Year
                                </h3>
                                <p className="text-sm text-zinc-400 mt-1">B.Tech Student</p>
                            </div>

                            <div className="px-6 py-4 rounded-xl bg-zinc-900 hover:scale-105 transition">
                                <h3 className="text-xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                                    8.82
                                </h3>
                                <p className="text-sm text-zinc-400 mt-1">Current SPI</p>
                            </div>
                            <div className="px-6 py-4 rounded-xl bg-zinc-900 hover:scale-105 transition">
                                <h3 className="text-xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                                    Branch
                                </h3>
                                <p className="text-sm text-zinc-400 mt-1">Electrical And Computer Engineering </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='flex w-full justify-center mt-10 text-center mx-auto gap-10 text-lg font-semibold mt-20'>
                <div className='border-r-2 px-3 h-[20%] w-[33%] hover:scale-125 transition'>
                    <h1 className='font-bold bg-gradient-to-r from-purple-500 to-orange-500 bg-clip-text text-transparent text-4xl'>1+ </h1>
                    <h1 className='mt-2'>YEARS OF EXPERIENCE</h1>
                </div>
                <div className='border-r-2 px-3 h-[20%] w-[33%] hover:scale-125 transition'>
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-orange-400 bg-clip-text text-transparent">4+ </h1>
                    <h1 className='mt-2'>PROJECTS</h1>
                </div>
                <div className=' px-3 h-[  20%] w-[33%] hover:scale-125 transition'>
                    <h1 className='text-4xl text-green-400 font-extrabold'>Actively</h1>
                    <h1 className='mt-2'>Looking for an Internship </h1>
                </div>
            </div>

        </div>

    )
}

export default Details
