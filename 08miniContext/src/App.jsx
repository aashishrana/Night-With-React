import { useState } from 'react'

import './App.css'
// import UserContext from './context/UserContext'
import UserContextProvider from './context/UserContextProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>Sita Ram</h1>
      <h2>React with chai and share is important</h2>
    </UserContextProvider>
  )
}

export default App
