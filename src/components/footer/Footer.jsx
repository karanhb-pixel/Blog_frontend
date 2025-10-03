import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_Container">
        <h1 className="footer_logo">ZenBlog</h1>
        <div className="footer_menu">
          <ul className="footer_menu_list">
            <li className="footer_menu_item"><a href="#">Home</a></li>
            <li className="footer_menu_item"><a href="#">Blog</a></li>
            <li className="footer_menu_item"><a href="#">About</a></li>
            <li className="footer_menu_item"><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer_SocialLinks">
          <ul className="footer_SocialLinks_list">
            <li className="footer_SocialLinks_item"><a href="#">fb</a></li>
            <li className="footer_SocialLinks_item"><a href="#">be</a></li>
            <li className="footer_SocialLinks_item"><a href="#">in</a></li>
            <li className="footer_SocialLinks_item"><a href="#">tw</a></li>
          </ul>
        </div>
      </div>
      <hr className="divider" />
      <div className="footer_Copyright">
        <p>© {new Date().getFullYear()} ZenBlog. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
