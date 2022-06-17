/// <reference path="../../support/index.d.ts" />
import { user } from "../../support/payload";
import { contacts } from "../../support/array"

describe('contacts array map', () => {  
    describe('Fluxo remoção de vários contatos', () => {
        before(() => {
            cy.requestCreateUserAndLogin(user)
            cy.saveLocalStorage()
        });

        beforeEach(() => {
            cy.restoreLocalStorage()
        });

        describe(`Dado que foram criados vários contatos`, () => {
            contacts.map(contact => {
                before(() => {
                    cy.requestCreateContact(contact)
                });

                it(`Quando removo o contato ${contact.name} com número ${contact.number} e descrição ${contact.description}`, () => {
                    cy.visitDashboard()
                    cy.removeContact(contact.number)
                });
            });

            it('Então todos os contatos serão removidos e não devem ser exibidos no dashboard', () => {
                cy.validateIfContactWasNotFound(contacts)
            });
        });
    });
});