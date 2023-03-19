const apiKey = "4e96d7010f2eed59c0c43e5f1543cb0c";
export const apiNowPlaying = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`;
export const apiSearch = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}`; // search by movies name
export const apiMovie = `https://api.themoviedb.org/3/movie`;
export const img_prefix = `https://image.tmdb.org/t/p/w500`;

export const loadDetail = async (id: string) => {
  const detailResult = await (
    await fetch(apiMovie + `/${id}?api_key=` + apiKey)
  ).json();
  return detailResult;
};

export const loadListMovie = async (type: string, page: string) => {
  const api = apiMovie + "/" + type + `?api_key=${apiKey}` + `&page=${page}`;
  const response = await fetch(api);
  const rs = await response.json();
  return rs;
};

export const getListMovieSearch = async (query: string, page: string) => {
  let api = apiSearch + `&query=${query}`;
  if (page) {
    api += `&page=${page}`;
  }
  const response = await fetch(api);
  const rs = await response.json();
  return rs;
};
