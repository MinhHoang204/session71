import { configureStore } from '@reduxjs/toolkit';
import favoriteAccountsReducer from '../store/reducers/favoriteAccountsSlice';

const bai7:any = configureStore({
  reducer: {
    favoriteAccounts: favoriteAccountsReducer,
  },
});

export type RootState = ReturnType<typeof bai7.getState>;
export type AppDispatch = typeof bai7.dispatch;

export default bai7;