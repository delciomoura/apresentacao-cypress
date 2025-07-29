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
  env: {
    baseUrlBackEnd: 'http://localhost:3000',
    linkApiWhatsapp: 'https://api.whatsapp.com/send?phone=55',
    user: 'junior@delcio.com.br',
    password: 'delcio123'
  },
  e2e: {
    baseUrl: 'http://localhost:8080',
    experimentalRunAllSpecs: true,
    setupNodeEvents(on, config) {
      
    },
  },
})
