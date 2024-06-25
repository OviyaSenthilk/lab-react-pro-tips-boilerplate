// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contacts">Contacts</Link></li>
        <li><Link to="/register">Registration Form</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
