import { Box, Container } from "@material-ui/core";
import SearchBar from "./SearchBar";
import React, { useState, useEffect } from "react";
import TabBar from "./TabBar";
import { apiNowPlaying } from "../client/index";
import ListMovie from "./ListMovie";
import { ResultMovies } from "../model/index";

function TopRated() {
  const [listMovie, setListMovie] = useState<ResultMovies>({
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  });
  useEffect(() => {
    async function loadNowPlaying() {
      const response = await fetch(apiNowPlaying);
      const rs = await response.json();
      setListMovie(rs);
    }
    loadNowPlaying();
  }, []);
  console.log(listMovie);

  return (
    <Box style={{ background: "#FFEFD5" }}>
      <Container maxWidth="lg" className="App">
        <SearchBar />
        <TabBar />
        <ListMovie {...listMovie} />
      </Container>
    </Box>
  );
}

export default TopRated;
