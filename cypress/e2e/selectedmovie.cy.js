describe("Selected Movie", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270",
      {
        statusCode: 201,
        fixture: "singleMovieTestData",
      }
    ).as("getSingleMovie");
    cy.visit("http://localhost:3000/movie/436270");
  });

  it("A user should be able to click on a movie and be shown additional details about that movie", () => {
    cy.wait("@getSingleMovie")
      .get(".single-movie-blowup-container")
      .contains("h2", "Black Adam");
  });
});
