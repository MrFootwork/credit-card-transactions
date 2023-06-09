/// <reference types="cypress" />

describe(`If the user changes a selected card and 
there is content in the filter fields, the 
content should be reset`, () => {
  beforeEach(() => {
    cy.visit('http://localhost:4000/');
  });

  const cardTypes = ['private', 'business'];

  cardTypes.forEach((cardType) => {
    context(`change to ${cardType} card`, () => {
      it(`resets the filter field`, () => {
        // select first card
        cy.get(`.wrapper.card.${cardType}`).click();
        cy.get('#input-amount').type('123');
        // reselect card
        cy.get(`.wrapper.card.${oppositeOf(cardType)}`).click();
        cy.get('#input-amount')
          .invoke('val')
          .then((text) => text.replace(',', '.'))
          .then(parseFloat)
          .should('equal', 0);
      });
    });
    function oppositeOf(inputType) {
      const oppositeIndex =
        1 - cardTypes.findIndex((currentType) => currentType === inputType);
      return cardTypes[oppositeIndex];
    }
  });
});
