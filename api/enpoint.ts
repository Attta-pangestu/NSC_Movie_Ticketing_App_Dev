const apikey: string = '3b9a0609cd512e2ec3283953ebfbf003';
export const baseImagePath = (size: string, path: string) => {
  return `https://image.tmdb.org/t/p/${size}${path}`;
};
export const nowPlayingMovies: string = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apikey}`;
export const upcomingMovies: string = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apikey}`;
export const popularMovies: string = `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}`;
export const searchMovies = (keyword: string) => {
  return `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${keyword}`;
};
export const movieDetails = (id: number) => {
  return `https://api.themoviedb.org/3/movie/${id}?api_key=${apikey}`;
};
export const movieCastDetails = (id: number) => {
  return `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apikey}`;
};

export const moviesByCategory = (genreId: number) => {
  return `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&with_genres=${genreId}`;
};

export const genreIds = {
  Action: 28,
  Comedy: 35,
  Drama: 18,
  Horror: 27,
};

export const movieTrailer = (id: number) => {
  return `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apikey}`;
};

export const movieReviews = (id: number) => {
  return `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${apikey}`;
};