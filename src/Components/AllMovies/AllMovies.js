import "./AllMovies.css";
import MovieCard from "../MovieCards/MovieCards";
import PropTypes from "prop-types";

// add filtering/search functionality here in APP component
// set state for search
// useEffect?

// - filter over the moviesData 
    // - split the movie title based on (" ") to get an array of words.
    // - use find() to search through the array to find the first word from 
    // the title that starts with a user's search value. 
    // should not be case sensitive: toLowerCase()?
// - startsWith()?
// - set the state to the result of this filtering


function AllMovies({ moviesData }) {



  const movieCards = moviesData.map((movie) => {
    return (
      <MovieCard
        imagePath={movie.poster_path}
        rating={movie.average_rating}
        title={movie.title}
        id={movie.id}
        key={movie.id}
        // handleSingleMovie={handleSingleMovie}
      />
    );
  });
  return <div className="movie-container">{movieCards}</div>;
}

AllMovies.propTypes = {
  moviesData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default AllMovies;
