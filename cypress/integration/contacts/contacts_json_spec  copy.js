/// <reference path="../../support/index.d.ts" />
import { user } from "../../support/payload";
const contact = require('../../fixtures/contacts.json')

describe('Fluxo remoção de vários contatos', () => {

    before(() => {
        cy.requestCreateUserAndLogin(user)
        cy.saveLocalStorage()
    });

    beforeEach(() => {
        cy.restoreLocalStorage()
    });

    describe(`Dado que foram criados vários contatos`, () => {

        contact.forEach(contacts => {

            before (() => {
                cy.requestcreateContact(contacts)
            });

            it(`Quando removo o contato ${contacts.name} com número ${contacts.number} e descrição ${contacts.description}`,() => {
                cy.visitDashboard()
                cy.removeContact(contacts.number) 
            });
        });

        it('Então todos os contatos serão removidos e não devem ser exibidos no dashboard', () => {
            cy.validateIfContactWasNotFound(contact)
        });
    });
});
