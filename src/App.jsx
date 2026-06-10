import React from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import Hero from './Components/Hero/Hero.jsx'
import Details from './Components/Details/Details.jsx'
import Myservices from './Components/MYsrevices/Myservices.jsx'
import Clients from './Components/Clients/Clients.jsx'
import Work from './Components/Work/Work.jsx'
import Touch from './Components/Touch/Touch.jsx'
import Footer from './Components/Footer/Footer.jsx'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <div className='relative min-h-screen w-full bg-zinc-950 text-zinc-100 selection:bg-emerald-500/30 selection:text-emerald-400 overflow-x-hidden'>

      {/* Background Ambient Glow - The "God Level" Touch */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-500/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/5 blur-[120px]" />
      </div>

      <Toaster position="bottom-right" reverseOrder={false} />

      <div className="relative z-10">
        <Navbar />

        <main className='pt-20 lg:pt-24'>
          <Hero />
          <Details />
          <Myservices />
          <Clients />
          <Work />
          <Touch />
          <Footer />
        </main>
      </div>

    </div>
  )
}

export default App;
