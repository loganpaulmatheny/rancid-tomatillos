import "./MovieBlowUp.css";
import PropTypes from "prop-types";
 import {useParams} from "react-router-dom"

function MovieBlowUp({handleSingleMovie}) {
  const movieId = useParams().id;
  

const movieBlowupDetails = handleSingleMovie(movieId).then((movieInfo) => {
  console.log(movieId)
  console.log("movie blow single movie", movieInfo.movie)

  //  return (
  // <div>
  //     <h2>{movieInfo.title}</h2>
  //     <img
  //       className="movie-blowup-poster"
  //       src={movieInfo.poster_path}
  //       alt={`${movieInfo.title} poster`}
  //     />
  //     <h3>Overview</h3>
  //     <p>{movieInfo.overview}</p>
  //     <ul>
  //       <li>{movieInfo.average_rating}</li>
  //       <li>{movieInfo.release_date}</li>
  //     </ul>
  //     <button>Return to all movies</button>
  //   </div>
  // )
}
)

  return (
    <h1>Hello!</h1>
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
