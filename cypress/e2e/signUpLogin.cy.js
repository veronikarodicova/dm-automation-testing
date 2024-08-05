describe('Sing up and login', () => { // TODO ne DM
  beforeEach(() => {
    cy.visit('/') 
  })

  it('signup', () => {

    cy.get('button[aria-label="Moje konto"]') 
      .click()

    cy.getByData('registration-button') 
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

  it('shows error if registration form filled out incorrectly', () => {

    cy.get('button[aria-label="Moje konto"]') 
      .click()

    cy.getByData('registration-button') 
      .should('be.visible')
      .click()

    cy.getByData('submitButton')
      .click()
    
    cy.wrap([
      'Vyberte si prosím oslovení.',
      'Zadejte, prosím, Vaše datum narození.',
      'Zadejte, prosím, Vaše jméno.',
      'Zadejte, prosím, Vaše příjmení.',
      'Zadejte platnou e-mailovou adresu.',
      'Zadejte, prosím, Vaše heslo.',
    ]).each((errorText) => {
        cy.getByData('dm-form')
          .should('contain', errorText)
      })
  })

  it('login', () => {
  
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