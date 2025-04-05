import "./App.css";
import Blog_Home from "./blog_home/Blog_Home";
import Navbar from "./navbar/Navbar";
import Highlight from "./highlight/Highlight";
import RecentPosts from "./recentPosts/RecentPosts";
function App() {
  return (
    <>
      <Navbar />
      <Blog_Home />
      <Highlight />
      <RecentPosts />
    </>
  );
}

export default App;
