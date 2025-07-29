Cypress.Commands.add("requestCreateUser", (user) => {
    cy.request({
        method: 'POST',
        url: `${Cypress.env("baseUrlBackEnd")}/user`,
        headers: {'Content-Type': 'application/json'},
        body: user,
        failOnStatusCode: false
    }).then((response) => {
        cy.log(JSON.stringify(response.body));
    });
});

Cypress.Commands.add("requestCreateUserAndLogin", (user) => {
    cy.request({
        method: 'POST',
        url: `${Cypress.env("baseUrlBackEnd")}/user`,
        headers: {'Content-Type': 'application/json'},
        body: user,
        failOnStatusCode: false
    }).then((response) => {
        cy.log(JSON.stringify(response.body));
    });

    cy.doLogin(user.email, user.password)
    cy.dashboard({timeout: 5000}).should('be.visible')
});

Cypress.Commands.add("requestCreateContact", (contact) => {
    cy.request({
        method: 'POST',
        url: `${Cypress.env("baseUrlBackEnd")}/contacts`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('user_token')
        },
        body: contact,
        failOnStatusCode: false
    }).then((response) => {
        cy.log(JSON.stringify(response.body))
    });
});