import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store/bai4';
import { toggleViewMode } from '../store/reducers/viewModeSlice';
export default function Bai4() {
  const dispatch = useDispatch<AppDispatch>();
  const isGridView = useSelector((state: RootState) => state.viewMode.isGridView);

  const items = Array.from({ length: 10 }, (_, i) => `Item ${i + 1}`);
  return (
    <div className="App">
      <h1>View Mode Toggle</h1>
      <button onClick={() => dispatch(toggleViewMode())}>
        {isGridView ? 'Switch to List View' : 'Switch to Grid View'}
      </button>
      <div style={{
        display: 'grid',
        gridTemplateColumns: isGridView ? 'repeat(auto-fill, minmax(100px, 1fr))' : '1fr',
        gap: '10px',
        marginTop: '20px',
      }}>
        {items.map((item, index) => (
          <div key={index} style={{
            border: '1px solid #ccc',
            padding: '10px',
            textAlign: 'center',
            backgroundColor: isGridView ? '#f9f9f9' : '#e9e9e9',
          }}>
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
