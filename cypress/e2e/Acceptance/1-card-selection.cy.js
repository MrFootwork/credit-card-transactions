/// <reference types="cypress" />

describe('User can select one of the cards', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4000/');
  });

  it(`is possible to click on all cards`, () => {
    cy.get('.wrapper.card').click({ multiple: true });
  });

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

  cardTypes.forEach((type) => {
    context(`when ${type} is selected`, () => {
      it(`selects and deselects cards correctly`, () => {
        cardAreas.forEach((area) => {
          cy.get(`.wrapper.card.${type}`)
            .click(`${area}`, { force: true })
            .get(`.wrapper.card.${type}>input`)
            .should('be.checked')
            .get(`.wrapper.card.${oppositeOf(type)}>input`)
            .should('not.be.checked');
        });
      });

      function oppositeOf(inputType) {
        const oppositeIndex =
          1 - cardTypes.findIndex((currentType) => currentType === inputType);
        return cardTypes[oppositeIndex];
      }
    });
  });
});
