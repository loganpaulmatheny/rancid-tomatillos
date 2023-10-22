import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import "../App/App.css";

import { getAllMovies } from "../apiCalls";

import AllMovies from "../Components/AllMovies/AllMovies";
import MovieBlowUp from "../Components/MovieBlowUp/MovieBlowUp";

function App() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = () => {
    getAllMovies()
      .then((movieData) => {
        setMovies(movieData.movies);
        clearError();
      })
      .catch((error) => {
        console.log("an error was found");
        if (error.message === "404") {
          setError("Thats a RANCID URL, double check it and try again");
        } else {
          setError("OOPS rancid TOMATILLOS went bad, try again later");
        }
      });
  };

  const clearError = () => {
    setError("");
  };

  return (
    <main className="App">
      <nav className="nav-bar">
        <h1 className="main-header">Rancid Tomatillos</h1>
      </nav>
      {error && <h2 className="movies-error">{error}</h2>}
      <Routes>
        <Route path="/" element={!error && <AllMovies moviesData={movies} />} />
        <Route
          path="/movie/:id"
          element={
            <MovieBlowUp
              error={error}
              setError={setError}
              clearError={clearError}
            />
          }
        />
      </Routes>
    </main>
  );
}

export default App;
