/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject> {

        // ---------------------------------------------------- DOCUMENTATION REQUESTS ----------------------------------------------------
        /**
        * @example
        *  localizado em support/commands_request.js
        *  cy.request({
        *    method: 'POST',
        *    url: 'http://localhost:3000/user',
        *    headers: {'Content-Type': 'application/json'},
        *    body: user,
        *    failOnStatusCode: false
        *  }).then((response) => {
        *    cy.log(JSON.stringify(response.body));
        *  });
        *    cy.doLogin(user.email, user.password)
        *    cy.get('.dashboard', {timeout: 5000}).should('be.visible')
        *  });
        *  Cria um novo usuário via requisição post e faz o login
        */
        requestCreateUserAndLogin(): Chainable<any>
        /**
        * @example
        *  localizado em support/commands_request.js
        *  cy.request({
        *    method: 'POST',
        *    url: 'http://localhost:3000/contacts',
        *    headers: {
        *     'Content-Type': 'application/json',
        *     'Authorization': localStorage.getItem('user_token')
        *   },
        *   body: contact,
        *   failOnStatusCode: false
        *   }).then((response) => {
        *     cy.log(JSON.stringify(response.body))
        * });
        * Cria um novo contato via requisição post
        */
        requestCreateContact(): Chainable<any>

        // ---------------------------------------------------- DOCUMENTATION SELECTORS ----------------------------------------------------
        /**
        * @example
        *  localizado em support/commands_selectors.js
        *  cy.visit('/dashboard')
        *  Acessa o dashboard do sistema
        */
        visitDashboard(): Chainable<any>

        // ---------------------------------------------------- DOCUMENTATION VALIDATION ----------------------------------------------------
        /**
       * @example
       *  localizado em support/commands_validation.js
       *  return cy.getContact(contact.number).should('not.exist')
       *  Verifica se o contato não foi localizado na lista
       */
        validateIfContactWasNotFound(): Chainable<any>
        /**
        * @example
        *  localizado em support/commands.js
        *  Cypress.Commands.add('validateFileCreation', () => {
            if (cy.readFile('cypress/fixtures/contacts.json')){
                cy.log('Gerado com sucesso');
            }
        });
        * Verifica se o arquivo JSON foi gerado e exibe a mensagem 'Gerado com sucesso' no log
        */
        validateFileCreation(): Chainable<any>
        /**
        * @example
        *  localizado em support/commands.js
        *  Cypress.Commands.add("validateIfContactIsInList", (contact) => {
                return cy.contactList().contains(contact.name)
            });
        *  Valida se o contato existe na lista
        */
        validateIfContactIsInList(): Chainable<any>
        /**
        * @example
        *  localizado em support/commands_validation.js
        *  Cypress.Commands.add("expectNoticeName", (notice) => {
                return cy.alertName().contains(notice)
            });
        *  Valida se a mensagem foi exibida na tela
        */
        expectNoticeName(): Chainable<any>
        /**
        * @example
        *  localizado em support/commands_validation.js
        *  Cypress.Commands.add("expectNoticePhone", (notice) => {
                return cy.alertNumber().contains(notice)
            });
        *  Valida se a mensagem foi exibida na tela
        */
        expectNoticePhone(): Chainable<any>
        /**
        * @example
        *  localizado em support/commands_validation.js
        *  Cypress.Commands.add("expectNoticeDescription", (notice) => {
                return cy.alertDesc().contains(notice)
            });
        *  Valida se a mensagem foi exibida na tela
        */
        expectNoticeDescription(): Chainable<any>

        // ---------------------------------------------------- DOCUMENTATION COMMANDS ----------------------------------------------------
        /**
        * @example
        *  localizado em support/commands.js
        *  cy.getContact(target).find('[data-cy=btn-remove]').click()
        *  Encontra o contato e clica no botão "Apagar" removendo o mesmo
        */
        removeContact(): Chainable<any>
        /**
        * @example
        *  localizado em support/commands.js
        *  Cypress.Commands.add('generateFixture', () => {
            const faker = require('faker')
            cy.writeFile('cypress/fixtures/contacts.json', {
                'contacts': Cypress._.times(5, () => {
                    return {
                        'name': `${faker.name.firstName()} ${faker.name.lastName()}`,
                        'number': `${faker.phone.phoneNumber('(84) 9####-####')}`,
                        'description': `${faker.lorem.words(3)}`
                    }
                })
            });
        });
        * Gera um arquivo JSON com os contatos na pasta fixtures
        */
        generateFixture(): Chainable<any>
        /**
        * @example
        *  localizado em support/commands.js
        *  Cypress.Commands.add("restoreLocalStorage", () => {
                Object.keys(LOCAL_STORAGE_MEMORY).forEach(key => {
                    localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key]);
                });
            });
        *  Restaura o LocalStorage no navegador
        */
        restoreLocalStorage(): Chainable<any>
        /**
        * @example
        *  localizado em support/commands.js
        *  Cypress.Commands.add("saveLocalStorage", () => {
                Object.keys(localStorage).forEach(key => {
                    LOCAL_STORAGE_MEMORY[key] = localStorage[key];
                });
            });
        *  Salva o LocalStorage em um array
        */
        saveLocalStorage(): Chainable<any>
        /**
        * @example
        *  localizado em support/commands.js
        *  Cypress.Commands.add("createContact", (contact) => {
                cy.get('[data-cy=addNewContact]').click()
                if (contact.name) cy.get('[data-cy=name]').type(contact.name)
                if (contact.number) cy.get('[data-cy=number]').type(contact.number)
                if (contact.description) cy.get('[data-cy=description]').type(contact.description)
                cy.get('[data-cy=saveButton]').click()
            });
        *  Clica em adicionar novo contato, inseri as informações recebidas e clica em salvar.
        */
        createContact(): Chainable<any>
        /**
        * @example
        *  localizado em support/commands.js
        *  Cypress.Commands.add("clickAddNewContactButton", () => {
               cy.get('[data-cy=addNewContact]').click()
            });
        *  Clica no botão adicionar novo contato
        */
        clickAddNewContactButton(): Chainable<any>
        /**
        * @example
        *  localizado em support/commands.js
        *  Cypress.Commands.add("clickSaveButton", () => {
                cy.get('[data-cy=saveButton]').click()
            });
        *  Clica no botão salvar
        */
        clickSaveButton(): Chainable<any>
    }
}
