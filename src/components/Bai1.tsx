import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/bai1';
import { increment, decrement, reset } from '../store/reducers/counterSlice';
export default function Bai1() {
    const dispatch = useDispatch<AppDispatch>();
    const count = useSelector((state: RootState) => state.counter.value);
  return (
    <div className="Bai1">
      <h1>Counter</h1>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  )
}
