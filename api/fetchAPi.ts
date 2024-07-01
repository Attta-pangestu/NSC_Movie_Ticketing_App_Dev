import axios from 'axios';
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
    const response = await axios.get(nowPlayingMovies);
    return response.data;
  } catch (error) {
    console.error(
      'Something went wrong in getNowPlayingMoviesList Function',
      error,
    );
  }
};

export const getUpcomingMoviesList = async () => {
  try {
    const response = await axios.get(upcomingMovies);
    return response.data;
  } catch (error) {
    console.error(
      'Something went wrong in getUpcomingMoviesList Function',
      error,
    );
  }
};

export const getPopularMoviesList = async () => {
  try {
    const response = await axios.get(popularMovies);
    return response.data;
  } catch (error) {
    console.error(
      'Something went wrong in getPopularMoviesList Function',
      error,
    );
  }
};

export const getMovieDetails = async (movieid: number) => {
  try {
    const response = await axios.get(movieDetails(movieid));
    return response.data;
  } catch (error) {
    console.error('Something Went wrong in getMoviesDetails Function', error);
  }
};

export const getMovieCastDetails = async (movieid: number) => {
  try {
    const response = await axios.get(movieCastDetails(movieid));
    return response.data;
  } catch (error) {
    console.error(
      'Something Went wrong in getMovieCastDetails Function',
      error,
    );
  }
};

export const getMoviesByCategory = async (genreId: number) => {
  try {
    const response = await axios.get(moviesByCategory(genreId));
    return response.data;
  } catch (error) {
    console.error(
      'Something went wrong in getMoviesByCategory Function',
      error,
    );
  }
};

export const getMovieTrailer = async (id: number) => {
  try {
    const response = await axios.get(movieTrailer(id));
    const data = response.data;
    const trailers = data.results.filter(
      (video: any) => video.type === 'Trailer' && video.site === 'YouTube',
    );
    return trailers.length 
      ? trailers[0].key
      : null;
  } catch (error) {
    console.error('Something went wrong in getMovieTrailer Function', error);
  }
};

export const getMovieReviews = async (movieid: number) => {
  try {
    const response = await axios.get(movieReviews(movieid));
    return response.data;
  } catch (error) {
    console.error('Something Went wrong in getMovieReviews Function', error);
  }
};
