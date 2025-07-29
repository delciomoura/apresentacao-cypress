import { bodyContactMock } from "../../support/payload";

describe("contact remove mock", () => {
  describe("Test contact removal (Mock)", () => {
    beforeEach(() => {
      cy.restoreLocalStorage();
      cy.exception();
    });

    it(`Given that ${bodyContactMock.name} is the contact that will be deleted`, () => {
      cy.doLogin(Cypress.env("user"), Cypress.env("password"));
      cy.saveLocalStorage();
    });

    it("When I delete this contact", () => {
      cy.intercept("GET", `${Cypress.env("baseUrlBackEnd")}/contacts`, {
        statusCode: 200,
        body: [bodyContactMock],
      });
      cy.intercept(
        "DELETE",
        `${Cypress.env("baseUrlBackEnd")}/contacts/${bodyContactMock._id}`,
        {
          statusCode: 204,
        }
      );
      cy.visitDashboard();
      cy.removeContact(bodyContactMock.number);
    });

    it("Then it should no longer be displayed on the dashboard", () => {
      cy.visitDashboard();
      cy.intercept("GET", `${Cypress.env("baseUrlBackEnd")}/contacts`, {
        statusCode: 200,
        body: [],
      });
      cy.validateIfContactWasNotFound(bodyContactMock);
    });
  });
});
