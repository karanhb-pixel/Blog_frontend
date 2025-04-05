import React from "react";
import "./highlight.css";
const Highlight = () => {
  return (
    <div className="highlight">
      <div className="highlight_container">
        <img className="highlight_img" src="/assets/Highlight_img.jpg" alt="" />

        <div className="highlight_details">
          <div className="highlight_details_text">
            <p>
              <span>DEVELOPMENT</span> 16 March 2023
            </p>
            <h1>
              How to make a Game look more attractive with New VR & AI
              Technology
            </h1>
            <p>
              Google has been investing in AI for many years and bringing its
              benefits to individuals, businesses and communities. Whether it’s
              publishing state-of-the-art research, building helpful products or
              developing tools and resources that enable others, we’re committed
              to making AI accessible to everyone.
            </p>
          </div>
          <div className="highlight_details_btn">
            <button>Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlight;
