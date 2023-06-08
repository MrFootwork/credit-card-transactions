/// <reference types="cypress" />
import CardSelector from '../../../src/components/CardSelector.vue';

describe('Filter Field', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4000/');
  });

  it('There should be a filter field between the cards and the transactions', () => {
    // test here
    it('should mount', () => {
      // FIXME mount doesn't work
      // better to get elements by traditional methods
      cy.mount(CardSelector, {});

      cy.get('ul').should('have.class', 'wrapper');
    });
    cy.get(CardSelector).should('be', 'defined');
  });
});
