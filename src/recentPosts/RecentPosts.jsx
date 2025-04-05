import React from "react";
import "./RecentPosts.css";
import PostContainer from "../components/postContainer/postContainer";

const RecentPosts = () => {
  return (
    <div className="recentPosts">
      <div className="recentPosts_heading">
        <h1>Our Recent Posts</h1>
        <button>View All</button>
      </div>
      <div className="recentPosts_postContainer">
        <div className="recentPosts_post">
          <PostContainer
            imgurl="/assets/Highlight_img.jpg"
            date="16 March 2023"
            heading="How to make a Game look more attractive with New VR & AI Technology"
            description="Google has been investing in AI for many years and bringing its benefits to individuals, businesses and communities. Whether it’s publishing state-of-the-art research, building helpful products or developing tools and resources that enable others, we’re committed to making AI accessible to everyone."
            url="#"
          />
        </div>
        <div className="recentPosts_post">
          <PostContainer
            imgurl="/assets/post1.jpg"
            date="13 March 2023"
            heading="8 Rules of Travelling In Sea You Need To Know"
            description="Travelling in sea has many advantages. Some of the advantages of transporting goods by sea include: you can ship large volumes at costs... "
            url="#"
          />
          <PostContainer
            imgurl="/assets/post2.jpg"
            date="11 March 2023"
            heading="How to build strong portfolio and get a Job in UI/UX"
            description="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from... "
            url="#"
          />
          <PostContainer
            imgurl="/assets/post3.jpg"
            date="10 March 2023"
            heading="How to Be a Professional Footballer in 2023"
            description="Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. survival strategies to ensure proactive... "
            url="#"
          />
        </div>
      </div>
    </div>
  );
};

export default RecentPosts;
