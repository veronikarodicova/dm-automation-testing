const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        log(message) {
          console.log(message);
          return null;
        },
      });
    },
    baseUrl: "https://www.dm.cz/"
  },
  viewportWidth: 1280,
  viewportHeight: 720,
});
