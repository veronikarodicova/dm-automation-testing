
describe('Store map', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should search the stores in proximity if you type in a city', () => {
       
        cy.getByData('dm-maps-marker')
            .parent()
            .should('be.visible')
            .click()

        cy.getByData('storefinder-search-search-input-field')
            .should('be.visible')
            .click()
            .type('Ostrava')
           
        cy.getByData('search-suggestion-highlighted-text')
            .contains('Ostrava, Moravskoslezský kraj, Česko')
            .click()

        cy.getByData('store-teaser-street')
            .contains('Rudná 3114/114')
            .should('be.visible')
            .parents('[data-dmid=store-teaser]')
            .as('searchResult')
            .contains('uložit prodejnu dm')
            .click()

        cy.get('@searchResult')
            .should('contain', 'prodejna dm uložena')

        });
    });
 