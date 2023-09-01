import { useState } from "react";

import "./App.css";

function App() {
  // let count  = 10;

  let [count, setCount] = useState(10);
  let getIncrease = () => {
    setCount(count + 1);
  };

  let getDecrease = () => {
    setCount(count - 1);
  }

  return (
    <>
      <h1>Jai Shree Ram</h1>
      <h3>Chai Aur React : {count}</h3>

      <button onClick={getIncrease}>increase</button>
      <br />
      <button onClick={getDecrease}>decrease</button>
      
    </>
  );
}

export default App;
