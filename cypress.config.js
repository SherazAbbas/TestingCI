const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "g9uj31",
  reporter: 'cypress-mochawesome-reporter',   //for html report

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      this.screenshotOnRunFailure=true;
     require('cypress-mochawesome-reporter/plugin')(on)

    },
  },
});