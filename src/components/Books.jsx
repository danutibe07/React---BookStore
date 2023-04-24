import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import AddBook from './AddBook';
import { getBooks } from '../redux/books/BookSlice';

const Books = () => {
  const {
    books, isLoading, error, ifSuccess,
  } = useSelector((store) => store.book);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch, ifSuccess]);
  if (isLoading) {
    return (
      <div>loader</div>
    );
  }
  if (error) return <h2>An error has occured</h2>;
  if (books.length === 0) return <h2>there are no books</h2>;
  return (
    <div>
      <ul>
        {books.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </ul>
      <AddBook />
    </div>
  );
};

export default Books;
