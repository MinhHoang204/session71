import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../store/reducers/authSlice';

const bai8:any = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof bai8.getState>;
export type AppDispatch = typeof bai8.dispatch;

export default bai8;