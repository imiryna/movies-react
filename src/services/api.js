import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const TREND_URL = `${BASE_URL}/trending/movie/day`;
const SEARCH_URL = `${BASE_URL}/search/movie`;

const API_KEY = '0e23dada61404c0bafe5f107d6150751';

const params = {
  params: {
    api_key: API_KEY,
    language: 'en-US',
  },
};

export const fetchTrendingMovies = async () => {
  const { data } = await axios.get(`${TREND_URL}`, params);
  return data;
};

export const fetchSearchMovie = async queryString => {
  params.params.query = queryString;

  const { data } = await axios.get(`${SEARCH_URL}`, params);
  return data;
};

export const fetchMovieBiId = async movieId => {
  const { data } = await axios.get(`${BASE_URL}/movie/${movieId}`, params);
  return data;
};

export const fetchMoviemovieCredits = async movieId => {
  const { data } = await axios.get(`${BASE_URL}/movie/${movieId}/credits`, params);
  return data;
};

export const fetchMoviesReviews = async (movieId) => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${movieId}/reviews`,
    params
  );
  console.log(data)
  return data;
};


