import { contactsArray, user } from "../../support/payload";

describe("contacts array foreach", () => {
  describe("Multiple contact removal flow", () => {
    before(() => {
      cy.requestCreateUserAndLogin(user);
      cy.saveLocalStorage();
    });

    beforeEach(() => {
      cy.restoreLocalStorage();
    });

    describe(`Since several contacts were created`, () => {
      contactsArray.forEach((contact) => {
        before(() => {
          cy.requestCreateContact(contact);
        });

        it(`When I remove the contact ${contact.name} with number ${contact.number} and description ${contact.description}`, () => {
          cy.visitDashboard();
          cy.removeContact(contact.number);
        });

        it(`Then the contact ${contact.name} with number ${contact.number} should have been removed and should not be displayed on the dashboard`, () => {
          cy.visitDashboard();
          cy.validateFinishedLoading();
          cy.validateIfContactWasNotFound(contact);
        });
      });
    });
  });
});
