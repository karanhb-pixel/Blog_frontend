import React from "react";
import "./Blog_Page.css";
import PostContainer from "../components/postContainer/PostContainer";
import DummyData from "../assets/dummyData.json";
const Blog_Page = () => {
  return (
    <div className="blog_page">
      <div className="blog_page_headingtext">
        <h3>OUR BLOGS</h3>
        <h1>Find our all blogs from here</h1>
        <p>
          our blogs are written from very research research and well known
          writers writers so that we can provide you the best blogs and articles
          articles for you to read them all along
        </p>
      </div>
      <div className="blog_page_postContainer">
        {DummyData.map((post, index) => (
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

export default Blog_Page;
