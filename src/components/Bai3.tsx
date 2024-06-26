import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store/bai3';
import { toggleTheme } from '../store/reducers/themeSlice';
export default function Bai3() {
  const dispatch = useDispatch<AppDispatch>();
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

  const appStyles = {
    backgroundColor: isDarkMode ? '#333' : '#FFF',
    color: isDarkMode ? '#FFF' : '#000',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'all 0.3s ease',
  };
  return (
    <div style={appStyles}>
      <h1>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</h1>
      <button onClick={() => dispatch(toggleTheme())}>
        Toggle Theme
      </button>
    </div>
  )
}
