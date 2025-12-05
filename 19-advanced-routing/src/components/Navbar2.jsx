import React from 'react'
import { useNavigate } from 'react-router-dom'
const Navbar2 = () => {
     const navigate = useNavigate();
  return (
    <div className='py-1 px-5 bg-cyan-200'>
        <button onClick={()=>navigate('/')} className='text-white bg-emerald-600 px-5 py-2 m-5 rounded-full font-semibold cursor-pointer active:scale-95'>Return to Home page</button>
      <button onClick={()=>navigate(-1)} className='text-white bg-emerald-600 px-5 py-2 m-5 rounded-full font-semibold cursor-pointer active:scale-95'>Back</button>
      <button onClick={()=>navigate(+1)} className='text-white bg-emerald-600 px-5 py-2 m-5 rounded-full font-semibold cursor-pointer active:scale-95'>Next</button>
    </div>
  )
}

export default Navbar2
