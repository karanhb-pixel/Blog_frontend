import React from "react";

import Blog_Home from "../components/blog_home/Blog_Home";
import Highlight from "../components/highlight/Highlight";
import RecentPosts from "../components/recentPosts/RecentPosts";
import PopularPost from "../components/popularPost/PopularPost";

const Blog_Start = () => {
  return (
    <div className="blog_start">
      <Blog_Home />
      <Highlight />
      <RecentPosts />
      <PopularPost />
    </div>
  );
};

export default Blog_Start;
