/// <reference types="cypress" />

describe('The transactions have a same background color than the card', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4000/');
  });

  const cardTypes = ['private', 'business'];

  cardTypes.forEach((type) => {
    context(`selecting ${type} card`, () => {
      let cardColor;
      it('has same color as all left transactions', () => {
        cy.get(`.wrapper.card.${type}`)
          .click()
          .should('have.css', 'background-color')
          .then((color) => (cardColor = color));

        cy.get(`.transaction.${type}`).each((transaction) => {
          cy.get(transaction)
            .should('have.css', 'background-color')
            .should((color) => expect(color).to.equal(cardColor));
        });
      });
    });
  });
});
