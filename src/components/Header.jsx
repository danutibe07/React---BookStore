import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => (
  <div className="header">
    <div className="navcontent">
      <p>BookStore CMS</p>
      <div className="navlinks">
        <NavLink to="/">Books</NavLink>
        <NavLink to="/categories">Categories</NavLink>
      </div>
    </div>
    <div className="icon">
      <FontAwesomeIcon icon={faUser} style={{ color: '#0290ff' }} />
    </div>
  </div>
);

export default Header;
