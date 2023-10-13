import "./MovieBlowUp.css";
import PropTypes from "prop-types";

function MovieBlowUp({ movieBlowUp, viewHome }) {
  return (
    <div>
      <h2>{movieBlowUp.title}</h2>
      <img
        className="movie-blowup-poster"
        src={movieBlowUp.poster_path}
        alt={`${movieBlowUp.title} poster`}
      />
      <h3>Overview</h3>
      <p>{movieBlowUp.overview}</p>
      <ul>
        <li>{movieBlowUp.average_rating}</li>
        <li>{movieBlowUp.release_date}</li>
      </ul>
      <button onClick={() => viewHome()}>Return to all movies</button>
    </div>
  );
}

MovieBlowUp.propTypes = {
  movieBlowUp: PropTypes.shape({
    title: PropTypes.string,
    poster_path: PropTypes.string,
    overview: PropTypes.string,
    average_rating: PropTypes.number,
    release_date: PropTypes.object,
  }),
};

export default MovieBlowUp;
