import { useState } from 'react'
import Accordian from './components/Accordian'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Accordian />
    </>    
  )
}

export default App
