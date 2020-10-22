/// <reference types="Cypress" />

const pages = ['Button', 'Portal', 'Themes'];

describe('Accessibility tests', () => {
  beforeEach(() => {
    cy.visit('/').get('main').injectAxe();
  });

  it('Has no detectable accessibility violations on load', () => {
    cy.checkA11y();
  });

  pages.forEach((page) => {
    it(`Navigates to ${page} page and checks for accessibility violations`, () => {
      cy.findByText(page).click().checkA11y();
    });
  });
});
