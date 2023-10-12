// import logo from './logo.svg';
import "./App.css";
import movieData from "../Data/MockMoviesData";
import Movies from "../Components/Movies/Movies";

function App() {
  const movies = movieData.movies;
  return (
    <main className="App">
      <nav>
        <h1>R A N C I D Tomatillos</h1>
      </nav>
      <Movies moviesData={movies}></Movies>
    </main>
  );
}

export default App;
