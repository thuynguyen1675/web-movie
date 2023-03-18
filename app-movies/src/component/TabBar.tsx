import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Link } from "@material-ui/core";

const TabBar = () => {
  return (
    <Box
      style={{
        display: "flex",
        backgroundColor: "orange",
        margin: "25px 0",
      }}
    >
      <Box
        style={{
          padding: "15px",
          backgroundColor: "pink",
        }}
      >
        <Link href="/" underline="none" style={{ color: "#000" }}>
          Top Rated Movies
        </Link>
      </Box>
      <Box
        style={{
          padding: "15px",
          backgroundColor: "pink",
          fontSize: "16px",
        }}
      >
        <Link href="/now-playing" underline="none" style={{ color: "#000" }}>
          Movies Now Playing
        </Link>
      </Box>
    </Box>
  );
};

export default TabBar;
