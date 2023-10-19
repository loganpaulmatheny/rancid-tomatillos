describe("landing page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/").intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies",
      {
        statusCode: 201,
        fixture: "allMoviesData",
      }
    );
  });

  it("should display a header and four movie cards", () => {
    cy.get(".main-header")
      .contains("Rancid Tomatillos")
      .get(".poster-container");
  });
});
