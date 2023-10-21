import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function SearchMovies({ filterMovies, updateSearchMade }) {
  const [search, setSearch] = useState("");

  const preventDefault = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    if (search.length === 1) {
      updateSearchMade()
    }
    filterMovies(search);
  }, [search]);


  return (
    <form onSubmit={(event) => preventDefault(event)}>
      <input
        type="text"
        placeholder="Search by movie title"
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
  filterMovies: PropTypes.func.isRequired,
};

export default SearchMovies;
