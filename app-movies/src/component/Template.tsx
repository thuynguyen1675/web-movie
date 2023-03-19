import { Box, Container } from "@material-ui/core";
import SearchBar from "./SearchBar";
import React from "react";
import TabBar from "./TabBar";
import "./styles.css";

type Props = {
  children: React.ReactNode;
};

function Template({ children }: Props) {
  return (
    <Box className="wrapper">
      <Container maxWidth="lg" className="App">
        <SearchBar />
        <TabBar />
        {children}
      </Container>
    </Box>
  );
}

export default Template;
