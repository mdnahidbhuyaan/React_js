import React from "react";
import { Bookmark } from "lucide-react";
import Card from "./Components/Card";
import User from "./Components/User";
const App = () => {

const arr = [10,20,30,40,509,600]


  return (
    <div className="parent">
  {arr.map (function(elem){
    return <h1>{elem/2}</h1>
  })}
   
    </div>
  );
};

export default App;
