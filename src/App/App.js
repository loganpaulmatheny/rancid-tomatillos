// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import movieData from "../Data/MockMoviesData";
import Movies from "../Components/Movies/Movies";

function viewMovie() {
  console.log("You clicked a movie - time to change state!");
}

function App() {
  const [viewMovies, setViewMovie] = useState(0);
  const movies = movieData.movies;
  return (
    <main className="App">
      <nav>
        <h1>R A N C I D Tomatillos</h1>
      </nav>
      {!viewMovies ? <Movies moviesData={movies} viewMovie={viewMovie} /> : ""}
    </main>
  );
}

export default App;
