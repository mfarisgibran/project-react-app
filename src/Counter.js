import { useState } from 'react'

export default function Counter() {
  const [counter, setCounter] = useState(0)

  return (
    <div>
      <p>You clicked {counter} times</p>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>
    </div>
  )
}
