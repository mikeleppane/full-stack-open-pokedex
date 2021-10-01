describe('Pokedex', function () {
  it('front page can be opened', function () {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains(
      'Pokémon and Pokémon character names are trademarks of Nintendo.'
    )
  })
  it('User should navigate to pokemon page', function () {
    cy.visit('http://localhost:5000')
    cy.contains('caterpie')
    cy.get('.list-item-name').contains('caterpie').click()
    cy.contains('caterpie')
  })
})
