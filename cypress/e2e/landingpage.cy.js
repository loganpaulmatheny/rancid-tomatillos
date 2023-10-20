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

  it('should display a header and four movie cards', () => {
    cy.get('.main-header').contains('Rancid Tomatillos')
    .get('.movie-container').find('.poster-container').should('have.length', 4)
    .get('.movie-title').first().contains('p', 'Black Adam')
    .get('.movie-rating').first().contains('p', '4')
    .get('.movie-title').last().contains('p', 'Black Panther: Wakanda Forever')
    .get('.movie-rating').last().contains('p', '4')
  })
})

it('should display error if user types incorrect URL path', () => {
  // cy.visit('http://localhost:3000/unexpectedpath')

  // get a p tag that displays an error message 
  // get a button to return to the home page. use .click()
  // after clicking home button, the URL should equal the base domain http://localhost:3000/

  // can we pass setError from one component to another (app to movieBlowUp?)
  // use useState to set error state in movieBlowUp?
})

