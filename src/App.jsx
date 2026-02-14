import React from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import Hero from './Components/Hero/Hero.jsx'
import Details from './Components/Details/Details.jsx'
import Myservices from './Components/MYsrevices/Myservices.jsx'
import Work from './Components/Work/Work.jsx'
import Touch from './Components/Touch/Touch.jsx'
import Footer from './Components/Footer/Footer.jsx'
import { Toaster } from 'react-hot-toast'


const App = () => {
  return (
    <div className='min-h-screen w-full bg-zinc-950 overflow-x-hidden'>
      <Toaster />
      <Navbar />
      
      {/* Main Content Wrapper */}
      <div className='pt-24'>
        <Hero />
        <Details />
        <Myservices />
        <Work />
        <Touch />
        <Footer />
      </div>
      
    </div>
  )
}

export default App;
