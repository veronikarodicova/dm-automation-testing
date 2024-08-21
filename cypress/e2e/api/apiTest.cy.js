

  describe('API Tests', () => {
    context('GET dm/znacky', () => {
      it('gets a list of brands', () => {
        cy.log('test znacky')

        cy.request('GET', 'https://dm.cz/znacky')
          .then((response) => {

            expect(response.status).to.eq(200);

            expect(response.body).to.exist

            expect(response.headers['content-type']).to.be.equal('text/html; charset=utf-8')
          });
      });
    });
  
    context('Check API Endpoints Accessibility', () => {
      const endpoints = [
        'https://dm.cz/',
        'https://dm.cz/znacky'
      ];
  
      endpoints.forEach((url) => {
        it(`checks that ${url} is accessible`, () => {
          cy.request({
            method: 'GET',
            url: url,
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).to.eq(200);
          });
        });
      });
    });
  });