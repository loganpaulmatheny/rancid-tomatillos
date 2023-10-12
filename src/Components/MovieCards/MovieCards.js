import './MovieCards.css'

function MovieCard({imagePath, rating, title, id}) {
  return (
    <figure className="poster-container">
      <img className="movie-poster" id={id} src={imagePath} alt={`${title} poster`}/>
      <p className="movie-title">{title}</p>
      <p className="movie-rating">{rating}</p>
    </figure>
  )
}

export default MovieCard