
import axios from "axios";
import React, { useState } from "react";

const App = () => {
  const [data, setData] = useState([])
  const GetData =async () => {
const response = await axios.get("https://picsum.photos/v2/list")
setData(response.data)
  };

  return (
    <div>
      <button onClick={GetData}>GetData</button>
      {data.map(function(elem,idx){
        return  <h3 >Hello {elem.author}{idx}</h3>
      })}
    </div>
  );
};

export default App;
