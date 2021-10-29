describe('ODDS', () => {

    it( 'Index page', () => {
        //Get INDEX page
        cy.visit('https://odds.ru/')
        //Check content include
        cy.contains('Матч-центр')

        //check sport containers
        let counter = 0
        cy.get('.sport-box').each(($el) => {
            //and get array links to event
            cy.wrap($el).get('.match-preview__teams').each(($element) => {
                //get href
                cy.wrap($element).invoke('attr', 'href')
                    .then((href_val) => {
                        //visit 4 urls
                        if (counter < 4) {
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