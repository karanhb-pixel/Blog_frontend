import React from "react";
import "./blog_home.css";

const Blog_Home = () => {
  return (
    <div className="blog_home">
      <div className="blog_header">
        <h3>Featured Post</h3>
        <h1>How AI will Change the Future</h1>
        <p>
          The future of AI will see home robots having enhanced intelligence,
          increased capabilities, and becoming more personal and possibly cute.
          For example, home robots will overcome navigation, direction
        </p>
        <button>Read more</button>
      </div>
      <div className="blog_headerimg">
        <img src="/assets/Ai_img.png" alt="AI image" />
      </div>
    </div>
  );
};

export default Blog_Home;
