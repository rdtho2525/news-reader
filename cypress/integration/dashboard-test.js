describe('Dashboard', () => {
  beforeEach(() => {
    cy.intercept('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=3WFYADXBKGNAUyKlI4gXRZTp7ouSRq4r', { fixture: 'stories-fixture.json' })
      .visit('http://localhost:3000/')
  })

  it.skip('should display a loading icon while data is being requested', () => {
    cy.get('[data-cy=app_loading-icon]')
      .should('exist')
  });

  it('should display a dashboard containing a featured article and four additional articles', () => {
    cy.get('[data-cy=dashboard_content-container]')
  });

  it('should route the user to a details page if an article is selected', () => {
    cy.get('[data-cy=dashboard_article-1]')
      .should('contain', 'Black Lives Matter Has Grown More Powerful, and More Divided')
      .click();

    cy.url().should('eq', 'http://localhost:3000/Black%20Lives%20Matter%20Has%20Grown%20More%20Powerful,%20and%20More%20Divided')
  });

  it('should contain a search input field and submit button', () => {
    cy.get('[data-cy=header_search-input]')
      .should('be.visible')

    cy.get('[data-cy=header_search-button]')
      .should('be.visible')
  });

  it('should display a button that routes the user to a view of all articles', () => {
    cy.get('[data-cy=header_browse-button]')
      .click();
    
    cy.url().should('eq', 'http://localhost:3000/stories')
    cy.get('[data-cy=browse-articles_articles-section]').children().should('have.length', 10)
  });

  it('should display a button that returns users to the dashboard', () => {
    cy.get('[data-cy=header_browse-button]')
      .click()

    cy.get('[data-cy=header_home-button]')
      .click();

    cy.url().should('eq', 'http://localhost:3000/')
  });

  it('should display a list of relevant search results when a keyword search is submitted', () => {
    cy.get('[data-cy=header_search-input]')
    .type('pandemic')

    cy.get('[data-cy=header_search-button]')
      .click();

    cy.get('[data-cy=browse-articles_articles-section]')
      .should('contain', 'Pandemic or Not, Proms Are Back')
  });

  it('should display a message confirming what was searched', () => {
    cy.get('[data-cy=header_search-input]')
    .type('pandemic')

    cy.get('[data-cy=header_search-button]')
      .click();
    
    cy.get('[data-cy=header]')
      .should('contain', "Search results for: 'pandemic'")
  });

  it('should tell the user when there are no results for their search', () => {
    cy.get('[data-cy=header_search-input]')
    .type('biden')

    cy.get('[data-cy=header_search-button]')
      .click();
    
    cy.get('[data-cy=header]')
    .should('contain', "There were no search results for: 'biden'")
  });

  describe('Rejected requests', () => {
    it('should reveal an error message when the server returns a 404 status code', () => {
      cy.intercept({
        method: 'GET',
        url: 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=3WFYADXBKGNAUyKlI4gXRZTp7ouSRq4r'
      },
      {
        statusCode: 404
      })
      
      cy.visit('http://localhost:3000/')
      cy.get('[data-cy=app_error]')
        .should('contain', 'We\'re sorry, something went wrong! Please try again later.')
    });
  
    it('should reveal an error message when the server returns a 500 status code', () => {
      cy.intercept({
        method: 'GET',
        url: 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=3WFYADXBKGNAUyKlI4gXRZTp7ouSRq4r'
      },
      {
        statusCode: 500
      })
  
      cy.visit('http://localhost:3000/')
      cy.get('[data-cy=app_error]')
        .should('contain', 'We\'re sorry, something went wrong! Please try again later.')
    });
  })
})