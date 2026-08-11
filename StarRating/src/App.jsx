import { useState } from 'react'
import StarRating from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <StarRating  noOfStars={7}/>
    </>
  )
}

export default App
