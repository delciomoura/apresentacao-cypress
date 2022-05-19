/// <reference path="../../support/index.d.ts" />
import { user, contact, contactWithoutPhone, contactWithoutDescription, unNamedContact } from "../../support/payload";
import notices from "../../fixtures/parameters.json";
const { expectNoticeName, expectNoticePhone, expectNoticeDescription } = notices.message || {};

describe('Realizar cadastro de contatos', () => {

    before(() => {
        cy.requestCreateUserAndLogin(user)
        cy.saveLocalStorage()
    });

    describe('Cadastrando um novo contato', () => {

        describe('Dado que submeto um cadastro completo', () => {

            before(() => {
                cy.restoreLocalStorage()
                cy.visitDashboard()
                cy.createContact(contact)
            });

            it('Então esse contato deve ser cadastrado', () => {
                cy.validateIfContactIsInList(contact)
            });
        });

        describe('Quando submeto um cadastro sem nome', () => {

            before(() => {
                cy.restoreLocalStorage()
                cy.visitDashboard()
                cy.createContact(unNamedContact)
            });

            it(`Então a notificação "${expectNoticeName}" deve ser exibida`, () => {
                cy.expectNoticeName(expectNoticeName)
            });
        });

        describe('Quando submeto um cadastro sem número do whatsapp', () => {

            before(() => {
                cy.restoreLocalStorage()
                cy.visitDashboard()
                cy.createContact(contactWithoutPhone)
            });

            it(`Então a notificação "${expectNoticePhone}" deve ser exibida`, () => {
                cy.expectNoticePhone(expectNoticePhone)
            });
        });

        describe('Quando submeto um cadastro sem assunto', () => {

            before(() => {
                cy.restoreLocalStorage()
                cy.visitDashboard()
                cy.createContact(contactWithoutDescription)
            });

            it(`Então a notificação "${expectNoticeDescription}" deve ser exibida`, () => {
                cy.expectNoticeDescription(expectNoticeDescription)
            });
        });

        describe('Quando submeto um cadastro sem nenhum dado', () => {
            
            before(() => {
                cy.restoreLocalStorage()
                cy.visitDashboard()
                cy.clickAddNewContactButton()
                cy.clickSaveButton()
            });

            it('Então três notificações devem ser exibidas', () => {
                cy.expectNoticeName(expectNoticeName)
                cy.expectNoticePhone(expectNoticePhone)
                cy.expectNoticeDescription(expectNoticeDescription)
            });
        });
    });
});
