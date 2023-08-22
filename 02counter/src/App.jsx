import { useState } from 'react'

import './App.css'

function App() {
  let [counter  , setCounter] = useState(15)
  // let counter = 15;
  const addValue  = () => {

    console.log("clicked", Math.random());
    counter = counter + 1;
    
    setCounter(counter)
  }

  const removeValue = () => {
    // console.log("Removed clicked", Math.random());
    counter = counter -1;
    
    setCounter(counter);
  }

  return (
    <>
      <h1>Sita Ram</h1>
      <h3>Chai aur React : {counter}</h3>
      <h3>Counter value : {counter}</h3>
      <button
       onClick={addValue}>
        Add value
      </button>
      <br />
      <button onClick={removeValue}>
        Remove Value
      </button>
    </>
  )
}

export default App
