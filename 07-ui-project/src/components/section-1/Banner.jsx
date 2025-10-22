import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Banner = (props) => {
  console.log(props)
  return (
    <div className='flex items-center gap-10 pb-15 pt-6 px-20 h-[90vh] '>
      <LeftContent/>
      <RightContent users={props.users}/>
    </div>
  )
}

export default Banner
