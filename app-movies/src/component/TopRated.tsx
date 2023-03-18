import { Box, Container } from "@material-ui/core";
import SearchBar from "./SearchBar";
import React, { useState, useEffect } from "react";
import TabBar from "./TabBar";
import { useParams } from "react-router-dom";
import { apiTopRated } from "../client/index";
import ListMovie from "./ListMovie";
import { ResultMovies } from "../model/index";

function TopRated() {
  const { id } = useParams();
  console.log("id: ", id);
  const [listMovie, setListMovie] = useState<ResultMovies>({
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  });
  useEffect(() => {
    async function loadTopRated() {
      const response = await fetch(apiTopRated);
      const rs = await response.json();
      setListMovie(rs);
    }
    loadTopRated();
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
