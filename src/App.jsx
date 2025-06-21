import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Provider, useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './store/counter/actions';

function App() {
  // const [count, setCount] = useState(0)
  const count = useSelector(state => state.count)
  const dispatch = useDispatch();

  return (
    <>
      <h1>Count React: {count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </>
  )
}

export default App
