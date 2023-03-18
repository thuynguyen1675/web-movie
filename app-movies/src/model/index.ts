export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
}

export interface ResultMovies {
  page: number;
  results: Array<Movie>;
  total_pages: number;
  total_results: number;
}
