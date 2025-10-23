import React, { useState } from 'react'

const App = () => {


const  [num, setNum] = useState(0)


function increase(){
  setNum(num + 1)
}
function decrease(){
  setNum(num-1)
}
function jump5Num(){
  setNum(num + 5)
}
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
      <button onClick={jump5Num}>decrease</button>
    </div>
  )
}

export default App
