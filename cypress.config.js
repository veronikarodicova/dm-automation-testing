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

      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.name === 'chrome') {
          launchOptions.args.push('--lang=cs')
        }
        return launchOptions
      })
    },
    baseUrl: "https://www.dm.cz/"
  },
  viewportWidth: 1280,
  viewportHeight: 720,
});
