import axios from "axios";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OWY3M2NmM2E2NzUxOTk0ZGJkMzRmNzBkNjdkYTAxZCIsInN1YiI6IjY2NzE4MjliZGVmZmM2NTBlOTgzZDBiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8vCpsdeFJkln7fn48A4uMIGIafDsvaEF2hBwcWGuLAI";
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common["Authorization"] = `Bearer ${API_KEY}`;

export const getTrendingMovies = async () => {
  const { data } = await axios.get("/trending/movie/day");
  return data;
};

export const searchMovies = async (query) => {
  const { data } = await axios.get("/search/movie", {
    params: {
      query,
    },
  });
  return data.results;
};

export const getMovieDetails = async (movieId) => {
  const { data } = await axios.get(`/movie/${movieId}`);
  return data;
};

export const getMovieCast = async (movieId) => {
  const { data } = await axios.get(`/movie/${movieId}/credits`);
  return data.cast;
};

export const getMovieReviews = async (movieId) => {
  const { data } = await axios.get(`/movie/${movieId}/reviews`);
  return data.results;
};
