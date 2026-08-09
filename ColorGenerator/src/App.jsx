import { useState } from 'react'
import ClrGenerator from './components/ClrGenerator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ClrGenerator />
    </>
  )
}

export default App
