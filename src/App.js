import { useState } from "react";
import './App.css'

function App() {
  const [count, setCount] = useState(10);


  return (
    <div className="App">
     <div className="center">
     <h1>Counter App</h1>
     <div className="middle">
     <button onClick={()=>(count===0)?setCount(0):setCount(count-1)}>-</button>
     <h2>{count}</h2>
     <button onClick={()=>setCount(count+1)}>+</button>
     </div>
     </div>
      

    </div>
  );
}

export default App;
