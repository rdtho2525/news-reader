describe('Dashboard', () => {
  beforeEach(() => {
    cy.intercept('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=3WFYADXBKGNAUyKlI4gXRZTp7ouSRq4r', { fixture: 'stories-fixture.json' })
      .visit('http://localhost:3000/')

      cy.get('[data-cy=dashboard_article-1]')
      .should('contain', 'Black Lives Matter Has Grown More Powerful, and More Divided')
      .click();
  })
  it('should display additional details of the selected article', () => {
    cy.get('[data-cy=full-article_img]')
      .should('have.attr', 'src')
      .should('include','https://static01.nyt.com/images/2021/06/03/us/04BLM-YEARLATER/00BLM-YEARLATER8-superJumbo.jpg')
    cy.contains('Black Lives Matter Has Grown More Powerful, and More Divided')
    cy.contains('Since the murder of George Floyd, the racial justice movement has received millions of dollars in donations. But some chapters have questioned how those funds are spent.')
    cy.contains('By John Eligon')
    cy.contains('2021-06-05T11:27:57-04:00')
    cy.contains('2021-06-04T19:30:33-04:00')

  });

  it.only('should contain a link to the full article', () => {
    cy.get('[data-cy=full-article_external-link]')
      .should('have.attr', 'href')
      .should('include', 'https://www.nytimes.com/2021/06/04/us/black-lives-matter.html')

  });

  it('should be able to return the user back to the dashboard', () => {
    cy.get('[data-cy=full-article_back-button]')
      .click();

    cy.url().should('eq', 'http://localhost:3000/')
  });
})