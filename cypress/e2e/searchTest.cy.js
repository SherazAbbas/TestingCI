describe('Google search', () => {
  it('Search', () => {
    cy.visit('https://www.google.com/')
    cy.get('#APjFqb').focus().type('cypress{Enter}')
  })
})