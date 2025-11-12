import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import {Routes,Route} from "react-router-dom"
import About from './pages/About'
import Product from './pages/Product'
import Notfound from './pages/Notfound'
import Main from './pages/Main'
import Woman from './pages/Woman'
import Kids from './pages/Kids'
import Courses from './pages/Courses'
import CourseDetails from './pages/CourseDetails'

const App = () => {
  return (
    <div className='h-screen'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:courseId" element={<CourseDetails />} />
        <Route path="/product" element={<Product />} >
         <Route path="main" element={<Main />} />
        <Route path="woman" element={<Woman />} />
        <Route path="kids" element={<Kids />} />
        </Route>
       
        <Route path="*" element={<Notfound />} />
      </Routes>
      
      <Footer/>
   
    </div>
  )
}

export default App
