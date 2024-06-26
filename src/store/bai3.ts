import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../store/reducers/themeSlice';

const bai3:any = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof bai3.getState>;
export type AppDispatch = typeof bai3.dispatch;

export default bai3;