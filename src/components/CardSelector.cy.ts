import CardSelector from './CardSelector.vue';
import { createTestingPinia } from '@pinia/testing';
import { useCards } from '../store/cards';

describe('<CardSelector />', () => {
  beforeEach(() => {
    createTestingPinia({
      initialState: {
        // ... initialize your store here
      },
      createSpy: cy.spy,
    });
    cy.wrap(useCards()).as('store');
  });

  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(CardSelector);
    cy.get('@store').its('getAll').should('be.calledOnce');
  });
});
