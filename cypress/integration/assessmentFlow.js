/// <reference types="Cypress" />
import SigninPage from '../support/PageObjects/SigninPage'
import SearchProductPage from '../support/PageObjects/SearchProductPage'
import CartPage from '../support/PageObjects/CartPage'
import ProceedtoCheckOutPage from '../support/PageObjects/ProceedtoCheckOutPage'


const SigninPg = new SigninPage() 
const SearchProductPg = new SearchProductPage()
const CartPg = new CartPage()
const ProceedtoCheckOutPg = new ProceedtoCheckOutPage()


describe('Amazon Test Case', function()
{
  
        

it('Login', function()
{
    cy.visit(Cypress.env('url')) //Hit URL
    SigninPg.signinBtn().click({force:true}) //Click Sign In button
    SigninPg.emailField().type(Cypress.env('Usernane')) //Add UserName
    SigninPg.continueBtn().click() //Click Continue to Password
    SigninPg.passwordField().type(Cypress.env('Password'),{log:false}) //Add Password
    SigninPg.submitBtn().click() //Submit Sign In
    cy.get(this.value.assertionSignUP).should('not.have.text','Hello, Sign in') //Assertion for SignIn
})



  it('Search Product', function()
    {
     
      SearchProductPg.productField().type(this.value.Item) //Search Product
      SearchProductPg.searchBtn().click() //Click on search
      cy.get(this.value.assertionSearchProduct).should('include.text',this.value.Item) //Assertion to check the search product is visible
      SearchProductPg.buyBoxProductsBtn().eq(0).click()
      cy.get(this.value.assertionSelectProduct).should('be.visible') //Assertion for the selected product
    })
    


   
  it('Add Product to Cart', function()
    {
    CartPg.addtoCartBtn().click() //Click Add to Cart
    cy.get(this.value.assertionAddtoCart).should('not.have.text','0') //Assertion for cart is not Empty
  })
 



it('Proceed to Checkout', function()
  {
    ProceedtoCheckOutPg.cartIcon().click({force:true}) //ClickCartIcon
    ProceedtoCheckOutPg.checkoutBtn().click() //Click on Proceed to Checkout
    cy.get(this.value.assertionProceedtoShipping).should('have.text','Add a new address') //Assertion
})
})



