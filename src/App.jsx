import "./App.css";
import Navbar from "./components/navbar/Navbar";
import SubscriptionBox from "./components/subscriptionBox/SubscriptionBox";
import Footer from "./components/footer/Footer";
import Blog_Start from "./blog_start/Blog_Start";
import Blog_Page from "./blog_Page/Blog_Page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <div className="mainContainer">
                <Blog_Start />
              </div>
            }
          />
          <Route
            path="/blog"
            element={
              <div className="mainContainer">
                <Blog_Page />
              </div>
            }
          />
        </Routes>
        <SubscriptionBox />
        <Footer />
      </Router>
    </>
  );
}

export default App;
