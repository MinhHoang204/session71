import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store/bai8';
import { logout } from '../store/reducers/authSlice';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  if (!user) {
    return null;
  }
  return (
    <div>
      <h1>Welcome, {user.userName}!</h1>
      <p>Email: {user.email}</p>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  )
}
