import React, { useState, useEffect } from "react";
import { getListMovieSearch } from "../client/index";
import ListMovie from "../component/ListMovie";
import { ResultMovies } from "../model/index";
import Template from "../component/Template";
import { useSearchParams } from "react-router-dom";
import { Typography } from "@material-ui/core";

function SearchMovie() {
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page");
  const query = searchParams.get("query");
  const [listMovie, setListMovie] = useState<ResultMovies>({
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  });
  useEffect(() => {
    async function loadTopRated() {
      const response = await getListMovieSearch(query || "", page || "");
      setListMovie(response);
    }
    loadTopRated();
  }, [query, page]);

  return (
    <Template>
      <Typography style={{ fontSize: 20, marginBottom: 14 }}>
        There are {listMovie.total_results} results of keyword "{query}"
      </Typography>
      <ListMovie {...listMovie} />
    </Template>
  );
}

export default SearchMovie;
