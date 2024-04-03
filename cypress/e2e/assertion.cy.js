describe('Assertion', () => {
    it('Search assertion', () => {
      cy.visit('https://www.google.com/')
      cy.get('#APjFqb').focus().type('cypress{Enter}')
      cy.get('#APjFqb').should('have.value','cypress1')
    })
  })