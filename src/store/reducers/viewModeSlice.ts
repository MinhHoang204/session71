import { createSlice } from '@reduxjs/toolkit';

interface ViewModeState {
  isGridView: boolean;
}

const initialState: ViewModeState = {
  isGridView: true,
};

const viewModeSlice = createSlice({
  name: 'viewMode',
  initialState,
  reducers: {
    toggleViewMode: (state) => {
      state.isGridView = !state.isGridView;
    },
  },
});

export const { toggleViewMode } = viewModeSlice.actions;
export default viewModeSlice.reducer;