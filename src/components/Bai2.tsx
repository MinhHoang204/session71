import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store/bai2';
import { generateRandomNumbers } from '../store/reducers/numberListSlice';
export default function Bai2() {
  const dispatch = useDispatch<AppDispatch>();
  const numbers = useSelector((state: RootState) => state.numberList.numbers);

  const handleGenerateNumbers = () => {
    dispatch(generateRandomNumbers(10)); // Tạo ngẫu nhiên 10 số nguyên
  };
  return (
    <div className="bai2">
    <h1>Random Number List</h1>
    <button onClick={handleGenerateNumbers}>Generate Random Numbers</button>
    <ul>
      {numbers.map((number:any, index:any) => (
        <li key={index}>{number}</li>
      ))}
    </ul>
  </div>
  )
}
