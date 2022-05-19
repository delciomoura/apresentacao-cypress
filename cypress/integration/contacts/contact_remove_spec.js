/// <reference path="../../support/index.d.ts" />
import { user, contact } from "../../support/payload";


describe('Remoção de um contato', () => {

    before(() => {
        cy.requestCreateUserAndLogin(user)
    });

    describe(`Dado que ${contact.name} é o contato que será deletado`, () => {
        
        before(() => {
            cy.requestcreateContact(contact)
        });

        it('Quando apago esse contato', () => {
            cy.visitDashboard()
            cy.removeContact(contact.number)
        });

        it('Então o mesmo não deve ser exibido no dashboard', () => {
            cy.validateIfContactWasNotFound(contact)
        });
    });
});
