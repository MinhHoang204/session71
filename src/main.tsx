import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux'
import store from './store/store.ts'
import bai1 from './store/bai1.ts'
import bai2 from './store/bai2.ts'
import bai3 from './store/bai3.ts'
import bai4 from './store/bai4.ts'
import bai5 from './store/bai5.ts'
import bai6 from './store/bai6.ts'
import bai7 from './store/bai7.ts'
import bai8 from './store/bai8.ts'
ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
    <Provider 
      store={store} 
      bai1={bai1} 
      bai2={bai2}
      bai3={bai3}
      bai4={bai4}
      bai5={bai5}
      bai6={bai6}
      bai7={bai7}
      bai8={bai8}
    >
      <App/>
    </Provider>
  // </React.StrictMode>,
)
