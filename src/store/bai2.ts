import { configureStore } from '@reduxjs/toolkit';
import numberListReducer from '../store/reducers/numberListSlice';

const bai2:any = configureStore({
  reducer: {
    numberList: numberListReducer,
  },
});

export type RootState = ReturnType<typeof bai2.getState>;
export type AppDispatch = typeof bai2.dispatch;

export default bai2;