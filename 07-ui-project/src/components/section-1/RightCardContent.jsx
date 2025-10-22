import React from 'react'

const RightCardContent = (props) => {
  return (
  <div className='absolute top-0 left-0 h-full w-full  p-7 flex flex-col justify-between '>
            <h2 className='bg-white rounded-full w-10 h-10 flex justify-center items-center text-1xl font-bold'>{props.id+1}</h2>
            <div >
                <p className='text-lg leading-relaxed text-shadow-2xs text-white mb-14 '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus est voluptas a, tenetur dicta quasi!</p>
                <div className='flex justify-between'>
                    <button style={{backgroundColor:props.color}} className=' text-white font-medium px-8 py-2 rounded-full'>Satisfied</button>
                    <button className=' text-white font-medium px-3 py-2 rounded-full '><i className="ri-arrow-right-line"></i></button>
                    
                </div>
            </div>

        </div>
  )
}

export default RightCardContent
