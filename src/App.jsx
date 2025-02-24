import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './redux/counterSlice'
import Home from './pages/Home'

const App = () => {
  const count = useSelector((state) => state.counter.value)
  console.log(count)
  const dispatch = useDispatch();
  return (
    <div>
      <h1>app</h1>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <Home />
    </div>
  )
}

export default App
