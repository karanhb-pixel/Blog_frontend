
import "./App.css";

import Navbar from "./components/navbar/Navbar";
import SubscriptionBox from "./components/subscriptionBox/SubscriptionBox";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import NotFound from "./components/NotFound";

const Blog_Start = lazy(() => import("./blog_start/Blog_Start"));
const Blog_Page = lazy(() => import("./blog_Page/Blog_Page"));
const Contact_Page = lazy(() => import("./contact_Page/Contact_Page"));

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
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
            <Route
              path="/contact_page"
              element={
                <div className="mainContainer">
                  <Contact_Page />
                </div>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <SubscriptionBox />
        <Footer />
      </Router>
    </>
  );
}

export default App;
