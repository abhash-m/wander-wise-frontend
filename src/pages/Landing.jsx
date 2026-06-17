import React from 'react'
import Navbar from '../components/landingComponents/Navbar'
import Hero from '../components/landingComponents/Hero'
import Feautres from '../components/landingComponents/Feautres'
import About from '../components/landingComponents/About'
import { TestTube } from 'lucide-react'
import Testimonials from '../components/landingComponents/Testimonials'

const Landing = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Feautres />
        <About />
        <Testimonials />
        
        
    </div>
  )
}

export default Landing
