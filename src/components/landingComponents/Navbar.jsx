import React from 'react'
import CustomButton from '../shared/CustomButton'

const Navbar = () => {
  return (
       <header className= "px-20 py-4 flex justify-between items-center bg-gray-800 text-white">
        {/* left side of the navbar */}
        <div>
            <h1 className='text-4xl font-semibold'>Wander Wise</h1>

        </div>

        {/* right side of the navbar */}
        <div className='flex items-center gap-16'>
            <nav className='text-lg  space-x-8 '>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
                
            </nav>

            <CustomButton text="login" />
            
        </div>
       </header>
      
    )
}

export default Navbar
