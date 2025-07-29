import notices from "../fixtures/parameters.json";

Cypress.Commands.add("validateIfContactWasNotFound", (contact) => {
  cy.getContact(contact.number).should("not.exist");
});

Cypress.Commands.add("validateIfContactIsInList", (contact) => {
  cy.contactList().contains(contact.name);
});

Cypress.Commands.add("expectNoticeName", (notice) => {
  cy.alertName().contains(notice);
});

Cypress.Commands.add("expectNoticePhone", (notice) => {
  cy.alertNumber().contains(notice);
});

Cypress.Commands.add("expectNoticeDescription", (notice) => {
  cy.alertDesc().contains(notice);
});

Cypress.Commands.add("validateFinishedLoading", () => {
  cy.loader().should("not.exist");
});

Cypress.Commands.add("validationOnlyOneContactDisplayed", (contact) => {
  cy.card().should("have.length", 1);
  cy.card().contains(contact.name);
  cy.card().contains(contact.description);
});

Cypress.Commands.add("emptyListValidation", () => {
  cy.messageBody().contains("Contato não encontrado :(");
});

Cypress.Commands.add("externalLinkValidation", (contact) => {
  cy.cardFooterItem(contact.number).should("have.attr", "href", `${Cypress.env('linkApiWhatsapp')}${contact.number}`);
});

Cypress.Commands.add("dashboardValidation", () => {
  cy.contains("h4", notices.message.expectMessageAfterLogin).should("be.visible");
});

Cypress.Commands.add("validateFileCreation", () => {
  cy.readFile("cypress/fixtures/contacts.json");
});
