///<reference types='Cypress'/>

describe('Открытие матчей с главной страницы', () => {

    it( 'Футбольные матчи', () => {
        //Get INDEX page
        cy.visit('/')
        //check sport containers (football)
        let counter1 = 0
        cy.get('.main-component-tabs__content').each(($el) => {
            //and get array links to BK
            cy.wrap($el).get('a[href="/football/"').each(($element) => {
                cy.wrap($element).invoke('attr', 'href')
                .then((href_val) => {
                    //visit 4 urls
                    if (counter1 < 4) {
                        cy.request({url: href_val}).then((response) => {
                              expect(response.status).to.equal(200)
                        })

                        counter1++
                    }

             })
        })
    })
})
    
         it('Хоккейные матчи', () => {
            //Get INDEX page
            cy.visit('/')
            //Check content include
            let counter1 = 0
            cy.get('.main-component-tabs__content').each(($el) => {
                //and get array links to BK
                cy.wrap($el).get('a[href="/hockey/"').each(($element) => {
                    //get href
                    cy.wrap($element).invoke('attr', 'href')
                        .then((href_val) => {
                            //visit 4 urls
                            if (counter1 < 4) {
                                cy.request({url: href_val}).then((response) => {
                                      expect(response.status).to.equal(200)
                                })
    
                                counter1++
                            }
                    })
                })
            })
        })
        
             //check sport containers (basketball)
         it('Баскетбольные матчи', () => {
            //Get INDEX page
            cy.visit('/')
            //Check content include
            let counter1 = 0
            cy.get('.main-component-tabs__content').each(($el) => {
                //and get array links to BK
                cy.wrap($el).get('a[href="/basketball/"').each(($element) => {
                    //get href
                    cy.wrap($element).invoke('attr', 'href')
                        .then((href_val) => {
                            //visit 4 urls
                            if (counter1 < 4) {
                                cy.request({url: href_val}).then((response) => {
                                      expect(response.status).to.equal(200)
                                })
    
                                counter1++
                            }
                    })
                })
            })
        })
        //check sport containers (basketball)
        it.only('Ближайшие прогнозы на футбол', () => {
            //Get INDEX page
            cy.visit('/')
            //Check content include
            let counter1 = 0
            cy.get('.forecasts-posts').each(($el) => {
                //and get array links to BK
                cy.wrap($el).get('a[href="/football/forecasts/"').each(($element) => {
                    //get href
                    cy.wrap($element).invoke('attr', 'href')
                        .then((href_val) => {
                            //visit 4 urls
                            if (counter1 < 4) {
                                cy.request({url: href_val}).then((response) => {
                                      expect(response.status).to.equal(200)
                                })
    
                                counter1++
                            }
                    })
                })
            })
        })
    })




