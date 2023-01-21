export default class HomePage {

    goToHomePage() {
        cy.visit('https://magento.softwaretestingboard.com/')
        cy.title().should('contain', 'Home Page - Magento eCommerce')
        cy.get('body > div.page-wrapper > header > div.header.content > a').should('be.be.visible')
    }

    login(username, password) {
        cy.get('#email').type(username)
        cy.get('#pass').type(password)
        cy.get('#send2').click()
    }

    clickSignIn() {
        cy.get('body > div.page-wrapper > header > div.panel.wrapper > div > ul > li.authorization-link > a').click()
        cy.url().should('contain', '/customer/account/login/')
        cy.title().should('contain', 'Customer Login')
    }

    confirmSuccessfulLogin() {
        cy.get('.panel.wrapper > .panel').should('contain', 'Welcome, ChrisTest Cypress!')
    }

    searchFor(item) {
        cy.get('#search').type(item + '{enter}')
        cy.get('.base').should('contain', 'Search results for:').and('contain', item)
    }

    invalidItemSearch() {
        cy.get('.column').find('.message').should('contain', 'Your search returned no results.')
    }

    itemFound() {
        cy.get('#maincontent').find('ol > li').should('be.visible')
    }

    clickOnRandomItem() {
        let element
        cy.get('#toolbar-amount').then(($amount) => {
            //i enter a conditional statement
            // if there is a full page of results ("Items 1-12 of" text exists)
            if(($amount).text().includes('Items 1-12 of')) {
                // then i open a random element on the page
                const random = () => Cypress._.random(1, 12)
                const id = random()
                element = cy.get('#maincontent > div.columns > div.column.main > div.search.results > div.products.wrapper.grid.products-grid > ol > li:nth-child(' + id + ')')
            } else {
                // else i pick the first element on the page
                element = cy.get('#maincontent > div.columns > div.column.main > div.search.results > div.products.wrapper.grid.products-grid > ol > li:nth-child(1)')
            }
        element.scrollIntoView().click()
        })
    }

    clickOnItemSection(sectionName) {
        cy.get('#ui-id-2').contains(sectionName).click()
    }

    sectionChecks(sectionName) {
        cy.get('.breadcrumbs > .items').should('contain', 'Home').should('contain', sectionName)
        cy.get('.base').should('contain', sectionName)
        // perform a url check as well
        if(sectionName === "What's New") {
         cy.url().should('contain','what-is-new.html')
        } else {
            // the provided section name is with a capital letter, which will give a false assert unless 
            // we apply .toLowerCase() method
            cy.url().should('contain', sectionName.toLowerCase() + '.html')
        }
    }

}