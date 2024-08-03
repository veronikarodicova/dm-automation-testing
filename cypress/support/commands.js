/// <reference types="cypress" />

Cypress.Commands.add('getByData', { prevSubject: 'optional' }, (subject, selector) =>
  subject ? cy.wrap(subject).find(`[data-dmid=${selector}]`) : cy.get(`[data-dmid=${selector}]`)
);