/// <reference path="../../support/index.d.ts" />
import { user, contact } from "../../support/payload";

describe('contact talk', () => {
    describe('Iniciar uma conversa com um contato', () => {
        before(() => {
            cy.requestCreateUserAndLogin(user)
        });

        describe(`Dado que ${contact.name} é o contato desejado`, () => {
            before(() => {
                cy.requestCreateContact(contact)
            });

            it('Quando acesso o dashboard', () => {
                cy.visitDashboard()
            });

            it('Devo ver a propriedade href com o link do whatsapp web', () => {
                cy.externalLinkValidation(contact)
            });
        });
    });
});