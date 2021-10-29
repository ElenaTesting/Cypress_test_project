// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



Cypress.Commands.add('iteratingThroughAnArray1',() => {
    let counter1 = 0
        cy.get('.match-preview__teams').each(($el) => {
            //and get array links to event
            cy.wrap($el).get('.match-preview__teams').each(($element) => { 
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
Cypress.Commands.add('iteratingThroughAnArray2',() => {
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
                    