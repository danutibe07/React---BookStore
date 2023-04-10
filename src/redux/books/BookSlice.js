import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [

  ],
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, { payload }) => {
      state.books.push({
        id: Math.floor(Math.random() * 100),
        title: payload.title,
        author: payload.author,
      });
    },
    removeBook: (state, { payload }) => {
      state.books.filter((book) => book.id !== payload.id);
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
