import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NumberListState {
  numbers: number[];
}

const initialState: NumberListState = {
  numbers: [],
};

const numberListSlice = createSlice({
  name: 'numberList',
  initialState,
  reducers: {
    generateRandomNumbers: (state, action: PayloadAction<number>) => {
      const count = action.payload;
      state.numbers = Array.from({ length: count }, () => Math.floor(Math.random() * 100));
    },
  },
});

export const { generateRandomNumbers } = numberListSlice.actions;
export default numberListSlice.reducer;