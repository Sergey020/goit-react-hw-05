import { useEffect, useState } from "react";
import { getMovieDetails } from "../service/filmsApi";
import Loader from "../components/Loader/Loader";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import toast from "react-hot-toast";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [movie, setMovie] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const defaultImg =
    "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";
  const linkBack = location.state?.from ?? "/movies";
  useEffect(() => {
    if (!movieId) return;
    const fetchMovieDetails = async () => {
      setIsLoading(true);
      try {
        const movieDetails = await getMovieDetails(movieId);
        setMovie(movieDetails);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieDetails();
  }, [movieId]);
  // console.log(movie);
  return (
    <>
      <Link to={linkBack}>Go back</Link>
      {isLoading && <Loader />}
      {error && toast.error("Can not br empty!")}
      <h2>{movie.original_title}</h2>
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : defaultImg
        }
        width={300}
        alt={movie.title || "poster"}
      />
      <p>{movie.overview}</p>
      <p>{movie.tagline}</p>
      {movie.genres && movie.genres.length > 0 && (
        <>
          <h2>Genres</h2>
          <ul>
            {movie.genres.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </>
      )}
      <h3>Additional information </h3>
      <ul>
        <li>
          <Link to="cast" state={{ from: linkBack }}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={{ from: linkBack }}>
            Reviews
          </Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetailsPage;
