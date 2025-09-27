import {
    Given, And, When, Then
} from 'cypress-cucumber-preprocessor/steps';

import 'cypress-xpath';

Given("Eu acesso a página de autenticação", () => {
    cy.visit("https://www.saucedemo.com/");
});

And("Eu informo meu login", () => {
    cy.xpath('//*[@id="user-name"]').type("standard_user");
});

And("Eu informo minha senha", () => {
    cy.xpath('//*[@id="password"]').type("secret_sauce");
});

When("Eu solicito acesso ao sistema", () => {
    cy.xpath('//*[@id="login-button"]').click();
});

Then("Eu sou redirecionado para a área restrita", () => {
    cy.url().should("eq", "https://www.saucedemo.com/inventory.html");    
    cy.screenshot("Autenticar usuário com sucesso", { overwrite: true });
});

And("Eu informo um login inválido", () => {
    cy.xpath('//*[@id="user-name"]').type('usuario_invalido');
});

And("Eu informo uma senha inválida", () => {
    cy.xpath('//*[@id="password"]').type('senha_invalida');
});

Then("Eu recebo uma mensagem de erro informando que o acesso foi negado", () => {

    cy.xpath('//*[@id="login_button_container"]/div/form/div[3]/h3')
        .should('be.visible')
        .and('contain', 'Username and password do not match any user');
    
    cy.screenshot("Autenticar usuário com credenciais inválidas", { overwrite: true });
});

And("Eu não informo meu login e senha", () => {
    cy.xpath('//*[@id="user-name"]').clear();
    cy.xpath('//*[@id="password"]').clear();
});

Then("Eu recebo uma mensagem de erro informando que as credenciais são obrigatórias", () => {

    cy.xpath('//*[@id="login_button_container"]/div/form/div[3]/h3')
        .should('be.visible')
        .and('contain', 'Username is required');

    cy.screenshot("Autenticar usuário sem informar credenciais", { overwrite: true });
});