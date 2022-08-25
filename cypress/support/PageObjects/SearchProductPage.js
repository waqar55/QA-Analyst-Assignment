class SearchProductPage
{
   productField()
   {
      return cy.get('#twotabsearchtextbox')
   }
   searchBtn()
   {
    return cy.get('#nav-search-submit-button')
   }
   buyBoxProductsBtn()
   {
      return cy.get('.s-main-slot .sg-col-inner .s-list-col-right .sg-col-inner .sg-row .a-price-whole')
   }
   selProduct()
   {
     return cy.get('.s-main-slot .sg-col-inner .a-size-medium')
   }
}

export default SearchProductPage;

