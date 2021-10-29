///<reference types='Cypress'/>

describe('Матчи из турнирных таблиц', () => {
    beforeEach(() => {
        cy.visit('https://odds.ru/football/tournaments/') 
      })    
      it('Лига Конференций УЕФА', () => {      
        cy.get(':nth-child(4) > .league-link').click()           
        cy.iteratingThroughAnArray1()
        })
    it('Лига наций УЕФА', () => {      
        cy.get(':nth-child(5) > .league-link').click()           
        cy.iteratingThroughAnArray1()
         })
    it('Чемпионат Европы. Квалификация', () => {      
        cy.get(':nth-child(6) > .league-link').click()           
        cy.iteratingThroughAnArray1()
        })
})