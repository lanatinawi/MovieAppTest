import axios from "axios";
import { apiKey } from "../constants";

// Endpoints
const apiBaseUrl = 'https://api.themoviedb.org/3';
const createApiEndpoint = (path, params = {}) => `${apiBaseUrl}/${path}?api_key=${apiKey}&${new URLSearchParams(params)}`;

// Trending Movies Endpoint
const trendingMoviesEndpoint = createApiEndpoint('trending/movie/day');

// Upcoming Movies Endpoint
const upcomingMoviesEndpoint = createApiEndpoint('movie/upcoming');

// Top Rated Movies Endpoint
const topRatedMoviesEndpoint = createApiEndpoint('movie/top_rated');

// Search Movies Endpoint
const searchMoviesEndpoint = createApiEndpoint('search/movie');

// Movie Endpoints
const movieDetailsEndpoint = (id) => createApiEndpoint(`movie/${id}`);
const movieCreditsEndpoint = (id) => createApiEndpoint(`movie/${id}/credits`);
const similarMoviesEndpoint = (id) => createApiEndpoint(`movie/${id}/similar`);

// Person Endpoints
const personDetailsEndpoint = (id) => createApiEndpoint(`person/${id}`);
const personMoviesEndpoint = (id) => createApiEndpoint(`person/${id}/movie_credits`);

// Functions to Get Images of Different Widths
export const getImageUrl = (width, posterPath) => posterPath ? `https://image.tmdb.org/t/p/w${width}${posterPath}` : null;

// Fallback Images
export const fallbackMoviePoster = 'https://img.myloview.com/stickers/white-laptop-screen-with-hd-video-technology-icon-isolated-on-grey-background-abstract-circle-random-dots-vector-illustration-400-176057922.jpg';
export const fallbackPersonImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmUiF-YGjavA63_Au8jQj7zxnFxS_Ay9xc6pxleMqCxH92SzeNSjBTwZ0l61E4B3KTS7o&usqp=CAU';

// Generic API Call Function
const apiCall = async (endpoint, params = {}) => {
  try {
    const response = await axios.get(endpoint, { params });
    return response.data;
  } catch (error) {
    console.error('API error:', error);
    return {};
  }
};

// Home Screen APIs
export const fetchTrendingMovies = () => apiCall(trendingMoviesEndpoint);
export const fetchUpcomingMovies = () => apiCall(upcomingMoviesEndpoint);
export const fetchTopRatedMovies = () => apiCall(topRatedMoviesEndpoint);

// Movie Screen APIs
export const fetchMovieDetails = (id) => apiCall(movieDetailsEndpoint(id));
export const fetchMovieCredits = (movieId) => apiCall(movieCreditsEndpoint(movieId));
export const fetchSimilarMovies = (movieId) => apiCall(similarMoviesEndpoint(movieId));

// Person Screen APIs
export const fetchPersonDetails = (personId) => apiCall(personDetailsEndpoint(personId));
export const fetchPersonMovies = (personId) => apiCall(personMoviesEndpoint(personId));

// Search Screen APIs
export const searchMovies = (params) => apiCall(searchMoviesEndpoint, params);
