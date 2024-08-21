const menuItems = [
    { title: 'Nové', href: '/nove' },
    { title: 'Značky', href: '/znacky' },
    { title: 'Líčení', href: '/dekorativni-kosmetika' },
    { title: 'Pleť, tělo & parfémy', href: '/pece-o-plet-a-telo' },
    { title: "Men's World", href: '/panska-kosmetika' },
    { title: 'Vlasová kosmetika', href: '/vlasova-kosmetika' },
    { title: 'Péče o zdraví', href: '/pece-o-zdravi' },
    { title: 'Výživa', href: '/vyziva' },
    { title: 'Péče o dítě', href: '/pece-o-dite' },
    { title: 'Domácnost', href: '/domacnost' },
    { title: 'Zvířata', href: '/zvirata' },
    { title: 'Foto', href: '/foto' },
    { title: 'dmLIVE', href: '/services/zakaznicky-program-servis/dm-live' },
];

describe('Menu Navigation', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should navigate to the correct URLs when clicking menu buttons', () => {
        cy.wrap(menuItems).each((menuItem) => {
            cy.getByData('main-navigation-container')
                .contains(menuItem.title)
                .should('be.visible')
                .click()

            cy.url()
                .should('include', menuItem.href);

        });
    });
});