// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:

import './commands'

let cookiValues=Array(0)
let cookiesLength
let cookiesNames=Array(0)

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false
})

/*afterEach(() => {
  //Code to Handle the Sesssions in cypress.
  //Keep the Session alive when you jump to another test
  let str = [];
  cy.getCookies().then((cook) => {
    cy.log(cook);
    for (let l = 0; l < cook.length; l++) {
      if (cook.length > 0 && l == 0) {
        str[l] = cook[l].name;
        cy.log(str[l])
        Cypress.Cookies.preserveOnce(str[l]);
      } else if (cook.length > 1 && l > 1) {
        str[l] = cook[l].name;
        Cypress.Cookies.preserveOnce(str[l]);
      }
    }
  })
})*/

beforeEach(function(){
  cy.fixture('testData').then(function(data)
  {
    this.value=data
  })
  for(let l=0;l<cookiesLength-1;l++)
  {
    cy.setCookie(cookiesNames[l],cookiValues[l])
  }
  }) //Set Cookies and get values from json

afterEach(() => {
  //Code to Handle the Sesssions in cypress.
  //Keep the Session alive when you jump to another test
  cy.getCookies().then((cook) => {
    cy.log(cook);
    cookiesLength=cook.length
    for (let l = 0; l < cook.length; l++) {
      if (cook.length > 0) {
        cookiesNames.push(cook[l].name)
        cookiValues.push(cook[l].value)
      } 
    }
  })
}) // Get Cookies after each test
 


// Alternatively you can use CommonJS syntax:
// require('./commands')