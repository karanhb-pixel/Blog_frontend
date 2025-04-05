import React from "react";
import "./postContainer.css";

const postContainer = ({ imgurl, date, heading, description, url }) => {
  return (
    // <div className="postContainer">
    <div className="postContainer_container">
      <img src={imgurl} alt="Image Not Found!" />
      <div className="postContainer_details">
        <div className="postContainer_details_text">
          <p>
            <span>Development : </span>
            {date}
          </p>
          <h1>{heading}</h1>
          <p>{description}</p>
        </div>
        <div className="postContainer_details_btn">
          <button>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="postContainer_button"
            >
              Read More
            </a>
          </button>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default postContainer;
