const getAllMovies = () => {
  const root = "https://rancid-tomatillos.herokuapp.com/api/v2/movies";

  return fetch(root)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Get network request for all movies not ok");
      }
      return response.json();
    })
    .catch((error) => {
      console.log(`Error fetching all movies ${error}`);
    });
};

const getSingleMovie = (id) => {
  const root = `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`;
  return fetch(root)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Get network request for single movie not ok");
      }
      return response.json();
    })
    .catch((error) => {
      console.log(`Error fetching a single movie ${error}`);
    });
};

export { getAllMovies, getSingleMovie };
