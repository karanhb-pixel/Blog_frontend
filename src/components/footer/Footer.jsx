import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_Container">
        <h1 className="footer_logo">ZenBlog</h1>
        <div className="footer_menu">
          <ul className="footer_menu_list">
            <li className="footer_menu_item">Home</li>
            <li className="footer_menu_item">Blog</li>
            <li className="footer_menu_item">About</li>
            <li className="footer_menu_item">Contact Us</li>
          </ul>
        </div>
        <div className="footer_SocialLinks">
          <ul className="footer_SocialLinks_list">
            <li className="footer_SocialLinks_item">fb</li>
            <li className="footer_SocialLinks_item">be</li>
            <li className="footer_SocialLinks_item">in</li>
            <li className="footer_SocialLinks_item">tw</li>
          </ul>
        </div>
      </div>
      <hr className="divider" />
      <div className="footer_Copyright">
        <p>© 2023 ZenBlog. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
