Cypress.Commands.add("validateIfContactWasNotFound", (contact) => {
    cy.getContact(contact.number).should('not.exist');
});

Cypress.Commands.add("validateIfContactIsInList", (contact) => {
    cy.contactList().contains(contact.name);
});

Cypress.Commands.add("expectNoticeName", (notice) => {
    cy.alertName().contains(notice);
});

Cypress.Commands.add("expectNoticePhone", (notice) => {
    cy.alertNumber().contains(notice);
});

Cypress.Commands.add("expectNoticeDescription", (notice) => {
    cy.alertDesc().contains(notice);
});

Cypress.Commands.add("validateFinishedLoading", () => {
    cy.loader().should('not.exist');
});

Cypress.Commands.add("validationOnlyOneContactDisplayed", (contact) => {
    cy.get('.card').should('have.length', 1);
    cy.get('.card').contains(contact.name);
    cy.get('.card').contains(contact.description);
});

Cypress.Commands.add("emptyListValidation", () => {
    cy.messageBody().contains('Contato não encontrado :(')
});

Cypress.Commands.add("externalLinkValidation", (contact) => {
    const externalLink = `https://api.whatsapp.com/send?phone=55${contact.number}`
    cy.hrefNumber(contact.number).should('have.attr', 'href', externalLink);
});

Cypress.Commands.add("dashboardValidation", () => {
    cy.contains('h4', 'Seu gerenciador digital de contatos').should('be.visible');
});

Cypress.Commands.add('validateFileCreation', () => {
    if (cy.readFile('cypress/fixtures/contacts.json')){
       cy.log('Gerado com sucesso');
   }
 });