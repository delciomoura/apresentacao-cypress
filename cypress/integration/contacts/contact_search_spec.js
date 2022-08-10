/// <reference path="../../support/index.d.ts" />
import { user, contact } from "../../support/payload";
import notices from "../../fixtures/parameters.json";
const { contactNotRegistered } = notices.parameters || {};
const { expectNotice } = notices.message || {};

describe('contact search', () => {
    describe('Realizar busca por contato', () => {
        beforeEach(() => {
            cy.restoreLocalStorage();
        });

        it(`Dado que tenho o seguinte contato ${contact.name}`, () => {
            cy.requestCreateUserAndLogin(user);
            cy.requestCreateContact(contact);
            cy.saveLocalStorage();
        });

        it('Quando faço a busca deste contato', () => {
            cy.visitDashboard();
            cy.searchContact(contact.number);
            cy.validateFinishedLoading();
        });

        it('Então somente este contato deve ser exibido no dashboard', () => {
            cy.validationOnlyOneContactDisplayed(contact);
        });

        it('Quando busco por um contato não cadastrado', () => {
            cy.visitDashboard();
            cy.searchContact(contactNotRegistered);
        });

        it(`Então a mensagem "${expectNotice}" deve ser exibida`, () => {
            cy.emptyListValidation();
        });
    });
});

