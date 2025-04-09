import React from "react";
import "./RecentPosts.css";
import PostContainer from "../postContainer/PostContainer";
import DummyData from "../../assets/dummyData.json";
const RecentPosts = () => {
  return (
    <div className="recentPosts">
      <div className="recentPosts_heading">
        <h1>Our Recent Posts</h1>
        <button>View All</button>
      </div>
      <div className="recentPosts_postContainer">
        <div className="recentPosts_post">
          {DummyData.slice(0, 1).map((post, index) => (
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
        <div className="recentPosts_post large-screen">
          {DummyData.slice(1, 4).map((post, index) => (
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
        <div className="recentPosts_post small-screen">
          {DummyData.slice(1, 3).map((post, index) => (
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
    </div>
  );
};

export default RecentPosts;
