import { useState } from 'react'
import React from 'react'

function App() {
  let [count, setCount] = useState(15)


  const addValue = () => {
    
    setCount(count + 1)
    
  }

  const removeValue = () => {
    // console.log("clicked", count);
    setCount(count - 1);
  }


  return (
    <>
      <h1>Jai Jai Shree Ram</h1>
      <h2>Counter value : {count}</h2>
      <button onClick={addValue}>Increase value {count}</button> <br />
      <button onClick={removeValue}>Decrease value {count}</button>
      <footer>footer {count}</footer>
    </>
  )
}

export default App
