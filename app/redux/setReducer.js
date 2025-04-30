'use client';
import { createSlice } from '@reduxjs/toolkit';
import { kanji } from '../constants/kanji';

const initialState = {
  set: kanji.filter(item => item.include === 1),
  name: 'mina',
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