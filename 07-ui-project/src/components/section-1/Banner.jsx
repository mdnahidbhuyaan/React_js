import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Banner = () => {
  return (
    <div className='flex items-center gap-10 py-10 px-20 h-[90vh] '>
      <LeftContent/>
      <RightContent/>
    </div>
  )
}

export default Banner
