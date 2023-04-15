import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { postBook } from '../redux/books/BookSlice';

const AddBook = () => {
  const initialInputs = {
    title: '',
    author: '',
  };
  const [input, setInputs] = useState(initialInputs);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleClick = (e) => {
    e.preventDefault();
    const id = uuidv4();
    const book = { id, ...input };
    dispatch(postBook(book));
    setInputs(initialInputs);
  };
  return (
    <form onSubmit={handleClick} className="addbook">
      <input
        type="text"
        className="booktitle"
        onChange={handleChange}
        name="title"
        value={input.title}
        placeholder="title"
      />
      <input
        type="text"
        className="bookauthor"
        name="author"
        onChange={handleChange}
        value={input.author}
        placeholder="author"
      />
      <button
        type="submit"
        className="addbookbtn"
        onClick={handleClick}
      >
        Add Book
      </button>
    </form>
  );
};

export default AddBook;
