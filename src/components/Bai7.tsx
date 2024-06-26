import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store/bai7';
import { toggleFavorite } from '../store/reducers/favoriteAccountsSlice';
import { List, Button } from 'antd';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
export default function Bai7() {
    const dispatch = useDispatch<AppDispatch>();
    const accounts = useSelector((state: RootState) => state.favoriteAccounts.accounts);
  return (
    <div className="App">
      <h1>Favorite Accounts</h1>
      <List
        dataSource={accounts}
        renderItem={account => (
          <List.Item
            actions={[
              <Button
                type="text"
                icon={account.isFavorite ? <HeartFilled style={{ color: 'red' }} /> : <HeartOutlined />}
                onClick={() => dispatch(toggleFavorite(account.id))}
              />,
            ]}
          >
            {account.name}
          </List.Item>
        )}
      />
    </div>
  )
}
