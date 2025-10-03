import React from "react";

const NotFound = () => (
  <div style={{ minHeight: "60vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
    <h1 style={{ fontSize: "4rem", color: "#7c4ee4" }}>404</h1>
    <h2>Page Not Found</h2>
    <p>The page you are looking for does not exist or has been moved.</p>
    <a href="/" style={{ color: "#7c4ee4", textDecoration: "underline", marginTop: "1rem" }}>Go to Home</a>
  </div>
);

export default NotFound;
