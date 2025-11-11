import React from 'react'

const Navbar = () => {
  return (
    <div className='flex py-5 px-10  bg-blue-800 justify-between items-center'>
     <h2 className='text-white text-2xl font-bold'>Nahid</h2>
     <div className='flex gap-8'>
       <a className='text-white text-lg font-medume' href="/">Home</a>
       <a className='text-white text-lg font-medume' href="/about">About</a>
       <a className='text-white text-lg font-medume' href="/contact">Contact</a>
     </div>
    </div>
  )
}

export default Navbar
