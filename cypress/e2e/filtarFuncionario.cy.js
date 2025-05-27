
describe('Filtrar funcionários ativos', () => {
  it('Deve acessar o sistema e clicar no botão ver apenas ativos', () => {
    cy.visit('/');
    cy.contains('Funcionário(s)').should('be.visible');
    cy.contains('button', 'Ver apenas ativos')
      .should('be.visible')
      .click();

  });
});
