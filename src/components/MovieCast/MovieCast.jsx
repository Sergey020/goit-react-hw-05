import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import toast from "react-hot-toast";
import { getMovieCast } from "../../service/filmsApi";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const defaultImg =
    "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";
  useEffect(() => {
    if (!movieId) return;
    const fetchCast = async () => {
      setIsLoading(true);
      try {
        const movieCast = await getMovieCast(movieId);
        setCast(movieCast);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCast();
  }, [movieId]);
  return (
    <>
      {isLoading && <Loader />}
      {error && toast.error("Can not be empty!")}

      <ul>
        {cast.map((actor) => (
          <li key={actor.cast_id}>
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                  : defaultImg
              }
              width={185}
              alt={actor.name}
            />
            <p>{actor.name}</p>
            <p>Character:{actor.character}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MovieCast;
