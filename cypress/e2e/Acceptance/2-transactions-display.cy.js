/// <reference types="cypress" />

context('Transactions Display', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4000/');
  });

  it('The transactions of the selected card will be displayed', () => {
    const cardTypes = ['private', 'business'];

    cardTypes.forEach((type) => {
      cy.get(`.wrapper.card.${type}`)
        .click()
        .get(`.transaction.${type}`)
        .then((transaction) => {
          cy.get(transaction).should('be.visible');
        })
        .get(`.transaction.${oppositeOf(type)}`)
        .should('not.exist');
    });

    function oppositeOf(inputType) {
      const oppositeIndex =
        1 - cardTypes.findIndex((currentType) => currentType === inputType);
      return cardTypes[oppositeIndex];
    }
  });
});
