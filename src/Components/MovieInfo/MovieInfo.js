import "./MovieInfo.css";

function MovieInfo({ movieInfo, viewAllMovies }) {
  return (
    <div className="movie-info">
      <img
        className="movie-info-poster"
        src={movieInfo.poster_path}
        alt={movieInfo.title + " movie poster"}
      />
      <p>{movieInfo.title}</p>
      <p>{movieInfo.rating}</p>
      <p>{movieInfo.release_date}</p>
      <button onClick={() => viewAllMovies()}>Return to Movies!</button>
    </div>
  );
}

export default MovieInfo;
