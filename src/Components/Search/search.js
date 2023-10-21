import { useEffect, useState } from "react";

function SearchMovies({ filterMovies }) {
  const [search, setSearch] = useState("");
  // set state
  // useEffect to run a filter function (which gets passed down as a prop App)

  useEffect(() => {
    filterMovies(search);
  }, [search]);

  return (
    <form>
      <input
        type="text"
        placeholder="Search for a movie"
        name="search-titles"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
    </form>
  );
}

export default SearchMovies;
