/// <reference types="cypress" />

describe(`The user can filter transactions by inputting amount 
to the filter fields. Transactions with the amount in the 
fields or greater should be left visible`, () => {
  beforeEach(() => {
    cy.visit('http://localhost:4000/');
  });

  const cardTypes = ['private', 'business'];
  const filterAmount = [String(24), String(2.59)];

  cardTypes.forEach((cardType, i) => {
    context(`selecting ${cardType} card`, () => {
      it(`filters ${cardType} transactions >= ${filterAmount[i]}`, () => {
        cy.get(`.wrapper.card.${cardType}`).click({ force: true });
        cy.get('#input-amount').type(filterAmount[i]).should('be.enabled');
        // wait for disappear animation
        cy.wait(500);
        // get all amount fields left
        cy.get('[data-cy-transaction="amount"]').as('amounts');
        cy.get('@amounts').each((amount) => {
          cy.get(amount)
            .invoke('text')
            .then((text) => text.replace(',', '.'))
            .then(parseFloat)
            .then((amount) => {
              expect(amount).to.be.gte(+filterAmount[i]);
            });
        });
      });
    });
  });
});
