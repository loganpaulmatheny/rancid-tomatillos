import "./Movies.css";
import MovieCard from "../MovieCard/MovieCard";

function Movies({ moviesData, viewMovie }) {
  const movieCards = moviesData.map((movie) => {
    return (
      <MovieCard
        key={movie.id}
        id={movie.id}
        imagePath={movie.poster_path}
        rating={movie.average_rating}
        title={movie.title}
        viewMovie={viewMovie}
      />
    );
  });

  return <div className="movies-container">{movieCards}</div>;
}

export default Movies;
