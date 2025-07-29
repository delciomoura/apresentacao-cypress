describe ('faker contacts json generator',() => {
    describe('Given that I generate a JSON file with the contacts',() => {
        before(() => {
            cy.generateFixture();
        });    
    
        it('Then the file should be generated successfully',() => {
            cy.validateFileCreation();
        });
    });
});