
import Navigation from "./components/Navigation/Navigation";
import { Outlet, Route, Routes } from "react-router-dom";
import MovieCast from "./components/MovieCast/MovieCast";
import MovieReviews from "./components/MovieReviews/MovieReviews";
import { Suspense, lazy } from "react";

const HomePage = lazy(() => import('./pages/HomePage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
function App() {
  return (
    <>
      <Navigation/>
      <Suspense>
      <Routes>
        <Route path="/" element={<HomePage />}/>
          <Route path="/movies" element={<MoviesPage />} >
          <Route path="/movies/:movieId" element= {<MovieDetailsPage/>}/>
          <Route path="/movies/:movieId/cast" element = {<MovieCast/>}/>
          <Route path="/movies/:movieId/reviews" element = {<MovieReviews/>}/>
          </Route>
          <Route path="*" element={<NotFoundPage to="/" />} />
      </Routes>
      <Outlet/>
      </Suspense>
    </>
  );
}

export default App;
