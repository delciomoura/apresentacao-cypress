import { user, contact } from "../../support/payload";

describe("contact talk", () => {
  describe("Start a conversation with a contact", () => {
    beforeEach(() => {
      cy.restoreLocalStorage();
    });

    it(`Given that ${contact.name} is the desired contact`, () => {
      cy.requestCreateUserAndLogin(user);
      cy.requestCreateContact(contact);
      cy.saveLocalStorage();
    });

    it("Then should I see the href property with the whatsapp web link", () => {
      cy.visitDashboard();
      cy.externalLinkValidation(contact);
    });
  });
});
