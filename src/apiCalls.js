const getAllMovies = () => {
  const root = "https://rancid-tomatillos.herokuapp.com/api/v2/movies";

  return fetch(root)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`There was an error fetching all movies`);
      }
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    });
};

const getSingleMovie = (id) => {
  const root = `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`;
  return fetch(root)
    .then((response) => {
      if (!response.ok) {
        throw new Error("There was an error fetching a single movie");
      }
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    });
};

export { getAllMovies, getSingleMovie };
