import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/bai8';
import Home from './Home';
import Login from './Login';
export default function Bai8() {
  const user = useSelector((state: RootState) => state.auth.user);
  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}
