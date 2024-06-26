import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../store/reducers/counterSlice';

const bai1:any = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof bai1.getState>;
export type AppDispatch = typeof bai1.dispatch;

export default bai1;