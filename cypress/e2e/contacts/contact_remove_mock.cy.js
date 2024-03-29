/// <reference path="../../support/index.d.ts" />
import { contact } from "../../support/payload";

describe('contact remove mock', () => {
    describe('Remoção de um contato', () => {
        beforeEach(() => {
            cy.restoreLocalStorage();
            cy.exception();
        });

        it(`Dado que ${contact.name} é o contato que será deletado`, () => {
            cy.doLogin('delcio@delcio.com', 'delcio123');
            cy.saveLocalStorage();
        });

        it('Quando apago esse contato', () => {
            cy.intercept('GET', 'http://localhost:3000/contacts', {
                statusCode: 200,
                body: [
                    {
                        "_id": "62862d5c58321a9ab78c3534",
                        "name": contact.name,
                        "number": contact.number,
                        "description": contact.description,
                        "userId": "61a411db08947c49e809e098", "__v": 0
                    }
                ]
            });
            cy.intercept('DELETE', 'http://localhost:3000/contacts/62862d5c58321a9ab78c3534', {
                statusCode: 204
            });
            cy.visitDashboard();
            cy.removeContact(contact.number);
        });

        it('Então o mesmo não deve ser exibido no dashboard', () => {
            cy.visitDashboard();
            cy.intercept('GET', 'http://localhost:3000/contacts', {
                statusCode: 200,
                body: []
            });
            cy.validateIfContactWasNotFound(contact);
        });
    });
});
