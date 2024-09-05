// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import Auth from '../support/pojos/Auth.js'; 

Cypress.Commands.add('authenticate', () => {
  // Instanciar a classe Auth com os IDs do cliente e segredo
  const auth = new Auth('67823c6d-58de-494f-96d9-86a4c22682cb', 'c2d6a06f-5f31-448b-9079-7e170e8536e4');
  
  // Fazer a requisição com as opções da autenticação
  return cy.request(auth.getAuthOptions()).then((response) => {
    // Verificar se a resposta tem o status 200
    expect(response.status).to.eq(200);
    
    // Retornar o token de acesso da resposta
    return response.body.access_token;
  });
});

