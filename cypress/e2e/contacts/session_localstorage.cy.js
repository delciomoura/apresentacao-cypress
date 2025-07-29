import { contact } from "../../support/payload";
import notices from "../../fixtures/parameters.json";

describe("cy session", () => {
  describe("Login example saving to localstorage", () => {
    beforeEach(() => {
      cy.exception();
      cy.restoreLocalStorage();
    });

    it(`Removing a contact`, () => {
      cy.doLogin(Cypress.env("user"), Cypress.env("password"));
      cy.visitDashboard();
      cy.createContact(contact);
      cy.removeContact(contact.number);
      cy.validateIfContactWasNotFound(contact);
      cy.saveLocalStorage();
    });

    it(`Creating a contact with all data`, () => {
      cy.visitDashboard();
      cy.createContact(contact);
      cy.validateIfContactIsInList(contact);
      cy.removeContact(contact.number);
    });

    it("Creating unnamed contact", () => {
      const { name, ...contactWithoutName } = contact;
      cy.visitDashboard();
      cy.createContact(contactWithoutName);
      cy.expectNoticeName(notices.message.expectNoticeName);
    });

    it("Creating a contact without a WhatsApp number", () => {
      const { number, ...contactWithoutPhone } = contact;
      cy.visitDashboard();
      cy.createContact(contactWithoutPhone);
      cy.expectNoticePhone(notices.message.expectNoticePhone);
    });

    it("Creating a contact without a subject", () => {
      const { description, ...contactWithoutDescription } = contact;
      cy.visitDashboard();
      cy.createContact(contactWithoutDescription);
      cy.expectNoticeDescription(notices.message.expectNoticeDescription);
    });

    it("Creating a contact without filling in any information", () => {
      cy.visitDashboard();
      cy.clickAddNewContactButton();
      cy.clickSaveButton();
      cy.expectNoticeName(notices.message.expectNoticeName);
      cy.expectNoticePhone(notices.message.expectNoticePhone);
      cy.expectNoticeDescription(notices.message.expectNoticeDescription);
    });
  });
});
