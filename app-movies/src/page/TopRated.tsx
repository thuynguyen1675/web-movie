import React, { useState, useEffect } from "react";
import { loadListMovie } from "../client/index";
import ListMovie from "../component/ListMovie";
import { ResultMovies } from "../model/index";
import Template from "../component/Template";
import { useSearchParams } from "react-router-dom";

function TopRated() {
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page");
  const [listMovie, setListMovie] = useState<ResultMovies>({
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  });
  useEffect(() => {
    async function loadTopRated() {
      const response = await loadListMovie("top_rated", page || "");
      setListMovie(response);
    }
    loadTopRated();
  }, [page]);

  return (
    <Template>
      <ListMovie {...listMovie} />
    </Template>
  );
}

export default TopRated;
