import "cypress-localstorage-commands"

Cypress.Commands.add("createContact", (contact) => {
   cy.get('[data-cy=addNewContact]').click()
   if (contact.name) cy.get('[data-cy=name]').type(contact.name)
   if (contact.number) cy.get('[data-cy=number]').type(contact.number)
   if (contact.description) cy.get('[data-cy=description]').type(contact.description)
   cy.get('[data-cy=saveButton]').click()
});

Cypress.Commands.add("searchContact", (number) => {
   cy.get('.level-right input').type(number)
   cy.get('.level-right button.is-primary').click()
});

Cypress.Commands.add("getContact", (target) => {
   return cy.contains('.card', target)
});

Cypress.Commands.add("removeContact", (target) => {
   cy.getContact(target).find('[data-cy=btn-remove]').click()
});

Cypress.Commands.add("doLogin", (email, password) => {
   cy.visit('http://localhost:8080/')
   if (email) cy.get('input[name=email]').type(email)
   if (password) cy.get('input[name=password]').type(password)
   cy.get('#sigIn').click()
});

Cypress.Commands.add("loginAlert", (target) => {
   return cy.contains('.message-body', target)
});

Cypress.Commands.add("clickAddNewContactButton", () => {
   cy.get('[data-cy=addNewContact]').click()
});

Cypress.Commands.add("clickSaveButton", () => {
   cy.get('[data-cy=saveButton]').click()
});

Cypress.Commands.add('preserveSession', () => {
   Cypress.Cookies.preserveOnce('user_token');
});

Cypress.Commands.add('generateFixture', () => {
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