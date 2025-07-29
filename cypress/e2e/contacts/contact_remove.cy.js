import { user, contact } from "../../support/payload";

describe("contact remove", () => {
  describe("Removing a contact", () => {
    beforeEach(() => {
      cy.restoreLocalStorage();
    });

    it(`Given that ${contact.name} is the contact that will be deleted`, () => {
      cy.requestCreateUserAndLogin(user);
      cy.requestCreateContact(contact);
      cy.saveLocalStorage();
    });

    it("When I delete this contact", () => {
      cy.visitDashboard();
      cy.removeContact(contact.number);
    });

    it("Then it should not be displayed on the dashboard", () => {
      cy.visitDashboard();
      cy.validateIfContactWasNotFound(contact);
    });
  });
});
