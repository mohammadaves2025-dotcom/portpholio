import React from 'react'
import { useState } from 'react';
import toast from 'react-hot-toast';

const Footer = () => {
const [email, setEmail] = useState('');

const subscribe = (e) =>{
    e.preventDefault();
    toast.success("Subscribed Successfully");
}

  return (
    <div className='h-full w-full bg-zinc-950 text-white px-10 pt-20'>
      <div className='flex justify-around border-b-2 pb-5'>
            <div>
                <h1 className="
                text-green-500 text-4xl font-extrabold
            "><span className='text-white'>Mohammad</span> Aves</h1>
                <p className='mt-5 text-sm'>I am a fullstack web developer from, New Delhi  <br />looking forward to connect and collaborate with techies</p>
                </div>
            <div className='mr-17'>
                <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" placeholder='Enter Your Email' className='w-70 border-2 rounded-full py-3 px-2 bg-zinc-700'/>
                <button onClick={(e) => subscribe(e)} className='px-7 border-2 rounded-full py-3 bg-green-500 text-white font-extrabold border border-green-400 hover:scale-105 ml-3'>Subscribe</button>
            </div> 
      </div>
      <div className='flex gap-80 px-20 py-4'>
        <h1>© 2025 Mohammad Aves. All rights reserved.</h1>
        <div className='flex gap-18'>
            <h1>Term of Services</h1>
            <h1>Privacy Policy</h1>
            <h1>Connect with me</h1>
        </div>
      </div>
    </div>
  )
}

export default Footer
