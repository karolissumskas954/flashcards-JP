'use client';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterReducer';
import showReducer from './showReducer';
import setReducer from './setReducer';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    show: showReducer,
    sets: setReducer,
  },
});