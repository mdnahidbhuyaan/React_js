import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About'
import Contact from './pages/Contact.jsx'
const App = () => {
  return (
    <div>
      <div>
        <h3>Nahdi</h3>
        <div className='nav'>
          <a href="/"> Home</a>
          <a href="/about"> about</a>
          <a href="/contact"> contact</a>
        </div>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>

      
      </Routes>
        
    </div>
  )
}

export default App
