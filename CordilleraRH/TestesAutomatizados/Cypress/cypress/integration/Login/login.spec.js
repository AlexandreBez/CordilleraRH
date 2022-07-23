/// <reference types="cypress" />

describe("Login page", () => {
    
    beforeEach(() => {
        cy.visit('http://localhost:4200/')
    })

    it('Check if error message will exist', () => {

        cy.get('.modalAux')
            .should('not.exist');

        cy.get('#inputUsername')
            .type('teste@error.com')
            .should('have.value', 'teste@error.com');

        cy.get('#inputPassword')
            .type('tes')
            .should('have.value', 'tes');

        cy.get('#loginBtn').click();

        cy.get('.modalAux')
            .should('exist');

        cy.get('.modalAux > p')
            .should('have.text', 'Usuário e/ou senha incorreto.')

        cy.get('#btnClose').click();

    })
})