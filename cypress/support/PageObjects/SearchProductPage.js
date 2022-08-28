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
      return cy.get('.a-price')
   }
}
export default SearchProductPage;

