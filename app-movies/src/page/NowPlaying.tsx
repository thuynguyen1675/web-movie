import React, { useState, useEffect } from "react";
import { loadListMovie } from "../client/index";
import ListMovie from "../component/ListMovie";
import { ResultMovies } from "../model/index";
import { useSearchParams } from "react-router-dom";
import Template from "../component/Template";

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
    async function loadNowPlaying() {
      const response = await loadListMovie("now_playing", page || "");
      setListMovie(response);
    }
    loadNowPlaying();
  }, [page]);
  console.log(listMovie);

  return (
    <Template>
      <ListMovie {...listMovie} />
    </Template>
  );
}

export default TopRated;
