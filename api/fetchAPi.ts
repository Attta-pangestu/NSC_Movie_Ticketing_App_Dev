import {
  movieCastDetails,
  movieDetails,
  nowPlayingMovies,
  popularMovies,
  upcomingMovies,
  moviesByCategory,
  movieTrailer,
  movieReviews,
} from './enpoint';

export const getNowPlayingMoviesList = async () => {
  try {
    let response = await fetch(nowPlayingMovies);
    let json = await response.json();
    return json;
  } catch (error) {
    console.error(
      ' Something went wrong in getNowPlayingMoviesList Function',
      error,
    );
  }
};

export const getUpcomingMoviesList = async () => {
  try {
    let response = await fetch(upcomingMovies);
    let json = await response.json();
    return json;
  } catch (error) {
    console.error(
      ' Something went wrong in getUpcomingMoviesList Function',
      error,
    );
  }
};

export const getPopularMoviesList = async () => {
  try {
    let response = await fetch(popularMovies);
    let json = await response.json();
    return json;
  } catch (error) {
    console.error(
      ' Something went wrong in getPopularMoviesList Function',
      error,
    );
  }
};

export const getMovieDetails = async (movieid: number) => {
  try {
    let response = await fetch(movieDetails(movieid));
    let json = await response.json();
    return json;
  } catch (error) {
    console.error('Something Went wrong in getMoviesDetails Function', error);
  }
};

export const getMovieCastDetails = async (movieid: number) => {
  try {
    let response = await fetch(movieCastDetails(movieid));
    let json = await response.json();
    return json;
  } catch (error) {
    console.error(
      'Something Went wrong in getMovieCastDetails Function',
      error,
    );
  }
};

export const getMoviesByCategory = async (genreId: number) => {
  try {
    let response = await fetch(moviesByCategory(genreId));
    let json = await response.json();
    return json;
  } catch (error) {
    console.error(
      'Something went wrong in getMoviesByCategory Function',
      error,
    );
  }
};

export const getMovieTrailer = async (id: number) => {
  const response = await fetch(movieTrailer(id));
  const data = await response.json();
  const trailers = data.results.filter(
    (video: any) => video.type === 'Trailer' && video.site === 'YouTube',
  );
  return trailers.length > 0
    ? trailers[0].key
    : null;
};

export const getMovieReviews = async (movieid: number) => {
  try {
    let response = await fetch(movieReviews(movieid));
    let json = await response.json();
    return json;
  } catch (error) {
    console.error('Something Went wrong in getMovieReviews Function', error);
  }
};
