import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div
    style={{
      background: "#fce9e9",
      width: "100vw",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <img
      width={600}
      height={400}
      src="https://www.pngitem.com/pimgs/m/561-5616833_image-not-found-png-not-found-404-png.png"
      alt="not-found"
    />
    <Link to="/" className="link-home">
      Go To Home Page
    </Link>
  </div>
);

export default NotFound;
