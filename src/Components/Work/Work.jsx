import React from 'react';
import { HiOutlineExternalLink, HiOutlineCode } from "react-icons/hi";
import { assets } from '../../assets/assets.js';

const projects = [
  {
    title: "JCS Consultancy Website",
    category: "Full Stack / MERN",
    tags: ["React", "Node.js", "MongoDB", "Tailwind"],
    img: assets.jcs,
    link: "https://www.jamiaconsultancyservices.in/",
    github: "https://github.com/mohammadaves2025-dotcom/JCS_FullStack"
  },
  {
    title: "Cricket DRS System",
    category: "Computer Vision / Python",
    tags: ["Python", "OpenCV", "Tkinter"],
    img: assets.drs,
    link: "https://github.com/mohammadaves2025-dotcom/DRS-zenith",
    github: "https://github.com/mohammadaves2025-dotcom/DRS-zenith"
  },
  {
    title: "Hostel Management System",
    category: "Full Stack / MERN",
    tags: ["React", "Node.js", "MongoDB", "Tailwind"],
    img: assets.hostel,
    link: "https://hostel-management-thyn.vercel.app/",
    github: "https://github.com/mohammadaves2025-dotcom/Hostel_Management"
  },
  {
    title: "Fraud Detection System",
    category: "Full Stack / MERN",
    tags: ["React", "Node.js", "TIgerGraph", "Tailwind"],
    img: assets.sentinel,
    link: "https://sentinel-graph-szgt.vercel.app/",
    github: "https://github.com/mohammadaves2025-dotcom/SentinelGraph"
  },
  {
    title: "VoltIq - AI-Powered Electricity Consumption Checker",
    category: "Machine Learning / Python",
    tags: ["Python", "FastAPI", "MERN"],
    img: assets.volt,
    link: "https://volt-iq-eo6n.vercel.app/",
    github: "https://github.com/mohammadaves2025-dotcom/VoltIQ"
  },
  {
    title: "AI-Powered Code Assistant",
    category: "Machine Learning / Web",
    tags: ["MERN", "Scikit-Learn", "Flask","Gemini API"],
    img: assets.gpt,
    link: "https://quickgpt-sandy.vercel.app/",
    github: "https://github.com/mohammadaves2025-dotcom/QuickGPT"
  },
  // Add more projects following the same structure
];

const Work = () => {
  return (
    <section id='work' className='bg-zinc-950 w-full py-24 px-6 overflow-hidden'>

      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-emerald-500 font-mono text-sm tracking-[0.3em] uppercase mb-4 text-center">
              // Selected Portfolio
          </h2>
          <h1 className='text-4xl sm:text-5xl md:text-7xl text-white font-black tracking-tighter text-center'>
            Recent <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent italic">Creations.</span>
          </h1>
        </div>

        {/* Projects Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <div
              key={index}
              className='group relative rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 transition-all duration-500 hover:-translate-y-2'
            >
              {/* Image Container */}
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1'
                />
              </div>

              {/* Glassmorphic Content Overlay */}
              <div className='absolute inset-0 bg-zinc-950/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 backdrop-blur-sm'>
                <div className='translate-y-10 group-hover:translate-y-0 transition-transform duration-500'>
                  <p className='text-emerald-400 font-bold text-xs uppercase tracking-widest mb-2'>
                    {project.category}
                  </p>
                  <h3 className='text-2xl font-black text-white mb-4'>
                    {project.title}
                  </h3>

                  {/* Tags */}
                  <div className='flex flex-wrap gap-2 mb-6'>
                    {project.tags.map(tag => (
                      <span key={tag} className='text-[10px] px-2 py-1 rounded bg-white/10 text-white/80 border border-white/10'>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className='flex gap-4'>
                    <a href={project.link} className='p-3 rounded-full bg-emerald-500 text-black hover:bg-emerald-400 transition-colors'>
                      <HiOutlineExternalLink size={20} />
                    </a>
                    <a href={project.github} className='p-3 rounded-full bg-zinc-800 text-white hover:bg-zinc-700 transition-colors border border-white/10'>
                      <HiOutlineCode size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Improved Show More Button */}
        <div className='flex justify-center mt-20'>
          <button className='group relative px-10 py-4 bg-transparent border-2 border-emerald-500 text-emerald-500 font-black text-lg rounded-full overflow-hidden transition-all duration-300 hover:text-white'>
            <a target='blank' href="https://github.com/mohammadaves2025-dotcom">
              <span className='relative z-10'>SHOW MORE PROJECTS</span>
              <div className='absolute inset-0 bg-emerald-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300'></div>
            </a>
          </button>
        </div>
      </div>

    </section>
  )
}

export default Work;