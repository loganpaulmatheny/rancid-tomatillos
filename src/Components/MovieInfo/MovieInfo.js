import "./MovieInfo.css";

function MovieInfo({ movieInfo }) {
  return (
    <div className="movie-info">
      <img className="movie-info-poster" src={movieInfo.poster_path} alt={movieInfo.title + " movie poster"} />
      <p>{movieInfo.title}</p>
      <p>{movieInfo.rating}</p>
      <p>{movieInfo.release_date}</p>
    </div>
  );
}

export default MovieInfo;
