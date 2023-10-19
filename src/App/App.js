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
      .catch((error) => {
        // needs some edits and lookup how to get useful information to this part of the app from apiCalls.js
        console.log(error);
        if (error === "404") {
          setError("BAD URL: Double check your url and search again");
        } else {
          setError("rancid's down");
        }
      });
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
        <h1 className="main-header">Rancid Tomatillos</h1>
      </nav>
      {error && <h2 className="movies-error">{error}</h2>}
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
