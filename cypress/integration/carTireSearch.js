describe('Search car tire', () => {
    

    it('Search of selected tires', ()=>{
        cy.visit('https://intercars.com.pl/')
        Cypress.on('uncaught:exception', (err) => {
            if (err.message.includes('parent.$ is not a function')) {
              return false
            }        
          })
        cy.get('#assortment-menu-link').click()
        cy.get('.assortment-item-desc').contains('Opony').click()
        cy.get('#id_cf_szerokosc-button').click()        
        cy.get('[role="presentation"]').contains('225').click()
        cy.get('#id_cf_profil').select('45', {force: true})
        cy.get('#id_cf_srednica').select(`19"`, {force: true})
        cy.get('#selector-cf_przeznaczenie').select('samochody osobowe/SUV/crossover', {force: true})
        cy.get('#selector-cf_sezon').select('letnia', {force: true})
        cy.get('button').contains('Szukaj opon').click()
    })
})