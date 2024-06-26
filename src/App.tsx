import Count from './components/Count'
import TodoList from './components/TodoList'
import Bai1 from './components/Bai1'
import Bai2 from './components/Bai2'
import Bai3 from './components/Bai3'
import Bai4 from './components/Bai4'
import Bai5 from './components/Bai5'
import Bai6 from './components/Bai6'
import Bai7 from './components/Bai7'
import Bai8 from './components/bai8/Bai8'

export default function App() {
  return (
    <div>App
      {/* tại sao lại dùng redux-toolkit thay thì dùng redux
          1. đối với redux khi khởi tạo store thì trong các hàm reducer thường tách ra
          các action, các hàm reducer sẽ tính toán trả về state mới dựa vào action truyền lên
          2. Còn đối với redux-toolkit viết code sẽ gọn hơn tại vì những action, 
          reducer sẽ được viết gộp lại
          3. Khi dùng Redux thường thì muốn xử lí các tác vụ bất đồng bộ (call API, gọi tới 
          server (db.json)) sẽ cài thêm thư viện redux-thunk
          4. Khi dùng Redux toolkit nó sẽ giúp sẽ xử lí được các tác vụ bất đồng bộ 
          bằng cách dùng createAsyncThunk
          
          ****************************
          1. cấu hình setup với redux-toolkit
          2. tương tác xử lí bất đồng bộ
      */}
      <Count></Count>
      <TodoList></TodoList>
      <Bai1></Bai1>
      <Bai2></Bai2>
      <Bai3></Bai3>
      <Bai4></Bai4>
      <Bai5></Bai5>
      <Bai6></Bai6>
      <Bai7></Bai7>
      <Bai8></Bai8>
    </div>
  )
}
