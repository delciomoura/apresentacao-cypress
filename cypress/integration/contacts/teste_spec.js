/// <reference types="cypress" />
import paramsCertificate from '../../fixtures/parametes.json'

const { userSeller, passwordSeller} = paramsCertificate.user || {} 
const { certificatePassword } = paramsCertificate.certificate || {}
const { expectMessageCertificateRegister, expectMessageCertificateAlreadyExists} =  paramsCertificate.message || {}

describe(`Dado que preciso cadastrar certificado`, () => {
    before(() => {
        cy.login( userSeller, passwordSeller)
    });

    it('Quando informo os dados para cadastrar o certificado do seller', () => {
        cy.certificateRegister(certificatePassword);
        cy.validateCertificateRegister(201);
        it(`Então a notificação "${expectMessageCertificateRegister}" deve ser exibida`, () => {
            cy.loginAlert(expectMessageCertificateRegister).should('be.visible')
        });
    });
    
    it('Quando seller já possui certificado cadastrado', () => {
        cy.certificateRegister(certificatePassword);
        cy.validateCertificateRegister(400);
        it(`Então a notificação "${expectMessageCertificateAlreadyExists}" deve ser exibida`, () => {
            cy.loginAlert(expectMessageCertificateAlreadyExists).should('be.visible')
        });
    });
});