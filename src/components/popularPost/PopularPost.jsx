import React from "react";
import "./popularPost.css";
import PostContainer from "../postContainer/PostContainer";
import DummyData from "../../assets/dummyData.json";
const PopularPost = () => {
  return (
    <div className="popularPost">
      <div className="popularPost_heading">
        <h1>Popular Posts</h1>
        <button>View All</button>
      </div>
      <div className="popularPost_postContainer">
        {DummyData.slice(0, 6).map((post, index) => (
          <PostContainer
            key={index}
            imgurl={post.imgurl}
            date={post.date}
            heading={post.title}
            description={post.details}
            url={post.url}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularPost;
