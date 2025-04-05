import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">ZenBlog</div>
      <ul className="navbar-list">
        <li className="navbar-item">
          <a href="/">Blog</a>
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
