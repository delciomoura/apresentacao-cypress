/// <reference path="../../support/index.d.ts" />
import { user, contact, contactWithoutPhone, contactWithoutDescription, unNamedContact } from "../../support/payload";
import notices from "../../fixtures/parameters.json";
const { expectNoticeName, expectNoticePhone, expectNoticeDescription } = notices.message || {};

describe('contact save', () => {
    describe('Realizar cadastro de contatos', () => {
        beforeEach(() => {
            cy.restoreLocalStorage();
        });

        it('Dado que submeto um cadastro preenchendo todos os dados necessários', () => {
            cy.requestCreateUserAndLogin(user);
            cy.visitDashboard();
            cy.createContact(contact);
            cy.saveLocalStorage();
        });

        it('Então esse contato deve ser cadastrado', () => {
            cy.visitDashboard();
            cy.validateIfContactIsInList(contact);
        });

        it('Quando submeto um cadastro sem nome', () => {
            cy.visitDashboard();
            cy.createContact(unNamedContact);
            context(`Então a notificação "${expectNoticeName}" deve ser exibida`,() => {
                cy.expectNoticeName(expectNoticeName);
            });
        });

        it('Quando submeto um cadastro sem número do whatsapp', () => {
            cy.visitDashboard();
            cy.createContact(contactWithoutPhone);
            context(`Então a notificação "${expectNoticePhone}" deve ser exibida`,() => {
                cy.expectNoticePhone(expectNoticePhone);
            });
        });

        it('Quando submeto um cadastro sem assunto', () => {
            cy.visitDashboard();
            cy.createContact(contactWithoutDescription);
            context(`Então a notificação "${expectNoticeDescription}" deve ser exibida`,() => {
                cy.expectNoticeDescription(expectNoticeDescription);
            });
        });

        it('Quando submeto um cadastro sem nenhum dado', () => {
            cy.visitDashboard();
            cy.clickAddNewContactButton();
            cy.clickSaveButton();
            context(`Então três notificações devem ser exibidas`,() => {
                cy.expectNoticeName(expectNoticeName);
                cy.expectNoticePhone(expectNoticePhone);
                cy.expectNoticeDescription(expectNoticeDescription);
            });
        });
    });
});