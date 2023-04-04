import React from 'react';
import Book from './Book';
import Form from './Form';

const Books = () => (

  <div>
    <ul>
      <Book Title="The Princess" Author="Bingo" />
      <Book Title="Ring Princess" Author="Cingo" />
      <Book Title="Goal Princess" Author="Dingo" />
    </ul>
    <Form />
  </div>
);

export default Books;
