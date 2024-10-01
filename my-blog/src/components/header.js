// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css'; 
import SearchBar from './searchBar';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        MY BLOG
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/politics">Politics</Link>
          </li>
          <li>
            <Link to="/tech">Tech</Link>
          </li>
          <li>
            <Link to="/entertainment">Entertainment</Link>
          </li>
          <li>
            <Link to="/sports">Sports</Link>
          </li>
          <li>
            <Link to="/travel">Travel</Link>
          </li>
          <li>
            <Link to="/"><SearchBar /></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
