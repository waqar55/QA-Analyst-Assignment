const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    experimentalSessionAndOrigin: false,
    specPattern: 'cypress/integration/*.js'
  },
  defaultCommandTimeout: 60000,
  env:{
    url: 'https://www.amazon.com/',
    Usernane: '',  //please enter username here
    Password: ''       //please enter password here
  }
})