import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/BookSlice';

const Book = ({ book }) => {
  const dispatch = useDispatch();
  return (
    <>
      <p key={book.id}>
        <strong>{book.title}</strong>
        {' '}
        <span>by</span>
        {' '}
        <i>{book.author}</i>
      </p>
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
    id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
};

export default Book;
