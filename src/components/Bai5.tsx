import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store/bai5';
import { toggleMenu } from '../store/reducers/menuSlice';
import { Button, Menu } from 'react-bootstrap';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
export default function Bai5() {
  const dispatch = useDispatch<AppDispatch>();
  const isVisible = useSelector((state: RootState) => state.menu.isVisible);
  return (
    <div className="App">
      <Button onClick={() => dispatch(toggleMenu())}>
        {isVisible ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
      </Button>
      {isVisible && (
        <Menu
          style={{ width: 256 }}
          mode="inline"
          theme="dark"
          defaultSelectedKeys={['1']}
          items={[
            { key: '1', label: 'Option 1' },
            { key: '2', label: 'Option 2' },
            { key: '3', label: 'Option 3' },
          ]}
        />
      )}
    </div>
  )
}
