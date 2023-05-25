import React, { useEffect, useState } from "react";
import Task from "./Task";

const Home = () => {
  const initialtask = localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[]
  const [tasks, Settasks] = useState(initialtask);
  const [title, Settitle] = useState("");
  const [description, Setdescription] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    Settasks([...tasks,{title,description}]);
    console.log(tasks);
    Settitle("")
    Setdescription("")
  };

  const deletetask = (index) =>{
    const newarray = tasks.filter((item,i) => {return i!==index;})
    Settasks(newarray);
    }

  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks))
  },[tasks])
  
  return (
    <div className="container">
      <h1>DAILY GOALS</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => Settitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => Setdescription(e.target.value)}
        ></textarea>
        <button>ADD</button>
      </form>
      {tasks.map((item, index) => (
        <Task key={index} title={item.title} description={item.description} deletetask = {deletetask} index={index} />
      ))}
    </div>
  );
};

export default Home;
