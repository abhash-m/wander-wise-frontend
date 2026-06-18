import React from 'react'
import Navbar from '../components/landingComponents/Navbar'
import Hero from '../components/landingComponents/Hero'
import Feautres from '../components/landingComponents/Feautres'
import About from '../components/landingComponents/About'
import { TestTube } from 'lucide-react'
import Testimonials from '../components/landingComponents/Testimonials'
import Footer from '../components/landingComponents/footer'


const Landing = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Feautres />
        <About />
        <Testimonials />
        <Footer />
        
        

      
        
        
    </div>
  )
}

export default Landing
