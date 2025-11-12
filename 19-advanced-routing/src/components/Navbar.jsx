import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex py-5 px-10  bg-cyan-900 justify-between items-center'>
     <h2 className='text-white text-2xl font-bold'>Nahid</h2>
     <div className='flex gap-8'>
      <Link className='text-lg font-medium text-white' to="/">Home</Link>
      <Link className='text-lg font-medium text-white' to="/about">About</Link>
      <Link className='text-lg font-medium text-white' to="/courses">Courses</Link>
      <Link className='text-lg font-medium text-white' to="/product">Product</Link>
     </div>
    </div>
  )
}

export default Navbar
