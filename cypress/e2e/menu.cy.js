describe('Menu', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    const menuItems = [
        { dmId: 'logo-link', url: '/' },
        { dmid: '', url: '/about' },
        { dmId: 'services', url: '/services' },
        { dmId: 'contact', url: '/contact' },
      ];

    it('should navigate to the correct URLs when clicking menu buttons', () => {
        cy.wrap(menuItems).each((menuItem) => {
          // Click the menu button
          cy.get(`[data-dmid="${menuItem.dmId}"]`).click();
    
          // Verify the URL
          cy.url().should('include', menuItem.url);
    
          // Optionally, navigate back to the home page before the next iteration
          cy.visit('/');
        })

      
    })
})