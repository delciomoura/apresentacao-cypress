import { user, contact } from "../../support/payload";
import notices from "../../fixtures/parameters.json";

describe("contact search", () => {
  describe("Perform contact search", () => {
    beforeEach(() => {
      cy.restoreLocalStorage();
    });

    it(`Given that I have the following contact ${contact.name}`, () => {
      cy.requestCreateUserAndLogin(user);
      cy.requestCreateContact(contact);
      cy.saveLocalStorage();
    });

    it("When I search for this contact", () => {
      cy.visitDashboard();
      cy.searchContact(contact.number);
      cy.validateFinishedLoading();
    });

    it("Then only this contact should be displayed on the dashboard", () => {
      cy.visitDashboard();
      cy.validationOnlyOneContactDisplayed(contact);
    });

    it("When I search for an unregistered contact", () => {
      cy.visitDashboard();
      cy.searchContact(notices.parameters.contactNotRegistered);
    });

    it(`Then the message "${notices.message.expectNotice}" must be displayed`, () => {
      cy.visitDashboard();
      cy.emptyListValidation();
    });
  });
});
