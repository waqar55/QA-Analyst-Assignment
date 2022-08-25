class ProceedtoCheckOutPage
{
   cartIcon()
   {
      return cy.get('.nav-cart-icon')
   }
   checkoutBtn()
   {
    return cy.get('input[value="Proceed to checkout"]')
   }
  
}

export default ProceedtoCheckOutPage;
