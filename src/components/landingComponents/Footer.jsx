import React from 'react'

const Footer = () => {
  return (
    <footer className='px-20 py-24 bg-blue-600 text-white'>
        <div className=" grid grid-cols-2">
            <div>   
                <h2 className="text-5xl font-bold">WanderWise</h2>
                <p className='mt-4 text-lg font-medium'>Contact</p>
                <p>+977 98040067888</p>
                <p>+977 9815308500</p>

                <p className='mt-4 text-lg font-medium'>Address</p>
                <p>Gramthan 2 pidarboni </p>
            </div>

            <div className="flex gap-24">
                <nav className="flex flex-col gap-4 [&>a]:text-xl [&>a]:hover:underline"> 

                    <a href="/trips">Trips</a>
                    <a href="/baggage">Baggage</a>
                    <a href="/itineraries">Itineraries</a>
                    <a href="/login">Login</a>
                </nav>

                 <nav className="flex flex-col gap-4 [&>a]:text-xl [&>a]:hover:underline">
                    <a href="/trips">Home</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                    <a href="/help">Help</a>
                </nav>
            </div>
        </div>

    </footer>
    
  )
}

export default Footer
