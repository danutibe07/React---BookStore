import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ Title, Author }) => {
  Book.propTypes = {
    Title: PropTypes.string.isRequired,
    Author: PropTypes.string.isRequired,
  };
  return (

    <li>
      <strong>
        Title:
        {Title}
      </strong>
      <br />
      <i>
        Author:
        {Author}
      </i>
    </li>

  );
};
export default Book;
