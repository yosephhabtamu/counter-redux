import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment } from './lib/features/counterSlice';

function App() {

  const dispatch = useDispatch();
  const value = useSelector((state) => state.counterReducer.value);

  return (
    <>
    <button onClick={()=>dispatch(increment())} >Increment by one</button>
    <h1> {value} </h1>
    <button onClick={()=>dispatch(decrement())}>Decrement by one</button>
    </>
  )
}

export default App
