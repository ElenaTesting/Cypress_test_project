///<reference types='Cypress'/>

describe('Матчи из турнирных таблиц', () => {
    beforeEach(() => {
        cy.visit('https://odds.ru/football/tournaments/') 
      }) 
          
 it('Европа. Чемпионат мира. Квалификация, УЕФА', () => {      
    cy.get(':nth-child(7) > .league-link').click()           
    cy.iteratingThroughAnArray1()
    })
it('Европа. Суперкубок УЕФА', () => {      
    cy.get(':nth-child(8) > .league-link').click()           
    cy.iteratingThroughAnArray1()
     })
it('Россия. Премьер-Лига', () => {     
    cy.get(':nth-child(9) > .league-link').click()           
    cy.iteratingThroughAnArray1()
    })

})