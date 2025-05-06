const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports/mochawesome",
    overwrite: false,
    html: true,
    json: false,
    reportFilename: "Relatorio-api-Fakestore"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // eventos se necessário
    },
  },
});