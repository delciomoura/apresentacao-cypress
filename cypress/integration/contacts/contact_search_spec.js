/// <reference path="../../support/index.d.ts" />
import { user, contact } from "../../support/payload";
import notices from "../../fixtures/parameters.json";
const { contactNotRegistered } = notices.parameters || {};
const { expectNotice } = notices.message || {};

describe('Realizar busca por contato', () => {

    before(() => {
        cy.requestCreateUserAndLogin(user)
        cy.saveLocalStorage()
    });

    describe(`Dado que tenho o seguinte contato ${contact.name}`, () => {
        
        before(() => {
            cy.requestcreateContact(contact)
        });

        it('Quando faço a busca deste contato', () => {
            cy.visitDashboard()
            cy.searchContact(contact.number)
            cy.validateFinishedLoading()
        });

        it('Então somente este contato deve ser exibido no dashboard', () => {
            cy.validationOnlyOneContactDisplayed(contact)
        });
    });

    context('Quando busco por um contato não cadastrado', () => {
        
        before(() => {
            cy.restoreLocalStorage()
            cy.visitDashboard()
            cy.searchContact(contactNotRegistered)
        });

        it(`Então a mensagem "${expectNotice}" deve ser exibida`, () => {
            cy.emptyListValidation()
        });
    });
});
