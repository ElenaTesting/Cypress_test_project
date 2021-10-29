///<reference types='Cypress'/>

describe('Index page', () => {
    beforeEach(() => {
        cy.visit('/') 
      })      
    it( 'Переходы на обзоры ТОП 5 БК', () => {
        //Check content include
        cy.contains('Матч-центр')

        //check TOP 5 BK
        let counter1 = 0
        cy.get('.widget-bookmakers-cards__list').each(($el) => {
            //and get array links to BK
            cy.wrap($el).get('.widget-bookmakers-card__footer > .btn_ligth-grey').each(($element) => {
                //get href
                cy.wrap($element).invoke('attr', 'href')
                    .then((href_val) => {
                        //visit 5 urls
                        if (counter1 < 5) {
                            cy.request({url: href_val}).then((response) => {
                                  expect(response.status).to.equal(200)                                  
                            })

                            counter1++
                        }
                })
            })
        })
    })
    it( 'Переходы на сайты ТОП 5 БК', () => {
        let counter2 = 0
        cy.get('.widget-bookmakers-cards__list').each(($el) => {
            //and get array links to BK
            cy.wrap($el).get('.widget-bookmakers-card__footer > .btn_green').each(($element) => {
                //get href
                cy.wrap($element).invoke('attr', 'href')
                    .then((href_val) => {
                        //visit 5 BK
                        if (counter2 < 5) {
                            cy.request({url: href_val}).then((response) => {
                                  expect(response.status).to.equal(200)
                            })

                            counter2++
                        }
                })
            })
        })
    })
})
it( 'Переход на станицу рейтинга', () => {
    cy.get('.widget-bookmakers-cards > .btn_link').click()
    cy.url().should('include', 'bookmakers')
})
