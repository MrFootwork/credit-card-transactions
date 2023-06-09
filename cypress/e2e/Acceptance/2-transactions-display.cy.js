/// <reference types="cypress" />

describe('The transactions of the selected card will be displayed', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4000/');
  });

  const cardTypes = ['private', 'business'];

  cardTypes.forEach((type) => {
    context(`selecting ${type} card`, () => {
      it(`displays corresponding transactions`, () => {
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
});
