import { useSelector, useDispatch } from 'react-redux'
import { increase, decrease } from '../store/reducers/countReducer';
export default function Count() {
    // lấy dữ liệu từ kho
    // useSelector

    // thực hiện hành động: useDispatch
    const data: any = useSelector(state=>state);
    console.log("data",data);
    const disPatch = useDispatch();
    const increaseCount=()=>{
       disPatch(increase());
    }
    const decreaseCount=()=>{
        disPatch(decrease());
    }
  return (
    <div>Count
        <p>giá trị biến count:{data.countReducer.count}</p>
        <button onClick={increaseCount}>tăng</button>
        <button onClick={decreaseCount}>giảm</button>
    </div>
  )
}
