import { configureStore } from '@reduxjs/toolkit';
import viewModeReducer from '../store/reducers/viewModeSlice';

const bai4:any = configureStore({
  reducer: {
    viewMode: viewModeReducer,
  },
});

export type RootState = ReturnType<typeof bai4.getState>;
export type AppDispatch = typeof bai4.dispatch;

export default bai4;