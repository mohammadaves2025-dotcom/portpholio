import React, { useState, useEffect } from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Detect scroll to add shadow/background depth
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About Me", href: "#details" },
        { name: "Services", href: "#work" },
        { name: "Clients", href: "#clients" },
        { name: "Contact", href: "#touch" },
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
            scrolled ? "bg-zinc-950/80 backdrop-blur-md border-b border-white/5 py-3" : "bg-transparent py-5"
        }`}>
            <div className='max-w-7xl mx-auto flex justify-between items-center px-6 sm:px-12'>

                {/* Logo */}
                <div className="group cursor-pointer flex items-center text-white font-black text-xl sm:text-2xl tracking-tighter italic">
                    <span className="group-hover:text-emerald-400 transition-colors duration-300">MOHAMMAD</span>
                    <span className="mx-1 group-hover:translate-x-1 transition-transform duration-300">AVE</span>
                    <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                        S
                    </span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-10 text-sm font-medium items-center text-zinc-400">
                    {navLinks.map((link) => (
                        <AnchorLink 
                            key={link.name}
                            href={link.href} 
                            offset='100' 
                            className="hover:text-white transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
                        </AnchorLink>
                    ))}

                    <AnchorLink
                        href="#touch"
                        className='ml-4 px-6 py-2.5 rounded-full text-white text-xs font-bold uppercase tracking-widest bg-gradient-to-r from-emerald-600 to-teal-600 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all duration-300 active:scale-95'
                    >
                        Connect
                    </AnchorLink>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden text-2xl text-white cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <RiCloseLine /> : <RiMenu3Line />}
                </div>
            </div>

            {/* Mobile Dropdown - Animated Overlay */}
            <div className={`fixed inset-0 top-[72px] bg-zinc-950 z-40 flex flex-col items-center gap-8 pt-10 transition-transform duration-500 md:hidden ${
                menuOpen ? "translate-x-0" : "translate-x-full"
            }`}>
                {navLinks.map((link) => (
                    <AnchorLink 
                        key={link.name}
                        onClick={() => setMenuOpen(false)} 
                        href={link.href}
                        className="text-2xl font-semibold text-zinc-300 hover:text-emerald-400"
                    >
                        {link.name}
                    </AnchorLink>
                ))}
                <AnchorLink
                    href="#touch"
                    onClick={() => setMenuOpen(false)}
                    className='mt-4 px-8 py-3 rounded-full text-white font-bold bg-gradient-to-r from-pink-500 to-purple-600'
                >
                    Connect With Me
                </AnchorLink>
            </div>
        </nav>
    )
}

export default Navbar;