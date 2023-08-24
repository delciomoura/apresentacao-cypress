const { defineConfig } = require('cypress')

module.exports = defineConfig({
  experimentalSessionAndOrigin: true,
  reporter: 'mochawesome',
  watchForFileChanges: false,
  reporterOptions: {
    reportDir: 'mochawesome-report',
    overwrite: true,
    html: false,
    json: true,
    timestamp: 'mmddyyyy_hhmmss',
  },
  e2e: {
    baseUrl: 'http://localhost:8080',
    experimentalRunAllSpecs: true,
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})
