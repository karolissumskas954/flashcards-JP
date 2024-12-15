'use client';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isVisible: false, // Initial visibility state is false
};

const showSlice = createSlice({
  name: 'show',
  initialState,
  reducers: {
    toggleShow: (state) => {
      state.isVisible = !state.isVisible; // Toggle visibility on action dispatch
    },
  },
});

export const { toggleShow } = showSlice.actions;
export default showSlice.reducer;