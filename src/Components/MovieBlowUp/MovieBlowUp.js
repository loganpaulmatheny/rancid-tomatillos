import "./MovieBlowUp.css";

import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import { getSingleMovie } from "../../apiCalls";
function MovieBlowUp() {
  const [singleMovie, setSingleMovie] = useState({});
  const [error, setError] = useState("");

  const movieId = useParams().id;

  const movieBlowUpDetails = () => {
    getSingleMovie(movieId)
      .then((singleMovieData) => {
        setSingleMovie(singleMovieData.movie);
      })
      .catch((error) => {
        if (error.message === "500" || error.message === "404") {
          setError("Thats a RANCID URL, double check it and try again");
        } else {
          setError("OOPS rancid TOMATILLOS went bad, try again later");
        }
      });
  };

  useEffect(() => movieBlowUpDetails(), [movieId]);

  const loading = () => {
    if (error.length === 0 && Object.keys(singleMovie).length === 0) {
      return true;
    } else {
      console.log(Object.keys(singleMovie).length);
      return false;
    }
  };

  return (
    <div>
      {/* waiting on confirmation of 'right way' to do this */}
      {error && <h2 className="single-movie-error">{error}</h2>}
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
            {/* When this is clicked run a function that resets the state of the singleMovie back to empty array, this function should be in this file, it should be named something like clearSingleMovieState, don't just change it..., use a spread operator...?  */}
          </Link>
        </div>
      )}
    </div>
  );
}
// {movieBlowupDetails}

MovieBlowUp.propTypes = {
  movieBlowUp: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    average_rating: PropTypes.number.isRequired,
    release_date: PropTypes.string.isRequired,
  }),
};

export default MovieBlowUp;
