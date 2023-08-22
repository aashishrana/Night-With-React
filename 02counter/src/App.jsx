import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let counter = 15;
  const addValue  = () => {
    console.log("value added" , Math.random());
  }

  return (
    <>
      <h1>Sita Ram</h1>
      <h3>Chai aur React</h3>
      <h3>Counter value : {counter}</h3>
      <button
       onClick={addValue}>
        Add value
      </button>
      <br />
      <button>Remove Value</button>
    </>
  )
}

export default App
