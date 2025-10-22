import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='h-full w-70 relative rounded-4xl overflow-hidden shrink-0'>
        <img className='h-full w-full object-cover' src={props.img} alt="" />
        <RightCardContent id={props.id} tag={props.tag} color={props.color}/>
   
      
    </div>
  )
}

export default RightCard
