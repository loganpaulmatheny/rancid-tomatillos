import "./Movies.css";
import MovieCard from "../MovieCard/MovieCard";

function Movies({ moviesData }) {
  console.log(moviesData);
  const movieCards = moviesData.map((movie) => {
    return (
      <MovieCard imagePath={movie.poster_path} rating={movie.average_rating} title={movie.title}/>
    );
  });

  return <div className="movies-container">{movieCards}</div>;
}

export default Movies;
