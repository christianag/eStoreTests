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
        cy.get('#search').click().type(item + '{enter}')
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

    welcomeMessageContentCheck() {
        cy.contains('Default welcome msg!').should('be.visible')
    }

    signInCheck() {
        cy.contains('Sign In').should('be.visible')
    }

    createAccountCheck() {
        cy.contains('Create an Account').should('be.visible')
    }

    searchBarCheck() {
        cy.get('.header.content').find('#search').should('have.attr', 'placeholder', 'Search entire store here...')
    }

    cartIsEmpty() {
        cy.get('.minicart-wrapper').should('be.visible').click()
        cy.get('.ui-dialog').should('contain', 'You have no items in your shopping cart.')
    }

    footerContentCheck() {
        cy.get('.footer.content').should('contain', 'Customer Service')
        cy.get('.footer.content').should('contain', 'Ask a question')
        cy.get('.footer.content').should('contain', 'Privacy and Cookie Policy')
        cy.get('.footer.content').should('contain', 'Orders and Returns')
    }

    subsrcibeFieldsCheck() {
        cy.get('#newsletter').should('have.attr', 'placeholder', 'Enter your email address')
        cy.get('.footer.content').find('button.subscribe').should('be.visible')
    }

    clickCreateAccount() {
        cy.contains('Create an Account').click()
        cy.url().should('contain', '/customer/account/create/')
        cy.get('.base').should('contain', 'Create New Customer Account')
    }

    enterDummyData() {
        cy.get('.field-name-firstname').contains('First Name')
        cy.get('#firstname').type('Test')
        cy.get('.field-name-lastname').contains('Last Name')
        cy.get('#lastname').type('Test')
        cy.get('.choice > .label > span').contains('Sign Up for Newsletter')
        cy.get('#is_subscribed').check()
    }

    generateRandomEmailAndPassword() {
        //generate a unique string for email & password tests
        const generator = () => Cypress._.random(0, 1e6)
        const randomNumber = generator()
        const randomString = `testemail${randomNumber}`
        cy.get('#email_address').type(randomString + '@test.com')
        cy.get('#password').type('Pass' + randomNumber + '$')
        cy.get('#password-confirmation').type('Pass' + randomNumber + '$')
    }

    submitNewRegistration() {
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    }

    confirmSuccessfullRegistrations() {
        cy.get('.message-success').should('contain', 'Thank you for registering with Fake Online Clothing Store.')
        cy.get('.panel > :nth-child(2)').should('contain', 'Welcome, Test Test!')
        cy.get('.page-title-wrapper').contains('My Account')
        cy.get('.sidebar-main').should('contain', 'My Orders')
        cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click()
        cy.get('li.active > div:nth-child(2) > ul:nth-child(1) > li:nth-child(1) > a:nth-child(1)').should('be.visible')
        cy.get('li.active > div:nth-child(2) > ul:nth-child(1) > li:nth-child(2)').should('be.visible')
    }

    clickSignOut() {
        cy.get('li.active > div:nth-child(2) > ul:nth-child(1) > li:nth-child(3)').should('contain', 'Sign Out').click()
        cy.get('.base').should('contain', 'You are signed out')
        cy.get('.column > p').contains('You have signed out and will go to our homepage in 5 seconds.')
    }

}