import { useState } from 'react'
import './App.css'

// Component
import Navbar from './components/Navbar/index';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      < Navbar />
    </>
  )
}

export default App
