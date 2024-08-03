describe('Shopping cart', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('should add to shopping cart and display the correct price', () => {
  
        cy.getByData('search-input')
            .click()
            .type('pudr')
        
        cy.getByData('search-submit')
            .click()

        cy.getByData('product-tile-container')
            .eq(0)
            .should('be.visible')
            .as('productTile')
            .getByData('price-localized')
            .then((price) => {

                cy.get('@productTile')
                    .getByData('add-direct-to-cart-button')
                    .should('be.visible')
                    .and('not.be.disabled')
                    .click()

                cy.getByData('cart-summary-items')
                    .scrollIntoView()
                    .should('be.visible')
                    .and('have.text', 1)

                cy.getByData('cart-link')
                    .click()

                cy.getByData('total-price-container')
                    .getByData('dm-box')
                    .contains(price.text())
                    .should('be.visible')
                    

            })
    })
})