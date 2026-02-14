import React from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll";



const Navbar = () => {


    return (
        <div className='bg-zinc-950  text-amber-50 flex justify-between'>
            {/* <h1 className='ml-20 mt-10 text-4xl font-extrabold'>Mohammad Aves</h1> */}
            <div className="flex items-center text-white font-extrabold text-4xl tracking-wide mx-10  ">
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

            <div className="mt-5 flex gap-10 text-md font-semibold ">
                <AnchorLink href="#home" offset='80' className="rounded-full hover:text-purple-300 hover:scale-105">
                    Home
                </AnchorLink>

                <AnchorLink href="#details" offset='80' className="rounded-full hover:text-purple-300 hover:scale-105">
                    About Me
                </AnchorLink>

                <AnchorLink href="#work" offset='80' className="rounded-full hover:text-purple-300 hover:scale-105">
                    Services
                </AnchorLink>

                <AnchorLink href="#touch" offset='80' className="rounded-full hover:text-purple-300 hover:scale-105">
                    Contact
                </AnchorLink>
            </div>
            <div className='px-14 flex items-center mt-4'>
                <AnchorLink
                    href="#touch"
                            className='px-5 py-3 rounded-full
                            text-white text-sm font-bold
                            bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500
                            hover:scale-105
                            transition-transform duration-300'
                >
                    Connect With Me
                </AnchorLink>
            </div>

        </div>
    )
}

export default Navbar