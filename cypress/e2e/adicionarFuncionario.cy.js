describe('Adicionar Funcionário', () => {
  it('Deve preencher os dados do funcionário e validar inserção na lista de funcionários', () => {
    const nomeFuncionario = 'Bianca Silva';

    cy.intercept('GET', '**/employees').as('getEmployees');

    cy.visit('/');
    cy.wait('@getEmployees');

    cy.contains('button', '+ Adicionar Funcionário').click();
    cy.contains('Adicionar Funcionário').should('be.visible');

    cy.get('.ant-switch')
      .click({ force: true })
      .should('have.class', 'ant-switch-checked');

    cy.get('input[name="name"]').type(nomeFuncionario);
    cy.get('input[type="radio"][value="feminino"]').check({ force: true });
    cy.get('input[name="cpf"]').type('13803390494');
    cy.get('input[name="rg"]').type('319774193');
    cy.get('input[name="birthDay"]').type('2000-02-20');

    cy.get('label').contains('Cargo')
      .parent().find('.ant-select-selector').click();

    cy.get('.ant-select-dropdown:not(.ant-select-dropdown-hidden)')
      .find('div[role="option"]').contains('Cargo 01')
      .click({ force: true });

    cy.get('label').contains('Cargo')
      .parent().find('.ant-select-selection-item')
      .should('contain.text', 'Cargo 01');

    cy.contains('label', 'Selecione a atividade')
      .parent().find('.ant-select-selection-item')
      .should('contain.text', 'Ativid 01');

    cy.get('.ant-select-selection-item')
      .contains('Capacete de segurança').click();

    cy.get('input[name="caNumber"]').type('62');
    cy.get('span.addEPI').click();

    cy.get('input[type="file"]').selectFile('cypress/fixtures/Atestado.pdf', { force: true });

    cy.intercept('POST', '**/employees').as('postEmployee');

    cy.get('button.save').should('be.visible').click();

    cy.wait('@postEmployee').its('response.statusCode').should('eq', 201);
    cy.wait('@getEmployees');

    cy.get('.c-bXqUbA')
      .contains('span', nomeFuncionario)
      .should('exist');
  });
});
