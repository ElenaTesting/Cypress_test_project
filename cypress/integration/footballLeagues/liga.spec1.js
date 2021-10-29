///<reference types='Cypress'/>

describe('Матчи из турнирных таблиц', () => {
    beforeEach(() => {
        cy.visit('https://odds.ru/football/tournaments/') 
      })    
   
    it('Чемпионат Европы', () => {    
        cy.get(':nth-child(1) > .league-link').click()
        cy.iteratingThroughAnArray1()
           })
    it('Лига Чемпионов УЕФА', () => {             
        cy.get(':nth-child(2) > .league-link').click()           
        cy.iteratingThroughAnArray1()
        })
    it('Лига Европы', () => {      
        cy.get(':nth-child(3) > .league-link').click()           
        cy.iteratingThroughAnArray1()
            })
        })