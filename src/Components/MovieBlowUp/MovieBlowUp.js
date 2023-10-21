import "./MovieBlowUp.css";

import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import { getSingleMovie } from "../../apiCalls";
function MovieBlowUp({ error, setError, clearError }) {
  const [singleMovie, setSingleMovie] = useState({});

  const movieId = useParams().id;

  const movieBlowUpDetails = () => {
    getSingleMovie(movieId)
      .then((singleMovieData) => {
        setSingleMovie(singleMovieData.movie);
        clearError();
      })
      .catch((error) => {
        if (error.message === "404") {
          setError("Thats a RANCID URL, double check it and try again");
        } else {
          setError("OOPS rancid TOMATILLOS went bad, try again later");
        }
      });
  };

  useEffect(() => movieBlowUpDetails(), [movieId]);

  return (
    <div>
      {!error && Object.keys(singleMovie).length === 0 && <h2> Loading...</h2>}
      {Object.keys(singleMovie).length > 0 && (
        <div className="single-movie-blowup-container">
          <h2>{singleMovie.title}</h2>
          <img
            className="movie-blowup-poster"
            src={singleMovie.poster_path}
            alt={`${singleMovie.title} poster`}
          />
          <h3>Overview</h3>
          <p>{singleMovie.overview}</p>
          <ul>
            <li>{singleMovie.average_rating}</li>
            <li>{singleMovie.release_date}</li>
          </ul>
          <Link to="/">
            <button>Return to all movies</button>
          </Link>
        </div>
      )}
    </div>
  );
}

MovieBlowUp.propTypes = {
  error: PropTypes.string.isRequired,
  setError: PropTypes.func.isRequired,
  clearError: PropTypes.func.isRequired,
};

export default MovieBlowUp;
