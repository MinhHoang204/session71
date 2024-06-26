import { configureStore } from '@reduxjs/toolkit';
import menuReducer from '../store/reducers/menuSlice';

const bai5:any = configureStore({
  reducer: {
    menu: menuReducer,
  },
});

export type RootState = ReturnType<typeof bai5.getState>;
export type AppDispatch = typeof bai5.dispatch;

export default bai5;