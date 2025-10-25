import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    const copyTask = [...task];
    copyTask.push({ title, details });
    setTask(copyTask);
   console.log(task)
    setTitle("");
    setDetails("");
  };

  return (
    <div className="h-screen  lg:flex">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex p-10 lg:w-1/2 items-start gap-5  flex-col  "
      >
        <h1 className="text-3xl font-bold">Add Notes</h1>
        {/* pehela input */}
        <input
          type="text"
          placeholder="Enter notes Heading"
          className="px-5 w-full  py-2 border-2 rounded outline-none"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        {/* detaild input */}
        <textarea
          type="text"
          className="px-5 w-full  h-35 py-2 border-2 rounded outline-none"
          placeholder="Write details"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        />
        <button className="bg-blue-500 active:scale-95 text-white px-5 py-2 rounded w-full outline-none">
          Add Nots
        </button>

        {/* <img
        className="h-65"
        src="https://img.freepik.com/free-photo/businesswoman-use-laptop-lady-with-different-face-emotions-isolated-white-wall_231208-9567.jpg?semt=ais_hybrid&w=740&q=80"
        alt=""
        /> */}
      </form>
      <div className=" lg:w-1/2 p-10 bg-gray-500 ">
        <h1 className="text-white text-3xl font-bold">Recent notes</h1>
        <div className="flex flex-wrap gap-5 mt-1 h-full overflow-auto">
          {task.map(function (elem,idx) {
            return (
              <div key={idx} className="h-50 w-45 p-4 rounded-2xl bg-blue-200 mt-5">
                <h3 className="leading-tight text-xl font-bold">{elem.title}</h3>
                <p className="mt-2 font-medium text-gray-700">{elem.details}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
