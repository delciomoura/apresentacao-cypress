/// <reference path="../../support/index.d.ts" />
import { user } from "../../support/payload";
const { contacts } = require('../../fixtures/contacts.json')

describe('faker remove generated contacts', () => {
    describe('Remoção de vários contatos', () => {
        before(() => {
            cy.exception()
            cy.requestCreateUserAndLogin(user)
            cy.saveLocalStorage()
        });

        beforeEach(() => {
            cy.restoreLocalStorage()
        });

        describe(`Dado que foram criados vários contatos`, () => {
            contacts.map(contactsData => {
                before(() => {
                    cy.requestCreateContact(contactsData)
                });

                it(`Quando removo o contato ${contactsData.name} com número ${contactsData.number} e descrição ${contactsData.description}`, () => {
                    cy.visitDashboard()
                    cy.removeContact(contactsData.number)
                });
            });

            it('Então todos os contatos serão removidos e não devem ser exibidos no dashboard', () => {
                cy.validateIfContactWasNotFound(contacts)
            });
        });
    });
});
