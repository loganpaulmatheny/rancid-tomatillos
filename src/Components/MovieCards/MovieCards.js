import "./MovieCards.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function MovieCard({ imagePath, rating, title, id }) {
  // need way to get access to id of clicked movie
  //
  return (
    <Link to={`/movie/${id}`}>
      <figure className="poster-container">
        <img
          className="movie-poster"
          id={id}
          src={imagePath}
          alt={`${title} poster`}
        />
        <p className="movie-title">{title}</p>
        <p className="movie-rating">{rating}</p>
      </figure>
    </Link>
  );
}

MovieCard.propTypes = {
  imagePath: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default MovieCard;
