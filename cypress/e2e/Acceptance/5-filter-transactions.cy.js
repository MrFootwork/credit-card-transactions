/// <reference types="cypress" />

describe('Filter Transactions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4000/');
  });

  it(`The user can filter transactions by inputting amount 
  to the filter fields. Transactions with the amount in the 
  fields or greater should be left visible`, () => {
    cy.get(`.wrapper.card.private`).click({ force: true });
    cy.get('li.transaction').should('have.length', '3');
    cy.get('#input-amount').type('35').should('be.enabled');
    cy.get('[data-cy-transaction="amount"]').as('amounts');
    cy.get('@amounts').each((amount) => {
      cy.get(amount)
        .invoke('text')
        .then(parseInt)
        .then((text) => {
          // FIXME convert to number, then compare if greater than 35
          // const amountNumber = text.
        });
    });
  });
});
