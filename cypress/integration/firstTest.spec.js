///<reference types='Cypress'/>

describe('ODDS', () => {

    it( 'Index page', () => {
        //Get INDEX page
        cy.visit('/')
        //Check content include
        cy.contains('Матч-центр')

        //check sport containers
        let counter = 0
        cy.get('.sports-menu__item_football > span').each(($el) => {
            //and get array links to event
            cy.wrap($el).get('.table-tournaments__team-content').each(($element) => {
                //get href
                cy.wrap($element).invoke('attr', 'href')
                    .then((href_val) => {
                        //visit 7 urls
                        if (counter < 7) {
                            cy.request({url: href_val}).then((response) => {
                                  expect(response.status).to.equal(200)
                            })

                            counter++
                        }
                })
            })
        })
    })
})


it('football matches page', () => {
    cy.visit('/')
    cy.get('.hamburger-box').click()
    cy.contains('Матч-центр').click()
    cy.request('https://odds.ru/football/')
    .should((response) => {
        expect(response.status).to.eq(200)
        })
})
