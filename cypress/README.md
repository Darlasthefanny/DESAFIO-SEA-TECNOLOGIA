# 🚀 DESAFIO SEA TECNOLOGIA

Projeto de automação de testes end-to-end utilizando **Cypress**.

## 📑 Descrição

Este projeto tem como objetivo validar funcionalidades do sistema através de testes automatizados com Cypress. A automação cobre cenários críticos como:

- ✅ Cadastro de Funcionário
- ✅ Filtro/Pesquisa de Funcionário
- ✅ Upload de documentos (ex.: PDF na pasta `fixtures`)

---

## 🛠️ Tecnologias utilizadas

- ✅ [Cypress](https://www.cypress.io/) — Framework de testes E2E
- ✅ [Node.js](https://nodejs.org/) — Ambiente de execução JavaScript
- ✅ [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- ✅ [Yarn](https://yarnpkg.com/) ou [npm](https://www.npmjs.com/) — Gerenciador de pacotes

---
## 📂 Estrutura de Pastas

cypress/
├── e2e/ # Arquivos dos testes automatizados
│ ├── adicionarFuncionario.cy.js
│ └── filtrarFuncionario.cy.js
├── fixtures/ # Dados mockados (incluindo Atestado.pdf para upload)
│ └── Atestado.pdf
├── support/ # Suporte aos testes
│ ├── commands.js # Comandos customizados
│ └── e2e.js # Configurações globais dos testes
node_modules/ # Dependências do projeto
.gitignore # Arquivos e pastas ignoradas no Git
cypress.config.js # Configurações do Cypress
package.json # Dependências, scripts e configurações do projeto
README.md # Documentação do projeto

👨‍💻 Autor

Desenvolvido por @Darlasthefanny 🚀
