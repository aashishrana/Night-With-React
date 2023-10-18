import { useState } from "react";

import "./App.css";

function App() {
  // let count  = 10;

  let [count, setCount] = useState(10); // Default values
     //variable setVariable  
  let getIncrease = () => {
    if(count < 20) {
      setCount(count + 1);

    }
    
  };

  let getDecrease = () => {
    if(count > 0) {
      setCount(count - 1);

    }
    
    
    // if(setCount < 0) {
    //   return
    // }
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
