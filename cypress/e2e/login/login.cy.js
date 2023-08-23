import { user } from "../../support/payload";
import notices from "../../fixtures/parameters.json";
const { expectMessage, expectMessageEmail, expectMessagePassword } = notices.message || {};
const { wrongPassword, emptyEmail, emptyPassword } = notices.parameters || {};

describe('login', () => {    
    describe('Realizar login', () => {
        before(() => {
            cy.requestCreateUser(user)
        });

        context('Dado que submeto credenciais validas', () => {
            before(() => {
                cy.doLogin(user.email, user.password)
            });

            it('Então o usuário deve ser direcionado para área logada', () => {
                cy.dashboardValidation()
            });
        });

        context('Quando submeto uma senha incorreta', () => {
            before(() => {
                cy.doLogin(user.email, wrongPassword)
            });

            it(`Então a notificação "${expectMessage}" deve ser exibida`, () => {
                cy.loginAlert(expectMessage).should('be.visible')
            });
        });

        context('Quando não informo o email', () => {
            before(() => {
                cy.doLogin(emptyEmail, wrongPassword)
            });

            it(`Então a notificação "${expectMessageEmail}" deve ser exibida`, () => {
                cy.loginAlert(expectMessageEmail).should('be.visible')
            });
        });

        context('Quando não informo a senha', () => {
            before(() => {
                cy.doLogin(user.email, emptyPassword)
            });

            it(`Então a notificação "${expectMessagePassword}" deve ser exibida`, () => {
                cy.loginAlert(expectMessagePassword).should('be.visible')
            });
        });
    });
});