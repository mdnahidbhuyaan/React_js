import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <div className='nav'>
        <h3>This is navbar</h3>
      <div>
          <Link to="/"> Home</Link>
          <Link to="/about"> about</Link>
          <Link to="/contact"> contact</Link>
            <Link to="/product"> product</Link>          

        </div>
      </div>
  )
}

export default Navbar
