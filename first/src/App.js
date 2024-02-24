// import React, { useState } from 'react';

// const App = () => {
//   const [name, setName] = useState("ashok");
//   const [count,setcount]=useState(1)

//   const isEmpty =name.length === 0;
//   console.log(name);
//   const func = () => {
//     const inputs = [];
//     for (let i = 0; i < count; i++) {
//       inputs.push(<div><input key={i} type='text' value={isEmpty ? undefined : name}/></div>);
//     }
//     return <div>{inputs}</div>;
//   };
//   return (
//     <div>
//       {func()}
//       <button onClick={()=>setcount(count+1)}>+</button>
//     </div>
//   );
// };
// export default App;
import { useState } from "react";

const App = () => {
  const [option, setOption] = useState("Health");
  const [task, setTask] = useState("");
  const [tasksArray, setTasksArray] = useState([]);
  const [status, setStatus] = useState("");
  const Add = () => {
    if (option !== "" && task !== "") {
      setTasksArray([...tasksArray, { task, option }]);
      setTask("");
    } else {
      alert("Inputs should not be empty");
    }
  };
  const code = status.length === 0;
  const Tasks = [
    "Health",
    "Education",
    "Entertainment",
    "Sports",
    "Travel",
    "Others",
  ];
  const filtered = tasksArray.filter((each) => each.option === status);
  const double = (e) => {
    if (status === e) {
      setStatus("");
    } else {
      setStatus(e);
    }
  };
  return (
    <div>
      <h1>Create a task!</h1>
      <label>Task</label>
      <br />
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <br />
      <label>Tags</label>
      <br />
      <select onChange={(e) => setOption(e.target.value)}>
        {Tasks.map((each) => (
          <option value={each}>{each}</option>
        ))}
      </select>
      <br />
      <button onClick={Add}>Add Task</button>
      <h1>Tags</h1>
      {Tasks.map((each) => (
        <button onClick={() => double(each)}>{each}</button>
      ))}
      {tasksArray.length === 0 ? <div>No Tasks Found</div> : ""}
      {code ? (
        <div>
          {tasksArray.map((taskItem, index) => (
            <div key={index}>
              {taskItem.task} {taskItem.option}
            </div>
          ))}
        </div>
      ) : (
        <div>
          {filtered.map((taskItem, index) => (
            <div key={index}>
              {taskItem.task} {taskItem.option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default App;
