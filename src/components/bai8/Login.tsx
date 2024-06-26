import {useState} from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppDispatch } from '../store/bai8';
import { login } from '../store/reducers/authSlice';
import { Button, Input, Form } from 'antd';
export default function Login() {
    const users = [
        { id: 1, userName: 'user1', email: 'nva@gmail.com', password: 'password1' },
        { id: 2, userName: 'user2', email: 'nvb@gmail.com', password: 'password2' },
    ];
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const handleLogin = () => {
        const user = users.find(user => user.userName === userName && user.password === password);
        if (user) {
            dispatch(login(user));
            navigate('/');
        } else {
           alert('Invalid credentials');
        }
    };
  return (
    <div>
      <h1>Login</h1>
      <Form onFinish={handleLogin}>
        <Form.Item>
          <Input
            placeholder="Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <Input.Password
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Login</Button>
        </Form.Item>
      </Form>
    </div>
  )
}
