import React, { useState } from 'react'
import toast from 'react-hot-toast'

const Footer = () => {
  const [email, setEmail] = useState('')

  const subscribe = (e) => {
    e.preventDefault()
    toast.success("Subscribed Successfully")
    setEmail('')
  }

  return (
    <footer className='w-full bg-zinc-950 text-white px-4 sm:px-6 md:px-12 pt-16'>

      {/* Top Section */}
      <div className='
        flex flex-col md:flex-row 
        justify-between 
        gap-10 
        border-b border-zinc-800 
        pb-10
      '>

        {/* Brand */}
        <div className='max-w-md'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl font-extrabold text-green-500'>
            <span className='text-white'>Mohammad</span> Aves
          </h1>

          <p className='mt-4 text-sm sm:text-base text-zinc-400 leading-relaxed'>
            I am a fullstack web developer from New Delhi looking forward 
            to connect and collaborate with tech enthusiasts.
          </p>
        </div>

        {/* Subscription */}
        <form 
          onSubmit={subscribe}
          className='flex flex-col sm:flex-row gap-4 w-full md:w-auto'
        >
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder='Enter Your Email'
            required
            className='
              w-full sm:w-72
              border border-zinc-700 
              rounded-full 
              py-2 px-4 
              bg-zinc-800 
              focus:outline-none 
              focus:ring-2 
              focus:ring-green-500
              transition
            '
          />

          <button
            type="submit"
            className='
              px-6 py-3 
              rounded-full 
              bg-green-500 
              text-white 
              font-semibold 
              hover:scale-105 
              transition
            '
          >
            Subscribe
          </button>
        </form>

      </div>

      {/* Bottom Section */}
      <div className='
        flex flex-col md:flex-row 
        justify-between 
        items-center 
        gap-6 
        py-6 
        text-sm 
        text-zinc-400
      '>

        <h1 className='text-center md:text-left'>
          © 2025 Mohammad Aves. All rights reserved.
        </h1>

        <div className='flex flex-wrap justify-center gap-6'>
          <h1 className='hover:text-white cursor-pointer transition'>
            Terms of Services
          </h1>
          <h1 className='hover:text-white cursor-pointer transition'>
            Privacy Policy
          </h1>
          <h1 className='hover:text-white cursor-pointer transition'>
            Connect with me
          </h1>
        </div>

      </div>

    </footer>
  )
}

export default Footer

