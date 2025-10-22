import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'

const Section1 = (props) => {

  return (
    <div className='h-screen w-full'>
      <Navbar/>
      <Banner users={props.users}/>
    </div>
  )
}

export default Section1
