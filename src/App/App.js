import '../App/App.css'
import movieData from '../Data/movieData'
import AllMovies from '../Components/AllMovies/AllMovies'
import { useState, useEffect } from 'react'

function App() {
 const [movies, setMovies] = useState([])

useEffect(() => {
  getMovies()
}, [])

function getMovies() {
  setMovies(movieData.movies)
}

  return (
    <main className="App">
      <nav>
        <h1 className="title">Rancid Tomatillos</h1>
      </nav>
      <AllMovies moviesData={movies} />
    </main>
  );
}

export default App;
