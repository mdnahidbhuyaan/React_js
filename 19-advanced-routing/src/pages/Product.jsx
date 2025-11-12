import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
      <div className='flex justify-center gap-10 py-4'>
        <Link className='text-xl font-semibold' to="/product/main">Men's Collection</Link>
        <Link className='text-xl font-semibold' to="/product/woman">Women's Collection</Link>
        <Link className='text-xl font-semibold' to="/product/kids">Kids Collection</Link>
      </div>
      {/* <h1>Product page</h1> */}
      <Outlet />
    </div>
  )
}

export default Product
