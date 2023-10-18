import { useState } from 'react'

import './App.css'

function App() {
  let [count, setCount] = useState(5);

  let getIncrease = () => {
    if(count <10) {
      setCount (count + 1);

    }
    
  }

  function getDecrease() {
    if(count > 0)
    setCount ( count - 1);
  }

  return (
    <>
      <h1>Jai Shree Ram {count}</h1>

      <button onClick={getIncrease}>Increase</button>
      <br />
      <button onClick={getDecrease}>Decrease</button>
    </>
  )
}

export default App
