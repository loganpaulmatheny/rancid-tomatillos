describe("Single Movie Errors", () => {
  it("A user should receive an error when they accidently type in the wrong url", () => {
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270",
      {
        statusCode: 404,
        fixture: "singleMovieTestData",
      }
    ).as("getSingleMovie");

    cy.visit("http://localhost:3000/movie/436270")
      .wait("@getSingleMovie")
      .get(".movies-error")
      .contains("Thats a RANCID URL, double check it and try again");
  });

  it("A user should be notified when there's an error on the server side", () => {
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270",
      {
        statusCode: 500,
        fixture: "singleMovieTestData",
      }
    ).as("getSingleMovie");

    cy.visit("http://localhost:3000/movie/436270")
      .wait("@getSingleMovie")
      .get(".movies-error")
      .contains("OOPS rancid TOMATILLOS went bad, try again later");
  });
});
