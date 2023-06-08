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

    cardTypes.forEach((cardType) => {
      cardAreas.forEach((area) => {
        cy.get(`.wrapper.card.${cardType}`)
          .click(`${area}`, { force: true })
          .get(`.wrapper.card.${cardType}>input`)
          .should('be.checked')
          .get(`.wrapper.card.${oppositeOf(cardType)}>input`)
          .should('not.be.checked');
      });
    });

    function oppositeOf(cardType) {
      const oppositeIndex =
        1 - cardTypes.findIndex((type) => type === cardType);
      return cardTypes[oppositeIndex];
    }
  });
});
