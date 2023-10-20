import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import "../App/App.css";
// import movieData from "../Data/movieData";
import { getAllMovies } from "../apiCalls";
import SearchMovies from "../Components/Search/search"

import AllMovies from "../Components/AllMovies/AllMovies";
import MovieBlowUp from "../Components/MovieBlowUp/MovieBlowUp";


function App() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]) 
  // move to AllMovies
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

// move this into All movies
const filterMovies = (searchTerms) => {   
  const  filteredMovies = movies.filter((movie) => {
    const searchTermString = searchTerms.toLowerCase().split(" ").join("")
    return movie.title.toLowerCase().split(" ").join("").includes(searchTermString)
  })
  if (filteredMovies.length === 0 ) {
    setFilteredMovies( movies)
  } else {
    setFilteredMovies(filteredMovies)
  }
  // if filteredMovies.length === 0, we want to reassign filteredMovies to the spread of movies

  // set movie state again here?
  // setup the route for search and pass state of filtered movie as prop
  // have a way to change the url > when you start typing 
}

  const clearError = () => {
    setError("");
  };

  return (
    <main className="App">
      <nav>
        <h1 className="main-header">Rancid Tomatillos</h1>
        {/* Move form to all movies  */}
        <SearchMovies filterMovies={filterMovies}/>
      </nav>
      {error && <h2 className="movies-error">{error}</h2>}
      <Routes>
        <Route path="/" element={<AllMovies moviesData={movies} />} />
        {/* <Route path="/search" element={<AllMovies moviesData={filteredMovies} />} /> */}
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
