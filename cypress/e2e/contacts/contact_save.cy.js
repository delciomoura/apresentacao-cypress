import { user, contact } from "../../support/payload";
import notices from "../../fixtures/parameters.json";

describe("contact save", () => {
  describe("Register contacts", () => {
    beforeEach(() => {
      cy.restoreLocalStorage();
    });

    it("Given that I submit a registration filling in all the necessary data", () => {
      cy.requestCreateUserAndLogin(user);
      cy.visitDashboard();
      cy.createContact(contact);
      cy.saveLocalStorage();
    });

    it("Then this contact must be registered", () => {
      cy.visitDashboard();
      cy.validateIfContactIsInList(contact);
    });

    it("When I submit a registration without a name", () => {
      const { name, ...contactWithoutName } = contact;
      cy.visitDashboard();
      cy.createContact(contactWithoutName);
      context(
        `Then the notification "${notices.message.expectNoticeName}" must be displayed`,
        () => {
          cy.expectNoticeName(notices.message.expectNoticeName);
        }
      );
    });

    it("When I submit a registration without a WhatsApp number", () => {
      const { number, ...contactWithoutNumber } = contact;
      cy.visitDashboard();
      cy.createContact(contactWithoutNumber);
      context(
        `Then the notification "${notices.message.expectNoticePhone}" must be displayed`,
        () => {
          cy.expectNoticePhone(notices.message.expectNoticePhone);
        }
      );
    });

    it("When I submit a registration without a subject", () => {
      const { description, ...contactWithoutDescription } = contact;
      cy.visitDashboard();
      cy.createContact(contactWithoutDescription);
      context(
        `Then the notification "${notices.message.expectNoticeDescription}" must be displayed`,
        () => {
          cy.expectNoticeDescription(notices.message.expectNoticeDescription);
        }
      );
    });

    it("When I submit a registration without any data", () => {
      cy.visitDashboard();
      cy.clickAddNewContactButton();
      cy.clickSaveButton();
      context(`Then three notifications should be displayed`, () => {
        cy.expectNoticeName(notices.message.expectNoticeName);
        cy.expectNoticePhone(notices.message.expectNoticePhone);
        cy.expectNoticeDescription(notices.message.expectNoticeDescription);
      });
    });
  });
});
