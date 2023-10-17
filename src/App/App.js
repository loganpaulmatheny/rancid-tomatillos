import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import "../App/App.css";
// import movieData from "../Data/movieData";
import { getAllMovies } from "../apiCalls";

import AllMovies from "../Components/AllMovies/AllMovies";
import MovieBlowUp from "../Components/MovieBlowUp/MovieBlowUp";

function App() {
  const [movies, setMovies] = useState([]);
  // const [movieBlowUp, setMovieBlowUp] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = () => {
    getAllMovies()
      .then((movieData) => {
        setMovies(movieData.movies);
      })
      .catch(() =>
        setError("Oops...looks like R A N C I D tomatillos rotted...")
      );
  };

  // const handleSingleMovie = (id) => {
  //   const singleMovie = movies.find((movie) => {
  //     return movie.id === id;
  //   });

  // const viewHome = () => {
  //   setMovieBlowUp(false);
  // };

  return (
    <main className="App">
      <nav>
        <h1 className="title">Rancid Tomatillos</h1>
      </nav>
      {error && <h2>{error}</h2>}
      <Routes>
        <Route path="/" element={<AllMovies moviesData={movies} />} />
        <Route path="/movie/:id" element={<MovieBlowUp />} />
      </Routes>
      {/*!movieBlowUp ? (
        <AllMovies moviesData={movies} handleSingleMovie={handleSingleMovie} />
      ) : (
        <MovieBlowUp
          key={movieBlowUp.id}
          movieBlowUp={movieBlowUp}
          viewHome={viewHome}
        />
      )*/}
    </main>
  );
}

export default App;
