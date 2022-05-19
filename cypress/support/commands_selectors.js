Cypress.Commands.add("visitDashboard", () => {
    cy.visit('http://localhost:8080/dashboard')
});

Cypress.Commands.add("contactItem", () => {
    return cy.get('.card')
});

Cypress.Commands.add("contactList", () => {
    return cy.get('[data-cy=contactList]')
});

Cypress.Commands.add("alertName", () => {
    return cy.get('.input-name small')
});

Cypress.Commands.add("alertNumber", () => {
    return cy.get('.input-number small')
});

Cypress.Commands.add("alertDesc", () => {
    return cy.get('.text-description small')
});
