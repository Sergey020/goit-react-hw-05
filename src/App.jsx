
import Navigation from "./components/Navigation/Navigation";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import NotFoundPage from "./pages/NotFoundPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import MovieCast from "./components/MovieCast/MovieCast";
import MovieReviews from "./components/MovieReviews/MovieReviews";
function App() {
  return (
    <>
      <Navigation/>
      <Routes>
        <Route path="/" element={<HomePage />}/>
          <Route path="/movies" element={<MoviesPage />} >
          <Route path="/movies/:movieId" element= {<MovieDetailsPage/>}/>
          <Route path="/movies/:movieId/cast" element = {<MovieCast/>}/>
          <Route path="/movies/:movieId/reviews" element = {<MovieReviews/>}/>
          </Route>
          <Route path="*" element={<NotFoundPage to="/" />} />
      </Routes>
      
    </>
  );
}

export default App;
