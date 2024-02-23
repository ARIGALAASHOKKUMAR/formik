import React, { useState } from 'react';

const App = () => {
  const [name, setName] = useState("ashok");
  const [count,setcount]=useState(1)

  const isEmpty =name.length === 0;
  console.log(name);
  const func = () => {
    const inputs = [];
    for (let i = 0; i < count; i++) {
      inputs.push(<div><input key={i} type='text' value={isEmpty ? undefined : name}/></div>);
    }
    return <div>{inputs}</div>;
  };
  return (
    <div>
      {func()}
      <button onClick={()=>setcount(count+1)}>+</button>
      <button onClick={()=>setcount(count+1)}>+</button>
    </div>
  );
};
export default App;
