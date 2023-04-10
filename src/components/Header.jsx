import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div>
    <NavLink to="/">Books</NavLink>
    <NavLink to="/categories">Categories</NavLink>
  </div>
);

export default Header;
