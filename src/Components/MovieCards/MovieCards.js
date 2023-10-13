import "./MovieCards.css";
import PropTypes from "prop-types";

function MovieCard({ imagePath, rating, title, id, viewMovieBlowUp }) {
  return (
    <figure className="poster-container" onClick={() => viewMovieBlowUp(id)}>
      <img
        className="movie-poster"
        id={id}
        src={imagePath}
        alt={`${title} poster`}
      />
      <p className="movie-title">{title}</p>
      <p className="movie-rating">{rating}</p>
    </figure>
  );
}

MovieCard.propTypes = {
  imagePath: PropTypes.string,
  rating: PropTypes.number,
  title: PropTypes.string,
  id: PropTypes.number,
  viewMovieBlowUp: PropTypes.func,
};

export default MovieCard;
