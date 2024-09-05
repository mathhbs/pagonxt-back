import Tokenization from '../support/pojos/Tokenization';
import '../support/commands';


describe('Tokenization API Tests', () => {

  it('validar a tokenização com dados válidos', () => {
    cy.authenticate().then((token) => {
      const tokenization = new Tokenization('5155901222280001', 'JOAO DA SILVA', '12', '24', '123');
      cy.request(tokenization.getTokenizationOptions(token)).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property('number_token');
      });
    });
  });

  it('Validar campos obrigatórios', () => {
    cy.authenticate().then((token) => {
      const tokenization = new Tokenization('', '', '', '', '');
      cy.request({
        ...tokenization.getTokenizationOptions(token),
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(400);
        expect(response.body).to.have.property('message'); 
        expect(response.body).to.have.property('name'); 
        expect(response.body).to.have.property('status_code'); 
        expect(response.body).to.have.property('details'); 
        expect(response.body.details).to.be.an('array');
      });
    });
  });
  
  it('Validar o esquema do contrato', () => {
    cy.authenticate().then((token) => {
      const tokenization = new Tokenization('5155901222280001', 'JOAO DA SILVA', '12', '24', '123');
      cy.request(tokenization.getTokenizationOptions(token)).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body).to.have.all.keys('number_token');
        expect(response.body.number_token).to.be.a('string');
      });
    });
  });
});
