import '../App/App.css'
import movieData from '../Data/movieData'
import AllMovies from '../Components/AllMovies/AllMovies'
import MovieBlowUp from '../Components/MovieBlowUp/MovieBlowUp'
import { useState, useEffect } from 'react'

function App() {
 const [movies, setMovies] = useState([])
 const [movieBlowUp, setMovieBlowUp] = useState(false)

useEffect(() => {
  getMovies() 
}, [])

function getMovies() {
  setMovies(movieData.movies)
}

function viewMovieBlowUp(id) {
  const singleMovie = movies.find((movie) => {
      return movie.id === id;
    })
    setMovieBlowUp(singleMovie)
    console.log("a poster was clicked")
  }

  function viewHome() {
    setMovieBlowUp(false)
  }


  return (
    <main className="App">
      <nav>
        <h1 className="title">Rancid Tomatillos</h1>
      </nav>
     { !movieBlowUp ? 
      (<AllMovies moviesData={movies} viewMovieBlowUp={viewMovieBlowUp} /> ):
      ( <MovieBlowUp key={movieBlowUp.id} movieBlowUp={movieBlowUp} viewHome={viewHome}/> )
     }
    </main>
  );
}

export default App;
