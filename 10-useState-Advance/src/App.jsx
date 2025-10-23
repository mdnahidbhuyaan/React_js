import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState([10,20,30,40,50]);
  const btnClick = () => {
  const newNum  =[...num]
  newNum.push(60)
  setNum(newNum)
  };
  return (
    <div>
      <h1>
     {num}
      </h1>
      <button onClick={btnClick}>click</button>
    </div>
  );
};

export default App;
