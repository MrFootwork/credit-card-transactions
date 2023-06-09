/// <reference types="cypress" />

describe('There should be a filter field between the cards and the transactions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4000/');
  });

  it('positions amount filter between cards and transactions', () => {
    cy.get('#amount-filter').find('input').should('exist');
    cy.get('#amount-filter').prev().should('have.id', 'card-selector');
    cy.get('#amount-filter').next().should('have.id', 'transaction-list');
  });
});
