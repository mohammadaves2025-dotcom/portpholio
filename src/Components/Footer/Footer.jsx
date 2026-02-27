import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState('')

  const subscribe = (e) => {
    e.preventDefault()
    toast.success("Welcome to the inner circle! Subscribed.")
    setEmail('')
  }

  const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com/mohammadaves2025-dotcom" },
    { icon: <FaLinkedinIn />, href: "#" },
    { icon: <FaTwitter />, href: "#" },
    { icon: <FaInstagram />, href: "#" },
  ];

  return (
    <footer className='w-full bg-zinc-950 text-white px-6 md:px-16 pt-24'>
      
      {/* Main Footer Content */}
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16 border-b border-zinc-900 pb-16'>

        {/* Brand Column */}
        <div className='max-w-md'>
          <div className="flex items-center text-white font-black text-2xl tracking-tighter italic mb-6">
            MOHAMMAD AVE
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              S
            </span>
          </div>
          <p className='text-zinc-400 text-lg leading-relaxed mb-8'>
            Building digital experiences that merge technical precision with creative innovation. Based in New Delhi, available globally.
          </p>
          
          {/* Social Icons */}
          <div className='flex gap-4'>
            {socialLinks.map((social, i) => (
              <a 
                key={i} 
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className='w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all duration-300'
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Newsletter Column */}
        <div className='flex flex-col gap-6'>
          <div>
            <h3 className='text-white font-bold text-xl mb-2'>Stay in the Loop</h3>
            <p className='text-zinc-500 text-sm'>Get notified about new projects and tech insights.</p>
          </div>
          
          <form 
            onSubmit={subscribe}
            className='flex items-center p-1.5 rounded-full bg-zinc-900 border border-zinc-800 focus-within:border-emerald-500/50 transition-all'
          >
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder='Your email address'
              required
              className='bg-transparent border-none outline-none px-4 py-2 w-full text-zinc-200 placeholder:text-zinc-600'
            />
            <button
              type="submit"
              className='bg-emerald-500 hover:bg-emerald-400 text-black font-black text-xs uppercase tracking-widest px-6 py-3 rounded-full transition-all active:scale-95'
            >
              Join
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Legal/Copyright */}
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 py-10'>
        <p className='text-zinc-500 text-xs font-mono tracking-widest uppercase'>
          © {new Date().getFullYear()} MOHAMMAD AVES — BUILT WITH MERN
        </p>

        <div className='flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500'>
          <a href="#" className='hover:text-white transition-colors'>Terms</a>
          <a href="#" className='hover:text-white transition-colors'>Privacy</a>
          <a href="#home" className='hover:text-white transition-colors text-emerald-500'>Back to Top ↑</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;