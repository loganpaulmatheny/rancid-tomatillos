// import logo from './logo.svg';
import { useEffect, useState } from "react";
import "./App.css";
import movieData from "../Data/MockMoviesData";
import Movies from "../Components/Movies/Movies";
import MovieInfo from "../Components/MovieInfo/MovieInfo";

function App() {
  const [movies, setMovies] = useState([]);
  const [movieInfo, setMovieInfo] = useState([]);
  const [viewMovies, setViewMovie] = useState(0);

  function getMovies() {
    setMovies(movieData.movies);
  }

  useEffect(() => getMovies(), []);

  function viewMovie(id) {
    console.log("You clicked a movie - time to change state!");
    const singleMovie = movies.filter((movie) => {
      console.log(movie);
      return movie.id === id;
    });
    setViewMovie(1);
    console.log(singleMovie);
    setMovieInfo(singleMovie);
  }

  function viewAllMovies() {
    setViewMovie(0);
  }

  return (
    <main className="App">
      <nav>
        <h1>R A N C I D Tomatillos</h1>
      </nav>
      {!viewMovies ? (
        <Movies moviesData={movies} viewMovie={viewMovie} />
      ) : (
        <MovieInfo
          movieInfo={movieInfo[0]}
          key={movieInfo[0].id}
          viewAllMovies={viewAllMovies}
        />
      )}
    </main>
  );
}

export default App;
