/// <reference path="../../support/index.d.ts" />
import { user, contact } from "../../support/payload";

describe('contact remove', () => {
    describe('Remoção de um contato', () => {
        beforeEach (() => {
            cy.restoreLocalStorage();
        });

        it(`Dado que ${contact.name} é o contato que será deletado`, () => {
            cy.requestCreateUserAndLogin(user);
            cy.requestCreateContact(contact);
            cy.saveLocalStorage()
        });

        it('Quando apago esse contato', () => {
            cy.visitDashboard();
            cy.removeContact(contact.number);
        });

        it('Então o mesmo não deve ser exibido no dashboard', () => {
            cy.validateIfContactWasNotFound(contact);
        });

    });
});
