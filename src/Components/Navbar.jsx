import React, { useState, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  
  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);

  
  if (location.pathname === '/quiz/start') return null;

  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/" aria-label="Quiz App Home">Quiz App</Link>
        </div>

        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <Link
            to="/"
            onClick={toggleMenu}
            className={location.pathname === '/' ? 'active-link' : ''}
            aria-current={location.pathname === '/' ? 'page' : undefined}
          >
            Home
          </Link>
          <Link
            to="/quiz"
            onClick={toggleMenu}
            className={location.pathname === '/quiz' ? 'active-link' : ''}
            aria-current={location.pathname === '/quiz' ? 'page' : undefined}
          >
            Start Quiz
          </Link>
          <Link
            to="/scores"
            onClick={toggleMenu}
            className={location.pathname === '/scores' ? 'active-link' : ''}
            aria-current={location.pathname === '/scores' ? 'page' : undefined}
          >
            Scores
          </Link>
          <Link
            to="/about"
            onClick={toggleMenu}
            className={location.pathname === '/about' ? 'active-link' : ''}
            aria-current={location.pathname === '/about' ? 'page' : undefined}
          >
            About
          </Link>
        </div>

        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
