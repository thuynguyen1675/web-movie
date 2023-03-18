import { Grid, Box } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import CardMovie from "./CardMovie";
import { Movie, ResultMovies } from "../model/index";
import React from "react";

const ListMovie = (props: ResultMovies) => {
  const { results, total_pages } = props;
  return (
    <>
      <Grid container spacing={2}>
        {results.map((movie) => {
          const movieInfo: Movie = {
            id: movie.id,
            title: movie.title,
            poster_path: movie.poster_path,
            overview: movie.overview,
            vote_average: movie.vote_average,
            vote_count: movie.vote_count,
            release_date: movie.release_date,
          };
          return <CardMovie key={movie.id} {...movieInfo} />;
        })}
      </Grid>
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "30px 0",
        }}
      >
        <Pagination count={total_pages} variant="outlined" />
      </Box>
    </>
  );
};

export default ListMovie;
