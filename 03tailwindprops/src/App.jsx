import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-orange-400 p-4 rounded-xl text-white'>Sita Ram</h1>
      <br />

      <Card></Card>
      <Card />
      

      

      
    </>
  )
}

export default App