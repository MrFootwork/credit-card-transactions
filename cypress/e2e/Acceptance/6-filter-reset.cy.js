/// <reference types="cypress" />

describe(`If the user changes a selected card and 
there is content in the filter fields, the 
content should be reset`, () => {
  beforeEach(() => {
    cy.visit('http://localhost:4000/');
  });

  it(`resets the amount by selecting other card`, () => {
    expect(true).to.be.false;
  });
});
