import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovies } from "../service/filmsApi";
import Loader from "../components/Loader/Loader";
import MovieList from "../components/MovieList/MovieList";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (!query) return;
    const fetchMovies = async () => {
      setIsLoading(true);
      try {
        const result = await searchMovies(query);
        setMovies(result);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, [query]);

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchParams({ query: searchQuery });
    setSearchQuery("");
  };
  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };
  return (
    <>
      <h1>Search Movie</h1>
      <form onSubmit={handleSearch}>
        <input
          name="search"
          onChange={handleChange}
          value={searchQuery}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <button type="submit">Search</button>
      </form>
      {isLoading && <Loader />}
      {error && <p>Something went wrong: {error.message}</p>}
      <MovieList movies={movies} />
    </>
  );
};

export default MoviesPage;
