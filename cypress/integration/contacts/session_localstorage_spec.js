/// <reference path="../../support/index.d.ts" />
import { contact, contactWithoutPhone, contactWithoutDescription, unNamedContact  } from "../../support/payload";
import notices from "../../fixtures/parameters.json";
const { expectNoticeName, expectNoticePhone, expectNoticeDescription } = notices.message || {};
const email = 'junior@delcio.com.br'
const senha = 'delcio123'

describe('cy session', () => {
    describe('exemplos de utilização doLogin cy session', () => {
        beforeEach (() => {
            cy.exception();
            cy.restoreLocalStorage();
        });

        it(`Removendo um contato`, () => {
            cy.doLogin(email, senha);
            cy.visitDashboard();
            cy.createContact(contact);
            cy.removeContact(contact.number);
            cy.validateIfContactWasNotFound(contact);
            cy.saveLocalStorage();
        });

        it(`Criando um contato com todos os dados`, () => {
            cy.visitDashboard();
            cy.createContact(contact);
            cy.validateIfContactIsInList(contact);
            cy.removeContact(contact.number);
        });

        it('Criando contato sem nome', () => {
            cy.visitDashboard();
            cy.createContact(unNamedContact);
            cy.expectNoticeName(expectNoticeName);
        });

        it('Criando um contato sem número de whatsapp', () => {
            cy.visitDashboard();
            cy.createContact(contactWithoutPhone);
            cy.expectNoticePhone(expectNoticePhone);
        });

        it('Criando um contato sem assunto', () => {
            cy.visitDashboard();
            cy.createContact(contactWithoutDescription);
            cy.expectNoticeDescription(expectNoticeDescription);
        });

        it('Criando um contato sem preencher nenhuma informação', () => {
            cy.visitDashboard();
            cy.clickAddNewContactButton();
            cy.clickSaveButton();
            cy.expectNoticeName(expectNoticeName);
            cy.expectNoticePhone(expectNoticePhone);
            cy.expectNoticeDescription(expectNoticeDescription);
        });
    });
});
