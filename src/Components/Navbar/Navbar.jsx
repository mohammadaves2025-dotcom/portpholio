import React, { useState } from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div className='bg-zinc-950 text-amber-50 w-full '>

            <div className='flex justify-between items-center px-5 sm:px-10 py-4'>

                {/* Logo */}
                <div className="flex items-center text-white font-extrabold text-2xl sm:text-3xl md:text-4xl tracking-wide">
                    MOHAMMAD&nbsp;AVE
                    <span className="
                        bg-gradient-to-r 
                        from-pink-500 
                        to-purple-500
                        bg-clip-text 
                        text-transparent
                    ">
                        S
                    </span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 text-md font-semibold items-center">
                    <AnchorLink href="#home" offset='80' className="hover:text-purple-300 transition">
                        Home
                    </AnchorLink>

                    <AnchorLink href="#details" offset='80' className="hover:text-purple-300 transition">
                        About Me
                    </AnchorLink>

                    <AnchorLink href="#work" offset='80' className="hover:text-purple-300 transition">
                        Services
                    </AnchorLink>

                    <AnchorLink href="#touch" offset='80' className="hover:text-purple-300 transition">
                        Contact
                    </AnchorLink>

                    <AnchorLink
                        href="#touch"
                        className='px-5 py-2 rounded-full
                        text-white text-sm font-bold
                        bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500
                        hover:scale-105
                        transition-transform duration-300'
                    >
                        Connect
                    </AnchorLink>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden text-3xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <RiCloseLine /> : <RiMenu3Line />}
                </div>

            </div>

            {/* Mobile Dropdown */}
            {menuOpen && (
                <div className="md:hidden flex flex-col items-center gap-6 py-6 bg-zinc-900 text-white font-semibold">
                    <AnchorLink onClick={() => setMenuOpen(false)} href="#home">Home</AnchorLink>
                    <AnchorLink onClick={() => setMenuOpen(false)} href="#details">About Me</AnchorLink>
                    <AnchorLink onClick={() => setMenuOpen(false)} href="#work">Services</AnchorLink>
                    <AnchorLink onClick={() => setMenuOpen(false)} href="#touch">Contact</AnchorLink>

                    <AnchorLink
                        href="#touch"
                        onClick={() => setMenuOpen(false)}
                        className='px-6 py-3 rounded-full
                        text-white text-sm font-bold
                        bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500'
                    >
                        Connect With Me
                    </AnchorLink>
                </div>
            )}

        </div>
    )
}

export default Navbar
