const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://www.dm.cz/"
  },
  viewportWidth: 1280,
  viewportHeight: 720,
});
