import "./MovieCard.css";

function MovieCard({ imagePath, title, rating, viewMovie }) {
  console.log(imagePath, rating);
  console.log("getting here");
  return (
    <div className="movie-card" onClick={() => viewMovie()}>
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
