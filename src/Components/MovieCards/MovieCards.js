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
  imagePath: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  viewMovieBlowUp: PropTypes.func.isRequired,
};

export default MovieCard;
