import { useState, useEffect } from "react";

import "../App/App.css";
// import movieData from "../Data/movieData";

import { getAllMovies, getSingleMovie } from "../apiCalls";

import AllMovies from "../Components/AllMovies/AllMovies";
import MovieBlowUp from "../Components/MovieBlowUp/MovieBlowUp";

function App() {
  const [movies, setMovies] = useState([]);
  const [movieBlowUp, setMovieBlowUp] = useState(false);
  const [error, setError ] = useState("")

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = () => {
    getAllMovies().then((movieData) => {
      setMovies(movieData.movies);
    })
    .catch(() => setError("Oops...looks like R A N C I D tomatillos rotted..."));
  };

  const viewMovieBlowUp = (id) => {
    const singleMovie = movies.find((movie) => {
      return movie.id === id;
    });

    getSingleMovie(singleMovie.id).then((singleMovieData) => {
      setMovieBlowUp(singleMovieData.movie);
    })
    .catch(() => setError("Oops...that movie is rotten..."))
  };

  const viewHome = () => {
    setMovieBlowUp(false);
  };

  return (
    <main className="App">
      <nav>
        <h1 className="title">Rancid Tomatillos</h1>
      </nav>
      {error && <h2>{error}</h2> }
      {!movieBlowUp ? (
        <AllMovies moviesData={movies} viewMovieBlowUp={viewMovieBlowUp} />
      ) : (
        <MovieBlowUp
          key={movieBlowUp.id}
          movieBlowUp={movieBlowUp}
          viewHome={viewHome}
        />
      )}
    </main>
  );
}

export default App;
