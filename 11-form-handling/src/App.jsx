import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const submiteHandler = (e) => {
    e.preventDefault();
    console.log("form submitted", title);
    setTitle("");
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          submiteHandler(e);
        }}
      >
        <input
         type="text" 
         placeholder="Inter yor name" 
         value={title}
         onChange={(e)=>{
          setTitle(e.target.value)
         }}
    
         />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
