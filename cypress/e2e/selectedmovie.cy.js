describe("Selected Movie", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270",
      {
        statusCode: 200,
        fixture: "singleMovieTestData",
      }
    ).as("getSingleMovie");
  });

  it("A user should be able to click on a movie and be shown additional details about that movie as well as move forward and backward", () => {
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies",
      {
        statusCode: 200,
        fixture: "allMoviesData",
      }
    ).as("allMovies");
    cy.visit("http://localhost:3000/movie/436270")
      .wait("@getSingleMovie")
      .url()
      .should("include", "/436270")
      .get(".single-movie-blowup-container")
      .contains("h2", "Black Adam")
      .get("button")
      .click()
      .wait("@allMovies")
      .url()
      .should("includes", "/")
      .get(".poster-container")
      .first()
      .contains("p", "Black Adam")
      .get(".poster-container")
      .last()
      .contains("p", "Black Panther: Wakanda Forever")
      .go("back")
      .get(".single-movie-blowup-container")
      .contains("h2", "Black Adam")
      .go("forward")
      .get(".poster-container")
      .first()
      .contains("p", "Black Adam");
  });

  it("The movie blowup should persist on a reload", () => {
    cy.visit("http://localhost:3000/movie/436270")
      .wait("@getSingleMovie")
      .reload()
      .url()
      .should("include", "/436270")
      .get(".single-movie-blowup-container")
      .contains("h2", "Black Adam");
  });
});
