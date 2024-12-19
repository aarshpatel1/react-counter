import { useEffect, useState } from 'react'
import Component2 from './components/Component2';
import Component1 from './components/Component1';

function App() {
  const [count, setCount] = useState(0)
  const [isActive, setIsActive] = useState(true)

  useEffect(() => {
    console.log('Component mounted');

    return () => {
      console.log('Component unmounted');
    }
  }, [count])

  console.log('Component rendered');

  return (
    <>
      <h1>Welcome to the Counter</h1>
      <p>Counting: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>
      {isActive ? <Component1 /> : <Component2 />}
      <button onClick={() => setIsActive(!isActive)}>Change Active</button>
    </>
  )
}

export default App
