import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/BookSlice';

const Book = ({ book }) => {
  const dispatch = useDispatch();

  return (
    <>
      <li key={book.id}>
        <strong>
          Title:
          {book.title}
        </strong>
        <br />
        <i>
          Author:
          {book.author}
        </i>
      </li>
      <button
        type="button"
        onClick={() => {
          dispatch(removeBook(book.id));
        }}
      >
        Delete
      </button>
    </>

  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
