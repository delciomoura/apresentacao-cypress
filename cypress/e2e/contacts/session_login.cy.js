/// <reference path="../../support/index.d.ts" />
import { contact, contactWithoutPhone, contactWithoutDescription, unNamedContact  } from "../../support/payload";
import notices from "../../fixtures/parameters.json";
const { expectNoticeName, expectNoticePhone, expectNoticeDescription } = notices.message || {};
const email = 'junior@delcio.com.br'
const senha = 'delcio123'

describe('cy session', () => {
    describe('exemplos de utilização doLogin cy session', () => {
        beforeEach(() => {
            // cy.session([email, senha],() => {
            //     cy.visit('http://localhost:8080/')
            //     cy.get('input[name=email]').type(email)
            //     cy.get('input[name=password]').type(senha)
            //     cy.get('#sigIn').click()
            //     cy.get('h4').contains('Seu gerenciador digital de contatos')
            // })
        })
        
        it(`Removendo um contato`, () => {
            cy.doLogin(email, senha);
            cy.visitDashboard();
            cy.createContact(contact);
            cy.removeContact(contact.number);
            cy.validateIfContactWasNotFound(contact);
        });

        it(`Criando um contato com todos os dados`, () => {
            cy.doLogin(email, senha);
            cy.visitDashboard();
            cy.createContact(contact);
            cy.validateIfContactIsInList(contact);
            cy.removeContact(contact.number);
        });

        it('Criando contato sem nome', () => {
            cy.doLogin(email, senha);
            cy.visitDashboard();
            cy.createContact(unNamedContact);
            cy.expectNoticeName(expectNoticeName);
        });

        it('Criando um contato sem número de whatsapp', () => {
            cy.doLogin(email, senha);
            cy.visitDashboard();
            cy.createContact(contactWithoutPhone);
            cy.expectNoticePhone(expectNoticePhone);
        });

        it('Criando um contato sem assunto', () => {
            cy.doLogin(email, senha);
            cy.visitDashboard();
            cy.createContact(contactWithoutDescription);
            cy.expectNoticeDescription(expectNoticeDescription);
        });

        it('Criando um contato sem preencher nenhuma informação', () => {
            cy.doLogin(email, senha);
            cy.visitDashboard();
            cy.clickAddNewContactButton();
            cy.clickSaveButton();
            cy.expectNoticeName(expectNoticeName);
            cy.expectNoticePhone(expectNoticePhone);
            cy.expectNoticeDescription(expectNoticeDescription);
        });
    });
});
