import notices from "../fixtures/parameters.json";

Cypress.Commands.add("clickAddNewContactButton", () => {
  cy.addNewContact().click();
});

Cypress.Commands.add("clickSaveButton", () => {
  cy.saveButton().click();
});

Cypress.Commands.add("insertName", (name) => {
  cy.name().type(name);
});

Cypress.Commands.add("insertNumber", (number) => {
  cy.number().type(number);
});

Cypress.Commands.add("insertDescription", (description) => {
  cy.description().type(description);
});

Cypress.Commands.add("createContact", (contact) => {
  cy.clickAddNewContactButton();
  if (contact.name) cy.insertName(contact.name);
  if (contact.number) cy.insertNumber(contact.number);
  if (contact.description) cy.insertDescription(contact.description);
  cy.clickSaveButton();
});

Cypress.Commands.add("searchContact", (number) => {
  cy.levelRightInput().type(number);
  cy.levelRightButtonIsPrimary().click();
});

Cypress.Commands.add("getContact", (target) => {
  cy.contains(".card", target);
});

Cypress.Commands.add("removeContact", (target) => {
  cy.getContact(target).find("[data-cy=btn-remove]").click();
});

Cypress.Commands.add("doLogin", (email, password) => {
  cy.visit("");
  if (email) cy.inputNameEmail().type(email);
  if (password) cy.inputNamePassword().type(password);
  cy.sigIn().click();
});

Cypress.Commands.add("doLoginSession", (email, senha) => {
  cy.session([email, senha], () => {
    cy.visit("");
    cy.inputNameEmail().type(email);
    cy.inputNamePassword().type(senha);
    cy.sigIn().click();
    cy.h4().contains(notices.message.expectMessageAfterLogin);
  });
});

Cypress.Commands.add("loginAlert", (target) => {
  return cy.contains(".message-body", target);
});

Cypress.Commands.add("preserveSession", () => {
  Cypress.Cookies.preserveOnce("user_token");
});

Cypress.Commands.add("generateFixture", () => {
  const faker = require("faker");
  cy.writeFile("cypress/fixtures/contacts.json", {
    contacts: Cypress._.times(5, () => {
      return {
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        number: `${faker.phone.phoneNumber("(84) 9####-####")}`,
        description: `${faker.lorem.words(3)}`,
      };
    }),
  });
});

Cypress.Commands.add("exception", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
});
