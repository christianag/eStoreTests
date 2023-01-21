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
        // if(expect('.size').to.be.visible) {
        //     this.selectItemSize()
        // } else {
        //     cy.log('THIS ITEM HAS NO SIZE OPTIONS')
        // }
        // if(expect('.swatch-attribute.color').to.be.visible) {
        //     this.selectItemColor()
        // } else {
        //     cy.log('THIS ITEM HAS NO COLOR OPTIONS')
        // }
        cy.get('.stock > span').should('contain', 'In stock')
        cy.get('#product-addtocart-button').click()
    }

    messageOfSuccess() {
        cy.get('.message-success').should('be.visible').contains('You added').contains('to your shopping cart')
        cy.get('.counter-number').should('have.text', '1')
    }

    checkCart() {
        cy.get('.message-success > div > a').click()
        cy.url().should('contain', '/checkout/cart/')
        cy.title().should('contain', 'Shopping Cart')
    }

}