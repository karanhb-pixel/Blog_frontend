import React from "react";
import "./SubscriptionBox.css";

const SubscriptionBox = () => {
  return (
  <div className="subscriptionBox" id="subscriptionBox">
      <div className="sub_Container">
        <h1>Get our stories delivered From us to your inbox weekly.</h1>
        <div className="sub_inputform">
          <input type="email" placeholder="Enter your email" />
          <button className="sub_btn">Get Started</button>
        </div>
        <p>
          Get a response tomorrow if you submit by 9pm today. If we received
          after 9pm will get a reponse the following day.
        </p>
      </div>
    </div>
  );
};

export default SubscriptionBox;
