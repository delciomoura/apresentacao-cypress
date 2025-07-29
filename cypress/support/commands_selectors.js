Cypress.Commands.add("visitDashboard", () => {
    cy.visit('/dashboard');
});

Cypress.Commands.add("contactItem", () => {
    cy.get('.card');
});

Cypress.Commands.add("contactList", () => {
    cy.get('[data-cy=contactList]');
});

Cypress.Commands.add("alertName", () => {
    cy.get('.input-name small');
});

Cypress.Commands.add("alertNumber", () => {
    cy.get('.input-number small');
});

Cypress.Commands.add("alertDesc", () => {
    cy.get('.text-description small');
});

Cypress.Commands.add("name", () => {
    cy.get('[data-cy=name]');
});

Cypress.Commands.add("number", () => {
    cy.get('[data-cy=number]');
});

Cypress.Commands.add("description", () => {
    cy.get('[data-cy=description]');
});

Cypress.Commands.add("saveButton", () => {
    cy.get('[data-cy=saveButton]');
});

Cypress.Commands.add("addNewContact", () => {
    cy.get('[data-cy=addNewContact]');
});

Cypress.Commands.add("messageBody", () => {
    cy.get('.message-body');
});

Cypress.Commands.add("loader", () => {
    cy.get('[alt="Loader"]');
});

Cypress.Commands.add("cardFooterItem", () => {
    cy.get('[class="card-footer-item"]');
});

Cypress.Commands.add("levelRightInput", () => {
    cy.get('.level-right input');
});

Cypress.Commands.add("levelRightButtonIsPrimary", () => {
    cy.get('.level-right button.is-primary');
});

Cypress.Commands.add("inputNameEmail", () => {
    cy.get('input[name=email]');
});

Cypress.Commands.add("inputNamePassword", () => {
    cy.get('input[name=password]');
});

Cypress.Commands.add("sigIn", () => {
    cy.get('#sigIn');
});

Cypress.Commands.add("h4", () => {
    cy.get('h4');
});

Cypress.Commands.add("dashboard", () => {
    cy.get('.dashboard');
});



