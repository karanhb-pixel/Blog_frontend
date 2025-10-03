import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link className="navbar-logo_text" to="/">
          ZenBlog
        </Link>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>
      <ul className={`navbar-list ${menuOpen ? "active" : ""}`}>
        <li className="navbar-item">
          <Link to="/blog">Blog</Link>
        </li>
        <li className="navbar-item">
          <a href="#subscriptionBox">About</a>
        </li>
        
        <li className="navbar-item">
          <button className="contactUs_btn">
            <Link to="/contact_page">Contact Us</Link>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
