import "./App.css";
import Blog_Home from "./blog_home/Blog_Home";
import Navbar from "./navbar/Navbar";
import Highlight from "./highlight/Highlight";
import RecentPosts from "./recentPosts/RecentPosts";
import PopularPost from "./popularPost/PopularPost";
import SubscriptionBox from "./subscriptionBox/SubscriptionBox";
function App() {
  return (
    <>
      <Navbar />
      <div className="mainContainer">
        <Blog_Home />
        <Highlight />
        <RecentPosts />
        <PopularPost />
        <SubscriptionBox />
      </div>
    </>
  );
}

export default App;
