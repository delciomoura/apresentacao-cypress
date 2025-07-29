import { user } from "../../support/payload";
import notices from "../../fixtures/parameters.json";

describe("login", () => {
  describe("Login", () => {
    before(() => {
      cy.requestCreateUser(user);
    });

    context("Given that I submit valid credentials", () => {
      before(() => {
        cy.doLogin(user.email, user.password);
      });

      it("Then the user should be directed to the logged in area", () => {
        cy.dashboardValidation();
      });
    });

    context("When I submit an incorrect password", () => {
      before(() => {
        cy.doLogin(user.email, notices.parameters.wrongPassword);
      });

      it(`Then the notification "${notices.message.expectMessage}" must be displayed`, () => {
        cy.loginAlert(notices.message.expectMessage).should("be.visible");
      });
    });

    context("When I don't provide the email", () => {
      before(() => {
        cy.doLogin(
          notices.parameters.emptyEmail,
          notices.parameters.wrongPassword
        );
      });

      it(`Then the notification "${notices.message.expectMessageEmail}" must be displayed`, () => {
        cy.loginAlert(notices.message.expectMessageEmail).should("be.visible");
      });
    });

    context("When I don't enter the password", () => {
      before(() => {
        cy.doLogin(user.email, notices.parameters.emptyPassword);
      });

      it(`Then the notification "${notices.message.expectMessagePassword}" must be displayed`, () => {
        cy.loginAlert(notices.message.expectMessagePassword).should(
          "be.visible"
        );
      });
    });
  });
});
