import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import AddBook from './AddBook';

const Books = () => {
  const { books } = useSelector((store) => store.book);

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
