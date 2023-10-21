import "./AllMovies.css";
import MovieCard from "../MovieCards/MovieCards";
import PropTypes from "prop-types";
import SearchMovies from "../Search/search"
import { useState, useEffect } from "react"


// add filtering/search functionality here in APP component
// set state for search
// useEffect?

// - filter over the moviesData 
    // - split the movie title based on (" ") to get an array of words.
    // - use find() to search through the array to find the first word from 
    // the title that starts with a user's search value. 
    // should not be case sensitive: toLowerCase()?
// - set the state to the result of this filtering


function AllMovies({ moviesData }) {
  const [filteredMovies, setFilteredMovies] = useState([]) 
  
  useEffect(() => {
    setFilteredMovies([...moviesData])
}, [moviesData])

  const filterMovies = (searchTerms) => {   
    console.log("search terms", searchTerms)
    if(searchTerms !== undefined) {
      const searchResults = moviesData.filter((movie) => {
        const searchTermString = searchTerms.toLowerCase().split(" ").join("")
        return movie.title.toLowerCase().split(" ").join("").includes(searchTermString)
      })
      console.log("SEARCH RESULTS", searchResults)
    if (searchResults.length === 0 ) {
      setFilteredMovies([...moviesData])

    } else {
      setFilteredMovies(searchResults)
    }
    }
  }

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
    <SearchMovies filterMovies={filterMovies}/>
        <div className="movie-container">{movieCards}</div>
  </div>
    )
}

AllMovies.propTypes = {
  moviesData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default AllMovies;
