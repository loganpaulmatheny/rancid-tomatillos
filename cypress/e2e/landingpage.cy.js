describe("landing page", () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/').intercept(
      'GET',
      'https://rancid-tomatillos.herokuapp.com/api/v2/movies',
      {
        statusCode: 201,
        fixture: 'allMoviesData',
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

 it('should display results from movie title search', () => {
    cy.get('input[type="text"]').type('black adam')
    .get('.poster-container').should('have.length', 1)
    .get('.movie-title').contains('p', 'Black Adam')
    .get('.movie-rating').contains('p', '4')
  })

  it('should not refresh page if user types enter key', () => {
    cy.get('input[type="text"]').type('black panther')
    .type('{enter}')
    .get('.movie-title').contains('p', 'Black Panther: Wakanda Forever')
  })

  it('should display message if no results match search criteria', () => {
    cy.get('input[type="text"]').type('blah blah blah')
    .get('.no-match-msg').should('be.visible')
    .get('.no-match-msg').should('contain.text', 'Looks like there\'s no movies with that title')
  })
})

describe("error handling", () => {
  it('should display an error message when an error occurs', () => {
    cy.visit('http://localhost:3000').intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
      statusCode: 404, 
    })
    .get('.movies-error').should('be.visible')
    .get('.movies-error').should('contain.text', 'Thats a RANCID URL, double check it and try again')
  });
});
