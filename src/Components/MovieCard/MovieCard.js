import "./MovieCard.css";

function MovieCard({ imagePath, title, rating, id, viewMovie }) {
  return (
    <div className="movie-card" onClick={() => viewMovie(id)}>
      <img
        className="movie-poster"
        src={imagePath}
        alt={title + " movie poster"}
      />
      <p>{title}</p>
      <p>{rating}</p>
    </div>
  );
}

export default MovieCard;
