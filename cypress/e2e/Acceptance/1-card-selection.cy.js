/// <reference types="cypress" />

context('Card Selection', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4000/');
  });

  it('User can select one of the cards', () => {
    // https://on.cypress.io/click
    cy.get('.wrapper.card').click({ multiple: true });

    const cardAreas = [
      'topLeft',
      'top',
      'topRight',
      'left',
      'right',
      'bottomLeft',
      'bottom',
      'bottomRight',
    ];

    const cardTypes = ['private', 'business'];

    cardTypes.forEach((type) => {
      cardAreas.forEach((area) => {
        cy.get(`.wrapper.card.${type}`)
          .click(`${area}`, { force: true })
          .get(`.wrapper.card.${type}>input`)
          .should('be.checked')
          .get(`.wrapper.card.${oppositeOf(type)}>input`)
          .should('not.be.checked');
      });
    });

    function oppositeOf(inputType) {
      const oppositeIndex =
        1 - cardTypes.findIndex((currentType) => currentType === inputType);
      return cardTypes[oppositeIndex];
    }
  });
});
