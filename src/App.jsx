import React, { useState } from "react";
import axios from "axios";
const App = () => {
  const [userdata, setUserData] = useState([]);
  
  const getData = async () => {
    const response = await axios.get(
      "https://picsum.photos/v2/list?page=2&limit=30"
    );
    setUserData(response.data);
  };

  useState(() => {
    getData();
  }, []);
  let printUserData = "No user Available";
  if (userdata.length > 0) {
    printUserData = userdata.map(function (elem, idx) {
      return (
        <div key={idx}>
          <a href={elem.url} target="_blank">
            <div className="h-40 w-44 overflow-hidden mt-10">
              <img
                src={elem.download_url}
                alt=""
                className="h-full w-full  object-cover rounded-xl"
              />
            </div>
            <h2 className="font-bold text-lg">{elem.author}</h2>
          </a>
        </div>
      );
    });
  }
  return (
    <div className="p-10  overflow-auto h-screen">
      <div className="flex flex-wrap gap-4 p-2">{printUserData}</div>
      <div className="flex justify-center gap-5 items-center p-4">
        <button className="bg-amber-400 text-black rounded text-sm cursor-pointer active:scale-95 px-4 py-1 font-semibold ">Prev</button>
        <button className="bg-amber-400 text-black rounded text-sm cursor-pointer active:scale-95 px-4 py-1 font-semibold ">Next</button>
      </div>
    </div>
  );
};

export default App;
