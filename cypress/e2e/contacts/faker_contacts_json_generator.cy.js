/// <reference path="../../support/index.d.ts" />
describe ('faker contacts json generator',() => {
    describe('Dado que gero um arquivo JSON com os contatos',() => {
        before(() => {
            cy.generateFixture();
        });    
    
        it('Então o arquivo deve ser gerado com sucesso',() => {
            cy.validateFileCreation();
        });
    });
});