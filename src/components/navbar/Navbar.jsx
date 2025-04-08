import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link className="navbar-logo_text" to="/">
          ZenBlog
        </Link>
      </div>
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/blog">Blog</Link>
        </li>
        <li className="navbar-item">
          <a href="/about">About</a>
        </li>
        <li className="navbar-item">
          <a href="/contact">Search</a>
        </li>
        <li className="navbar-item">
          <button className="contactUs_btn">Contact Us</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
