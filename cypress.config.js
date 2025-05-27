const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://analista-teste.seatecnologia.com.br',
    setupNodeEvents(on, config) {
    },
  },
});
