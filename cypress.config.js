const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  chromeWebSecurity: false,
  pageLoadTimeout: 60000,
  watchForFileChanges: false,
  execTimeout: 10000,
  env: {
    url: 'https://www.saucedemo.com/',
  },
  viewportHeight: 960,
  viewportWidth: 1600,
  e2e: {
    specPattern: 'cypress/e2e/*.{feature,features}',
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
      // implement node event listeners here
    },
  },
});
