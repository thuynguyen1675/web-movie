import React from "react";
import { Box, Link } from "@material-ui/core";
import { useLocation } from "react-router-dom";
import "./styles.css";

interface Props {
  title: string;
  linkTo: string;
}
const TabItem = ({ title, linkTo }: Props) => {
  const location = useLocation();
  const isActive = location.pathname === linkTo;
  return (
    <Box className="wrap_link">
      <Link
        href={linkTo}
        underline="none"
        className={isActive ? "link_active" : "link"}
      >
        {title}
      </Link>
    </Box>
  );
};
const TabBar = () => {
  return (
    <Box className="tab_bar">
      <TabItem title="Top Rated" linkTo="/" />
      <TabItem title="Now Playing" linkTo="/now-playing" />
    </Box>
  );
};

export default TabBar;
