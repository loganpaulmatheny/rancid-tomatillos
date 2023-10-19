import { type } from "@testing-library/user-event/dist/type";

const getAllMovies = () => {
  const root = "https://rancid-tomatillos.herokuapp.com/api/v2/movies";

  return fetch(root)
    .then((response) => {
      if (!response.ok) {
        console.log(
          `Statuscode: ${response.status}, Text: ${response.statusText}`
        );
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
};

const getSingleMovie = (id) => {
  const root = `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`;
  return fetch(root)
    .then((response) => {
      if (!response.ok) {
        console.log(
          `Statuscode: ${response.status}, Text: ${response.statusText}`
        );
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
};

export { getAllMovies, getSingleMovie };
