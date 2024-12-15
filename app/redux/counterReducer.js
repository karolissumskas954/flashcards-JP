'use client';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 1,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setValue } = counterSlice.actions;
export default counterSlice.reducer;