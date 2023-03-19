import { Grid, Box } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import CardMovie from "./CardMovie";
import { Movie, ResultMovies } from "../model/index";
import React from "react";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
import "./styles.css";

const ListMovie = (props: ResultMovies) => {
  const { results, total_pages, total_results } = props;
  const pageScroll = React.useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const handleChange = (e: React.ChangeEvent<unknown>, page: number) => {
    e.preventDefault();
    const query = searchParams.get("query");
    let newSearch: string = "";
    if (location.pathname.includes("search")) {
      newSearch = `?query=${query}` + `&page=${page}`;
    } else {
      newSearch = `?page=${page}`;
    }
    window.scrollTo({
      top: 0,
      //   behavior: "smooth",
    });
    navigate({
      pathname: location.pathname,
      search: newSearch,
    });
  };
  return (
    <>
      <Grid container spacing={2} ref={pageScroll}>
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
      {total_results > 0 && (
        <Box className="wrap_pagination">
          <Pagination
            count={total_pages}
            variant="outlined"
            onChange={handleChange}
            color="secondary"
          />
        </Box>
      )}
    </>
  );
};

export default ListMovie;
