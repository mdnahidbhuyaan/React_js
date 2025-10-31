import React, { useEffect, useState } from 'react'

const App = () => {
  const [a , setA] = useState(0)
  const [b , setB] = useState(0)
function aChanging (){
  console.log("aChanging is running...")
}
function bChanging (){
  console.log("bChanging is running...")
}
  useEffect(function(){
    aChanging()
    // console.log("useEffect is running...")
  },[a])

  useEffect(function(){
    bChanging()
    // console.log("useEffect is running...")
  },[b])
  return (
    <div>
      <h1>A is {a}</h1>
      <h1>B is {b}</h1>
      <button onClick={()=>{
        setA(a+1)
      }}>ChangeA</button>
      <button
      onClick={()=>{
        setB(b-1)
      }}
      >ChangeB</button>

    </div>
  )
}

export default App

























// import axios from "axios";
// import React, { useState } from "react";

// const App = () => {
//   const [data, setData] = useState([])
//   const GetData =async () => {
// const response = await axios.get("https://picsum.photos/v2/list")
// setData(response.data)
//   };

//   return (
//     <div>
//       <button onClick={GetData}>GetData</button>
//       {data.map(function(elem,idx){
//         return  <h3 >Hello {elem.author}{idx}</h3>
//       })}
//     </div>
//   );
// };

// export default App;
