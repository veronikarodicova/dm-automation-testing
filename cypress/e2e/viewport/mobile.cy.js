
    describe('Mobile', () => {
        context('720p resolution', () => {
          beforeEach(() => {
            cy.viewport(1280, 720)
            cy.visit('/')
          })
      
          it('displays full header', () => {
            cy.getByData('desktop-navigation-items')
                .should('be.visible')
            cy.getByData('widget-container-menue-mobile')
                .should('not.be.visible')
          })
        })
      
        context('iphone-5 resolution', () => {
          beforeEach(() => {
            cy.viewport('iphone-5')
            cy.visit('/')
          })
      
          it('displays mobile menu on click', () => {
            cy.getByData('desktop-navigation-items')
                .should('not.be.visible')
            cy.getByData('widget-container-menue-mobile')
                .should('be.visible')
                .click()
                .getByData('off-canvas-root-level')
                .should('be.visible')
          })
        })
      })
  