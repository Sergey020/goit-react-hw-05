import { useEffect, useState } from "react";
import { getTrendingMovies } from "../service/filmsApi";
import MovieList from "../components/MovieList/MovieList";
import Loader from "../components/Loader/Loader";
import toast from "react-hot-toast";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchTrendingMovies = async () => {
      setIsLoading(true);
      try {
        const { results } = await getTrendingMovies();
        setMovies(results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTrendingMovies();
  }, []);

  return (
  <div>
  <h1>Trending Movies</h1>
  {isLoading && <Loader/>}
{error && toast.error("Can not br empty!")}
<MovieList movies={movies} />
  </div>
  );
};

export default HomePage;
