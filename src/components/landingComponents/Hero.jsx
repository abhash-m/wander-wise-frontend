import React from 'react'

const Hero = () => {
  return (
    
      <section classname='relative'>
        <div className='h-[90vh]  overflow-hidden flex  items-center'>
            <img src="/heroImage.jpg" alt="wander-wise" />
        </div>
        {/* <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center'>
            <h1 className='text-6xl font-bold text-white'>Explore the world with Wander Wise</h1>
            <p className='text-lg text-white mt-4'>Discover new destinations, plan your trips, and make unforgettable memories.</p>
            <button className='bg-blue-700 px-5 py-2 mt-6 text-white rounded-lg hover:bg-blue-800 transition duration-300'>Get Started</button>
        </div> */}
        <div className='bg-black opacity-50 h-[90vh] w-full
         absolute top-0 '></div>

         <div className='absolute top-0 '>

          <div className='w-1/2 mx-auto mt-40 text-center'>

            <h1 className='text-4xl  text-white font-bold '>
              Paln your trip with Wander Wise</h1>

            <p className='text-xl text-white font-medium mt-6 '>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Obcaecati nemo vitae voluptatem aperiam, 
              dolorum deleniti in doloremque molestias similique aliquid!
            </p>

            

          </div>

         
        </div>

      </section>
    
  )
}

export default Hero
