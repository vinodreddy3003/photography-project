import { Link, NavLink } from "react-router-dom";
import React, { useState, useRef, useEffect, useCallback } from "react";
import "./Navbar.css";
import navImage from '../assets/WhatsApp Image 2024-10-07 at 11.53.37_2fdd34b1.jpg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarRef = useRef(null); // Create a ref for the navbar

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleClickOutside = useCallback((event) => {
    // Check if the click is outside the navbar
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setIsMenuOpen(false); // Close the menu
    }
  }, []);

  useEffect(() => {
    // Add event listener when the menu is open
    if (isMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    // Cleanup event listener on unmount or when menu is closed
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen, handleClickOutside]); // Run effect when isMenuOpen changes

  return (
    <nav className="navbar" ref={navbarRef}>
      <div className="navbar-logo">
        <Link to="/"><img src={navImage} alt="" /></Link>
      </div>

      <ul className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
        <li>
          <NavLink to="/" onClick={toggleMenu} activeClassName="active-link">Home</NavLink>
        </li>
        <li className="dropdown">
          <NavLink to="/about" onClick={toggleMenu} activeClassName="active-link">About</NavLink>
        </li>
        <li className="dropdown">
          <NavLink to="/portfolio" onClick={toggleMenu} activeClassName="active-link">Portfolio</NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={toggleMenu} activeClassName="active-link">Contact</NavLink>
        </li>
      </ul>

      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
