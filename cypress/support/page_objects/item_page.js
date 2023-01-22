export default class ItemPage {

    doesItemHaveAllMandatoryField() {
        expect(cy.get('.page-title-wrapper')).to.exist
        expect(cy.get('.product-reviews-summary')).to.exist
        expect(cy.get('.product-info-price')).to.exist
        expect(cy.get('#product-options-wrapper > div > div > div.size')).to.exist
        expect(cy.get('#qty')).to.exist
    }

    selectItemSize() {
        cy.get('.size > .swatch-attribute-options > .swatch-option:nth-child(1)').click()
    }
    
    selectItemColor() {
        cy.get('.swatch-attribute.color > .swatch-attribute-options > .swatch-option:nth-child(1)').click()
    }

    addToCart() {
        cy.get('#product-addtocart-button').click()
    }

    messageOfSuccess() {
        cy.get('.message-success').should('be.visible').contains('You added').contains('to your shopping cart')
    }

    amountOfItemsInCart(number) {
        cy.get('.counter-number').should('have.text', number)
    }

    checkCart() {
        cy.get('.message-success > div > a').click()
        cy.url().should('contain', '/checkout/cart/')
        cy.title().should('contain', 'Shopping Cart')
    }

    requiredFieldErrorMessage() {
        cy.get('div.mage-error').should('be.visible').and('have.length', 2).contains('This is a required field.')
    }

    clickOnCartIcon() {
        cy.get('.showcart').click()
    }

    clearCartViaWidget() {
        cy.get('.product > .secondary > .action').click()
        cy.on('window:alert',(alert)=>{
            expect(alert).to.contains('Are you sure you would like to remove this item from the shopping cart?')
         })
         cy.get('.action-primary').click()
         cy.get('.subtitle').should('contain', 'You have no items in your shopping cart.')
    }

    emptyCartOfLoggedInUser() {
        cy.get('.showcart').click()
        cy.get('.subtitle').then(($content) => {
            if(($content).text() != 'You have no items in your shopping cart.') {
                cy.get('#mini-cart > li > div > div > div.product.actions > div.secondary > a').click()
                cy.on('window:alert',(alert)=>{
                    expect(alert).to.contains('Are you sure you would like to remove this item from the shopping cart?')
                 })
                 cy.get('.action-primary').click()
                cy.log('CART HAS BEEN CLEARED')
            } else {
                cy.log('CART IS EMPTY')
            }
        })
    }

    increaseQnatity(quantity) {
        cy.get('input#qty').clear().type(quantity)
    }

}