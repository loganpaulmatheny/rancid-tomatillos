import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function SearchMovies({ filterMovies }) {
  const [search, setSearch] = useState("");
  // set state
  // useEffect to run a filter function (which gets passed down as a prop App)

  const preventDefault = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    filterMovies(search);
  }, [search]);

  return (
    <form onSubmit={(event) => preventDefault(event)}>
      <input
        type="text"
        placeholder="Search for a movie"
        name="search-titles"
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
    </form>
  );
}

SearchMovies.propTypes = {
  filterMovies: PropTypes.func,
};

export default SearchMovies;
