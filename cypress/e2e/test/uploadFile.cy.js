describe('Google upload file', () => {
    beforeEach(() => {
        cy.visit('https://www.google.com/')
        
    })

        it('should upload file', () => {
            cy.get('body').then(($body) => {
            
                if ($body.find('div[role="none"]:contains("Přijmout vše")').length > 0) {
                
                    cy.get('div[role="none"]')
                        .contains('Přijmout vše')
                        .click();
                } else {
                    cy.log('Element not found, skipping test');
                }
            });
    

        cy.get('div[aria-label="Vyhledávání pomocí obrázku"]')
            .click()

        cy.get('input[type="file"][name="encoded_image"]')
            .selectFile('cypress/fixtures/cypresslogo.png', { force: true }) 

        //TODO odkaz na ověření
     })
})
