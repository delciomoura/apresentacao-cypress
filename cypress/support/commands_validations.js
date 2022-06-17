Cypress.Commands.add("validateIfContactWasNotFound", (contact) => {
    return cy.getContact(contact.number).should('not.exist')
});

Cypress.Commands.add("validateIfContactIsInList", (contact) => {
    return cy.contactList().contains(contact.name)
});

Cypress.Commands.add("expectNoticeName", (notice) => {
    return cy.alertName().contains(notice)
});

Cypress.Commands.add("expectNoticePhone", (notice) => {
    return cy.alertNumber().contains(notice)
});

Cypress.Commands.add("expectNoticeDescription", (notice) => {
    return cy.alertDesc().contains(notice)
});

Cypress.Commands.add("validateFinishedLoading", () => {
    return cy.get('#loader', { timeout: 10000 }).should('not.exist')
});

Cypress.Commands.add("validationOnlyOneContactDisplayed", (contact) => {
    cy.get('.card').should('have.length', 1)
    cy.get('.card').contains(contact.name)
    cy.get('.card').contains(contact.description)
});

Cypress.Commands.add("emptyListValidation", () => {
    return cy.get('.message-body').contains('Contato não encontrado :(')
});

Cypress.Commands.add("externalLinkValidation", (contact) => {
    const externalLink = `https://api.whatsapp.com/send?phone=55${contact.number}`
    cy.get(`a[href$="${contact.number}"]`).should('have.attr', 'href', externalLink)
});

Cypress.Commands.add("dashboardValidation", () => {
    return cy.contains('h4', 'Seu gerenciador digital de contatos').should('be.visible')
});

Cypress.Commands.add('validateFileCreation', () => {
    if (cy.readFile('cypress/fixtures/contacts.json')){
       cy.log('Gerado com sucesso');
   }
 });