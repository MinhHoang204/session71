import { configureStore } from '@reduxjs/toolkit';
import languageReducer from '../store/reducers/languageSlice';

const bai6:any = configureStore({
  reducer: {
    language: languageReducer,
  },
});

export type RootState = ReturnType<typeof bai6.getState>;
export type AppDispatch = typeof bai6.dispatch;

export default bai6;