describe('Google upload file', () => {
    beforeEach(() => {
        cy.visit('https://www.google.com/')
        
    })

    it('should upload file', () => {
        cy.get('div[role="none"]')
        .contains('Přijmout vše')
        .click()

        cy.get('div[aria-label="Vyhledávání pomocí obrázku"]')
        .click()

        cy.get('input[type="file"][name="encoded_image"]')
        .selectFile('cypress/fixtures/cypresslogo.png', { force: true })

            })
    })
