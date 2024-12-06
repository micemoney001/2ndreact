import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HiState from './HiState'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <HiState/>
    </>
  )
}

export default App
