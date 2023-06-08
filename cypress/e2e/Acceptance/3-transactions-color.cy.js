/// <reference types="cypress" />

context('Color of Transaction Element', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4000/');
  });

  it('The transactions have a same background color than the card', () => {
    const cardTypes = ['private', 'business'];

    cardTypes.forEach((type) => {
      let cardColor;

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
