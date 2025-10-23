import React from 'react'

const App = () => {

  function btnclick(){
    console.log('clicked')
  }
  return (
    <div>
      <button onClick={btnclick}>Click</button>
    </div>
  )
}

export default App
