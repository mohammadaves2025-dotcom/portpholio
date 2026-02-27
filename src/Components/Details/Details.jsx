import React from 'react';
import { assets } from "../../assets/assets";
import { HiOutlineAcademicCap, HiOutlineLightningBolt, HiOutlineSparkles } from "react-icons/hi";

const Details = () => {
    return (
        <section 
            id="details" 
            className="relative w-full bg-zinc-950 text-white py-24 px-6 md:px-16 overflow-hidden"
        >
            {/* Background Accent */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-emerald-500/5 blur-[120px] rounded-full -z-10" />

            {/* Header */}
            <div className="flex flex-col items-center mb-20">
                <h2 className="text-emerald-500 font-mono text-sm tracking-[0.3em] uppercase mb-4">
                    // About My Journey
                </h2>
                <h1 className="text-4xl md:text-7xl font-black tracking-tighter text-center">
                    Bridging <span className="text-zinc-500">Hardware</span> & <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">Software.</span>
                </h1>
            </div>

            <div className='max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start'>

                {/* Left: Identity Section */}
                <div className='w-full lg:w-1/3 flex flex-col items-center'>
                    <div className="relative p-1 rounded-full bg-gradient-to-b from-emerald-500 to-zinc-800 shadow-2xl shadow-emerald-500/10">
                        <img 
                            className='w-48 sm:w-64 rounded-full border-4 border-zinc-950 object-cover aspect-square' 
                            src={assets.logo} 
                            alt="Mohammad Aves" 
                        />
                    </div>
                    <div className="mt-8 text-center">
                        <h3 className='text-3xl font-black tracking-tight text-white'>
                            Mohammad Aves
                        </h3>
                        <p className="text-emerald-500 font-mono text-sm mt-2 uppercase tracking-widest">
                            Full-Stack Engineer
                        </p>
                    </div>
                </div>

                {/* Right: Narrative Section */}
                <div className='w-full lg:w-2/3'>
                    <div className='space-y-6 text-zinc-400 text-lg md:text-xl leading-relaxed'>
                        <p>
                            I specialize in the <span className="text-white font-semibold">MERN stack</span>, building high-performance web applications that solve real-world problems. My approach combines the rigor of <span className="text-white underline decoration-emerald-500/30">Electrical Engineering</span> with the agility of modern software development.
                        </p>
                        <p>
                            From architecting RESTful APIs to optimizing frontend performance, I focus on writing clean, maintainable code backed by strong <span className="text-emerald-400 font-bold italic">DSA fundamentals</span>.
                        </p>
                    </div>

                    {/* Glassmorphic Academic Card */}
                    <div className="mt-12 p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800 backdrop-blur-md relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                            <HiOutlineAcademicCap size={80} />
                        </div>
                        
                        <h4 className="flex items-center gap-3 text-xl font-bold text-white mb-6">
                            <HiOutlineSparkles className="text-emerald-400" />
                            Academic Foundation
                        </h4>

                        <p className="text-zinc-400 mb-8 max-w-xl">
                            Currently pursuing B.Tech in <span className="text-zinc-100 font-medium">Electrical & Computer Engineering</span> at Jamia Millia Islamia. Maintaining a strong balance between academic excellence and core technical proficiency.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {[
                                { label: "Current Year", value: "2nd Year", color: "from-emerald-400 to-teal-500" },
                                { label: "Current SPI", value: "8.82", color: "from-purple-400 to-pink-500" },
                                { label: "Location", value: "New Delhi", color: "from-blue-400 to-indigo-500" }
                            ].map((stat, i) => (
                                <div key={i} className="bg-zinc-950/50 border border-zinc-800 p-4 rounded-2xl hover:border-zinc-700 transition-colors">
                                    <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold mb-1">{stat.label}</p>
                                    <p className={`text-xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>{stat.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Impact Stats */}
            <div className='mt-24 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12 border-t border-zinc-900 pt-16'>
                {[
                    { val: "1+", label: "YEARS OF EXPERIENCE", gradient: "from-emerald-400 to-teal-500" },
                    { val: "4+", label: "COMPLETED PROJECTS", gradient: "from-emerald-400 to-teal-500" },
                    { val: "Actively", label: "SEEKING INTERNSHIP", gradient: "from-emerald-400 to-teal-500", highlight: true }
                ].map((stat, i) => (
                    <div key={i} className='group cursor-default'>
                        <h5 className={`text-5xl font-black tracking-tighter mb-2 transition-all duration-300 group-hover:scale-110 ${stat.highlight ? 'text-emerald-400' : 'text-white'}`}>
                            {stat.val}
                        </h5>
                        <p className='text-zinc-500 font-mono text-xs tracking-widest font-bold uppercase'>
                            {stat.label}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Details;