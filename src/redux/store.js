import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/BookSlice';
import categoriesReducer from './categories/categoriesSlice';

const store = configureStore({
  reducer: {
    book: booksReducer,
    categories: categoriesReducer,
  },
});

export default store;
