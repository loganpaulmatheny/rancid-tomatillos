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
      {console.log(singleMovie)}
      {!error && Object.keys(singleMovie).length === 0 && <h2> Loading...</h2>}
      {Object.keys(singleMovie).length > 0 && (
        <article className='single-movie-blowup-container' style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${singleMovie.backdrop_path})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundColor: "fade(#FFFFFF, 50%)"
        }}>
          <img
            className='movie-blowup-poster'
            src={singleMovie.poster_path}
            alt={`${singleMovie.title} poster`}
          />

          <section className='single-movie-info'>
            {/* <img
              className='movie-backdrop'
              src={singleMovie.backdrop_path}
              alt={`${singleMovie.title} poster backdrop`}
            /> */}
            <h2>{singleMovie.title}</h2>
            <div className='synopsis'>
              <h3>Synopsis</h3>
              <p>{singleMovie.overview}</p>
            </div>
            <ul>
              <li>{singleMovie.average_rating}★</li>
              <li>{singleMovie.runtime} mins</li>
              <li>
                Released{" "}
                {singleMovie.release_date.split("-").join("").slice(0, -4)}
              </li>
              <li>
                Budget {`${singleMovie.budget}` === "0" 
                ? "Unknown" : `$${singleMovie.budget}`}
              </li>
              <li>Revenue {`${singleMovie.revenue}` === "0" 
              ? "Unknown" : `$${singleMovie.revenue}`}</li>
            </ul>
          </section>
          <Link to='/'>
            <button>Return to all movies</button>
          </Link>
        </article>
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
