import React from "react";
import "./Contact_Page.css";
import { RiHomeOfficeLine } from "react-icons/ri";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
const Contact_Page = () => {
  return (
    <div className="contact_Page" id="contact_Page">
      <div className="contact_Page_headingtext">
        <h1>Get in Touch</h1>
        <h4>
          Contact us to publish your content and show ads to our website and get
          a good reach.
        </h4>

        <div className="contact_Page_info">
          <div className="contact_Page_info_Container">
            <div className="icon">
              <RiHomeOfficeLine />
            </div>
            <div className="office-text">office</div>
            <div className="address-text">Victoria Street, London, UK</div>
          </div>
          <div className="contact_Page_info_Container">
            <div className="icon">
              <AiOutlineMail />
            </div>
            <div className="office-text">Email</div>
            <div className="address-text">hello@zarrin.com</div>
          </div>
          <div className="contact_Page_info_Container">
            <div className="icon">
              <AiOutlinePhone />
            </div>
            <div className="office-text">Phone</div>
            <div className="address-text">(001) 2342 3451</div>
          </div>
        </div>
      </div>
      <div className="contact_Page_map">
  <img src="/assets/map.jpg" alt="Map showing office location in London, UK" className="mapimg" />
      </div>
      <div className="contact_Page_formcontainer">
        <form action="#" method="post" className="contact_Page_form" aria-label="Contact form">
          <div className="contact_Page_formgroup">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter Name..."
              required
              aria-required="true"
              aria-label="Name"
              autoComplete="name"
            />
          </div>
          <div className="contact_Page_formgroup">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email..."
              required
              aria-required="true"
              aria-label="Email"
              autoComplete="email"
            />
          </div>
          <div className="contact_Page_formgroup">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter Phone Number..."
              required
              aria-required="true"
              aria-label="Phone"
              autoComplete="tel"
            />
          </div>
          <div className="contact_Page_formgroup">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Enter subject..."
              required
              aria-required="true"
              aria-label="Subject"
            />
          </div>
          <div className="contact_Page_formgroup formtextarea">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter Message..."
              rows="4"
              cols={4}
              required
              aria-required="true"
              aria-label="Message"
            />
          </div>
          <div className="form_submit_btn">
            <button type="submit" aria-label="Send Message">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact_Page;
