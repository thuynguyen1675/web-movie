import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Typography, Grid, Box } from "@material-ui/core";
import { loadDetail, img_prefix } from "../client";
import Template from "../component/Template";
import "../component/styles.css";
import { Movie } from "../model/index";
import NotFound from "./NotFound";

const DetailMovie = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [detailRes, setDetailRes] = useState<Movie>({
    id: 0,
    title: "",
    poster_path: "",
    overview: "",
    vote_average: 0,
    vote_count: 0,
    release_date: "",
  });
  const loadDetailMovie = async (id: string) => {
    const detailResult = await loadDetail(id);
    setDetailRes(detailResult);
    setIsLoading(false);
  };
  useEffect(() => {
    loadDetailMovie(id || "");
  }, [id]);
  if (!detailRes.title && !isLoading) {
    return <NotFound />;
  }
  return (
    <Template>
      <Grid container spacing={2}>
        <Grid item lg={3} className="containerImg">
          <Box className="wrapImg">
            <img
              width="280"
              height="320"
              src={img_prefix + detailRes.poster_path}
              className="imgDetail"
            />
          </Box>
        </Grid>
        <Grid item lg={9}>
          <Typography className="titleDetail">{detailRes.title}</Typography>
          <p>
            <b>Release date:</b> {detailRes.release_date}
          </p>
          <p>
            <b>Overview:</b> {detailRes.overview}
          </p>
          <p>
            <b>Vote:</b> {detailRes.vote_average} ({detailRes.vote_count} votes)
          </p>
        </Grid>
      </Grid>
    </Template>
  );
};

export default DetailMovie;
