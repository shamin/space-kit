/// <reference types="Cypress" />

describe('Accessibility tests', () => {
  beforeEach(() => {
    cy.visit('/').get('main').injectAxe();
  });
  it('Has no detectable accessibility violations on load', () => {
    cy.checkA11y();
  });
  it('Navigates to button page and checks for accessibility violations', () => {
    cy.findByText(/Button/i)
      .click()
      .checkA11y();
  });
  it('Navigates to portal page and checks for accessibility violations', () => {
    cy.findByText(/Portal/i)
      .click()
      .checkA11y();
  });
  it('Navigates to themes page and checks for accessibility violations', () => {
    cy.findByText(/Themes/i)
      .click()
      .checkA11y();
  });
});
