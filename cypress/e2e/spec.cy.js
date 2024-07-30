describe('DM', () => {
  it('signup', () => {
    cy.visit('https://www.dm.cz/')

    cy.get('button[aria-label="Moje konto"]')
      .click()

    cy.get('a[data-dmid="registration-button"]')
      .click()

    cy.getByData('salutation-radio-button-field-FRAU-label')
      .click()
    
    cy.getByData('firstName-label')
      .click()
      .type('Test')

    cy.getByData('lastName-label')
      .click()
      .type('Registrace')

    cy.getByData('birthDate-date-input-day')
      .click()
      .type(2)

    cy.getByData('birthDate-date-input-month')
      .click()
      .type(10)

    cy.getByData('birthDate-date-input-year')
      .click()
      .type(1995)

    cy.getByData('emailAddress-label')
      .click()
      .type('testregistrace@seznam.cz')

    cy.getByData('password-label')
      .click()
      .type('testregistrace123')

    cy.getByData('acceptNewsletter-input')
      .click()

    cy.getByData('submitButton')
      .click()


  })

  it.only('login', () => {
    cy.visit('https://www.dm.cz/')

    cy.get('button[aria-label="Moje konto"]')
      .click()

    cy.getByData('login-button')
      .click()

    cy.getByData('emailAddress-label')
      .click()
      .type('testregistrace@seznam.cz')

    cy.getByData('password-input-label')
      .click()
      .type('testregistrace123')

    cy.getByData('login-button')
      .click()
     
  })
})