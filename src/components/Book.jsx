import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { deleteBook } from '../redux/books/BookSlice';

const Book = ({ book }) => {
  const dispatch = useDispatch();
  const percentage = 66;
  return (
    <div className="book-details">
      <div className="book">
        <p key={book.id} className="book-items">
          <p className="category">{book.category}</p>
          <strong className="title">{book.title}</strong>
          <p className="author">{book.author}</p>
        </p>
        <ul className="button-contain">
          <li>
            <button className="comments" type="button">
              Comments
            </button>
          </li>
          <div className="vl" />
          <li>
            <button
              className="remove"
              type="button"
              onClick={() => {
                dispatch(deleteBook(book.id));
              }}
            >
              Remove
            </button>
          </li>
          <div className="vl" />
          <li>
            <button className="Edit" type="button">
              Edit
            </button>
          </li>
        </ul>
      </div>
      <div className="track">
        <div className="book-progress" style={{ width: 60, height: 60 }}>
          <CircularProgressbar value={percentage} />
        </div>
        <div className="progress-text">
          <h3>{`${percentage}%`}</h3>
          <p className="Completed">Completed</p>
        </div>
      </div>
      <div className="vl2" />
      <div className="chapters">
        <p className="Current-Chapter">CURRENT CHAPTER</p>
        <p className="Current-Lesson">Chapter 12</p>
        <button type="button" className="Update-progress">
          UPDATE PROGRESS
        </button>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};

export default Book;
