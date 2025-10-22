import React from 'react'
import 'remixicon/fonts/remixicon.css'
import RightCard from './RightCard'
const RightContent = (props) => {


  return (
    <div id='right' className='h-full flex flex-nowrap gap-10 w-2/3 p-6 overflow-x-auto rounded-4xl'>
  
{props.users.map(function(elem,idx){
  return <RightCard key={idx} id={idx}  img={elem.img} color={elem.color} tag={elem.tag}/>
})}
   
    </div>
  )
}

export default RightContent
