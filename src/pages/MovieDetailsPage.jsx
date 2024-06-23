import { useEffect, useState } from "react";

const MovieDetailsPage = () => {
const {movieId} = useParams();
const [movie, setMovie] = useState(null)
const [isLoading,setIsLoading] = useState(false)
const [error,setError] = useState(null);

useEffect(()=> {
const fetchMovieDetails = async () => {
  setIsLoading(true);
  try {
    const movieDetails = await getMovieDatails(movieId)
    setMovie(movieDetails)
  } catch(error){
    setError(error)
  } finally{
    setIsLoading(false)
  }
}
fetchMovieDetails()
},[movieId])

  return (
    <div>MovieDetailsPage</div>
  )
}

export default MovieDetailsPage