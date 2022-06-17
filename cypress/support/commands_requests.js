Cypress.Commands.add("requestCreateUser", (user) => {
    cy.request({
        method: 'POST',
        url: 'http://localhost:3000/user',
        headers: {'Content-Type': 'application/json'},
        body: user,
        //tratamento para contato cadastrado no banco, ignora o code e segue com os testes
        failOnStatusCode: false
    }).then((response) => {
        cy.log(JSON.stringify(response.body));
    });
});

Cypress.Commands.add("requestCreateUserAndLogin", (user) => {
    cy.request({
        method: 'POST',
        url: 'http://localhost:3000/user',
        headers: {'Content-Type': 'application/json'},
        body: user,
        //tratamento para contato cadastrado no banco, ignora o code e segue com os testes
        failOnStatusCode: false
    }).then((response) => {
        cy.log(JSON.stringify(response.body));
    });

    cy.doLogin(user.email, user.password)
    cy.get('.dashboard', {timeout: 5000}).should('be.visible')
});

Cypress.Commands.add("requestCreateContact", (contact) => {
    cy.request({
        method: 'POST',
        url: 'http://localhost:3000/contacts',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('user_token')
        },
        body: contact,
        //tratamento para contato cadastrado no banco, ignora o code e segue com os testes
        failOnStatusCode: false
    }).then((response) => {
        cy.log(JSON.stringify(response.body))
    });
});