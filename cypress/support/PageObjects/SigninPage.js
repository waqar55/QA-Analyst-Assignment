class SigninPage
{
   signinBtn()
   {
      return cy.get('#nav-flyout-ya-signin .nav-action-inner')
   }
   emailField()
   {
    return cy.get('#ap_email')
   }
   continueBtn()
   {
    return cy.get('#continue')
   }
   passwordField()
   {
    return cy.get('#ap_password')
   }
   submitBtn()
   {
    return cy.get('#signInSubmit')
   }
}

export default SigninPage;