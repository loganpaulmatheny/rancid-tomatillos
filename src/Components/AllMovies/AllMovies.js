import './AllMovies.css'
import MovieCard from '../MovieCards/MovieCards'

function AllMovies({moviesData}) {
  const movieCards = moviesData.map((movie) => {
    return (
      <MovieCard 
        imagePath={movie.poster_path} 
        rating={movie.average_rating}
        title={movie.title}
        id={movie.id}
        key={movie.id}
      />
    )
  })
  return (
    <div className="movie-container">
    {movieCards}
    </div>
  )
}

export default AllMovies