import React from 'react';

// Styles
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          trending
        </li>
        <li>
          top rated
        </li>
        <li>
          action
        </li>
        <li>
          comedy
        </li>
        <li>
          horror
        </li>
        <li>
          romance
        </li>
        <li>
          mystery
        </li>
        <li>
          sci-fi
        </li>
        <li>
          western
        </li>
        <li>
          animation
        </li>
        <li>
          movie
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
