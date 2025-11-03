import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./components/Card";
const App = () => {
  const [userdata, setUserData] = useState([]);
  const [index, setIndex] = useState(1);
  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=10`
    );
    setUserData(response.data);
  };

  useEffect(() => {
    getData();
  }, [index]);
  let printUserData = <h3 className="top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2 font-semibold ">Loading...</h3>;
  if (userdata.length > 0) {
    printUserData = userdata.map(function (elem, idx) {
      return (
        <div key={idx}>
         <Card elem={elem}/>
        </div>
      );
    });
  }
  return (
    <div className="p-4  overflow-auto h-screen">
  
      <div className="flex h-[80%] flex-wrap gap-4 p-2">{printUserData}</div>
      <div className="flex justify-center gap-5 items-center p-2">
        <button
        style={{opacity : index == 1 ? 0.5 : 1}}
        className="bg-amber-400 text-black rounded text-sm cursor-pointer active:scale-95 px-4 py-1 font-semibold "
        onClick={()=>{
          if(index>1){
            setIndex(index-1)
            setUserData([])
           }
          }}
        >Prev</button>
        <h1>Page {index}</h1>
        <button className="bg-amber-400 text-black rounded text-sm cursor-pointer active:scale-95 px-4 py-1 font-semibold "
                onClick={()=>{
               setIndex(index+1)
                setUserData([])
        }}
        >Next</button>
      </div>
    </div>
  );
};

export default App;
