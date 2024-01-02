import React, { useEffect } from 'react'

import Navbar from './Components/Navbar';
import CarouselProjects from './Components/CarouselProjects'
import Profile from './Components/Profile'
import Skills from './Components/Skills';
import ProjectsWeb from './Components/ProjectsWeb';
import ProjectsGames from './Components/ProjectsGames';
import Footer from './Components/Footer';

import AOS  from '@dartmoon/aos-responsive'
import "aos/dist/aos.css";


function App() {

  useEffect(()=>{
    AOS.init({duration:900});
  })

  return (
    <div className='flex flex-col overflow-x-hidden'>
      <div className='fixed top-0 w-full z-40'>
        <Navbar />
      </div>
      <div className='animate-fadeIn2 pb-40 mt-14 bg-blue' id='inicio'>
        <h1 className='text-yellow text-center font-Antonio mt-20 mb-20 animate-bounce animate-infinite animate-duration-[2000ms] animate-delay-[1950ms] animate-ease-in-out z-10 lg:text-8xl md:text-6xl text-4xl'>¡Bienvenido!</h1>
        <CarouselProjects /> 
      </div>
      <div className='bg-yellow' >
        <Profile />
      </div>
      <div className='bg-blue'>
        <Skills />
      </div>
      <div className='bg-yellow' id='projectsweb'>
        <ProjectsWeb />
      </div>
      <div className='bg-blue' id='projectsgames'>
        <ProjectsGames />
      </div>
      <div className='bg-yellow' id='contact'>
        <Footer />
      </div>
    </div>
  )
}

export default App