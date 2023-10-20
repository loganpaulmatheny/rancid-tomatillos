import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import "../App/App.css";
// import movieData from "../Data/movieData";
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
        if (error.message === "404") {
          setError("Thats a RANCID URL, double check it and try again");
        } else {
          setError("OOPS rancid TOMATILLOS went bad, try again later");
        }
      });
  };

  // - filter over the moviesData 
    // - split the movie title based on (" ") to get an array of words.
    // - use find() to search through the array to find the first word from 
    // the title that starts with a user's search value. 
    // should not be case sensitive: toLowerCase()?
// - startsWith()?
// - set the state to the result of this filtering

function filterMovies(movies, searchTerms) {
  const filteredMovies = movies.filter((movie) => {
    const searchTermString = searchTerms.toLowerCase().join(" ")
    return movie.title.toLowerCase().join(" ").includes(searchTermString)
  })
  // set movie state again here?
}


  const clearError = () => {
    setError("");
  };

  return (
    <main className="App">
      <nav>
        <h1 className="main-header">Rancid Tomatillos</h1>
      </nav>
      {error && <h2 className="movies-error">{error}</h2>}
      <Routes>
        <Route path="/" element={<AllMovies moviesData={movies} />} />
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
