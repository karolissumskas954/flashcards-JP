'use client';
import { createSlice } from '@reduxjs/toolkit';
import { mina } from '../constants/constants';
import { minaN5 } from '../constants/kanji';

const initialState = {
  set: minaN5,
  name: 'genki',
  learn: [  
    {
    char: 'Filler card',
    meaning: '',
    kun: '',
  },
  {
    char: 'Filler card',
    meaning: '',
    kun: '',
  },
  // {
  //   char: 'Filler card',
  //   meaning: '',
  //   kun: '',
  // },
  // {
  //   char: 'Filler card',
  //   meaning: '',
  //   kun: '',
  // },
]
};

const setSlice = createSlice({
  name: 'sets',
  initialState,
  reducers: {
    setSet: (state, action) => {
      state.set = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setLearn: (state, action) => {
      state.learn = action.payload;
    },
  },
});

export const { setSet, setName, setLearn } = setSlice.actions;
export default setSlice.reducer;