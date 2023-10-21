import "./AllMovies.css";
import MovieCard from "../MovieCards/MovieCards";
import PropTypes from "prop-types";
import SearchMovies from "../Search/SearchMovies";
import { useState, useEffect } from "react";

function AllMovies({ moviesData }) {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchMade, setSearchMade] = useState(false);

  useEffect(() => {
    setFilteredMovies([...moviesData]);
  }, [moviesData]);


  const updateSearchMade = () => {
    setSearchMade(true);
  };

  const filterMovies = (searchTerms) => {
    const searchResults = moviesData.filter((movie) => {
      const searchTermString = searchTerms.toLowerCase().split(" ").join("");
      return movie.title
        .toLowerCase()
        .split(" ")
        .join("")
        .includes(searchTermString);
    });
    if (searchResults.length === 0 && searchTerms.length > 0) {
      setFilteredMovies([]);
    } else if (searchResults.length === 0) {
      setFilteredMovies([...moviesData]);
    } else {
      setFilteredMovies(searchResults);
    }
  };

  const movieCards = filteredMovies.map((movie) => {
    return (
      <MovieCard
        imagePath={movie.poster_path}
        rating={movie.average_rating}
        title={movie.title}
        id={movie.id}
        key={movie.id}
      />
    );
  });
  return (
    <div>
      <SearchMovies
        filterMovies={filterMovies}
        updateSearchMade={updateSearchMade}
      />
      {searchMade === false && filteredMovies.length === 0 && (
        <h2>Loading...</h2>
      )}
      {searchMade === true && filteredMovies.length === 0 && (
        <h2 className="no-match-msg">Looks like there's no movie with that title</h2>
      )}
      <div className="movie-container">{movieCards}</div>
    </div>
  );
}

AllMovies.propTypes = {
  moviesData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      poster_path: PropTypes.string,
      backdrop_path: PropTypes.string,
      title: PropTypes.string,
      average_rating: PropTypes.number,
      release_date: PropTypes.string,
    })
  ).isRequired,
};

export default AllMovies;
