export default class CartPage {

    goToCartMenu() {
        cy.visit('https://magento.softwaretestingboard.com/checkout/cart/')
        cy.get('.base').should('contain', 'Shopping Cart')
    }

    openCartDialogWidget() {
        cy.get('.showcart').click()
        cy.get('#ui-id-1').should('be.visible')
        cy.get('#top-cart-btn-checkout').should('be.visible')
    }

    increateQantityOfItemInCart() {
        //confirm count is currently 1
        cy.get('.count').then((count) => {
            const number = count.text()
            expect(number).to.equal('1')
        })
        //increase item quantity
        cy.get('#mini-cart').then((cart) => {
            const singlePrice = cart.find('.price-excluding-tax').text().trim()
            const totalPrice = cart.find('.price').text().trim()
            // since qty is 1 singlePrice and totalAmount are equal
            expect(singlePrice).to.equal(totalPrice)
        })
        cy.get('.details-qty > input').clear().type(2)
        cy.get('.details-qty > button').click()
        cy.wait(2000)
    }

    confirmPricesAreNotEqual() {
        cy.get('#ui-id-1').should('be.visible')
        //confirm quantity has now increased
        cy.get('.count').then((count) => {
            const number = count.text()
            expect(number).to.equal('2')
        })
        //confirm that newTotalPrice now isn't equal to the singlePrice
        cy.get('#ui-id-1').then((cart) => {
            const singlePrice = cart.find('.price-excluding-tax').text().trim()
            const totalPrice = cart.find('.price').text().trim()
            expect(singlePrice).to.not.equal(totalPrice)
        })
    }

    decreaseQantityOfItemInCart() {
        //decrease item quantity
        cy.get('#form-validate').then((cart) => {
            const singlePrice = cart.find('.col.price > .price-excluding-tax > .cart-price > .price').text().trim()
            const totalPrice = cart.find('.subtotal > .price-excluding-tax > .cart-price > .price').text().trim()
            expect(singlePrice).to.not.equal(totalPrice)
        })
        cy.get('.col.qty > .field > .control > label > input').clear().type(1)
        cy.get('.update').click()
        cy.wait(2000)
    }

    confirmPricesAreEqual() {
        cy.get('#form-validate').then((cart) => {
            const singlePrice = cart.find('.col.price > .price-excluding-tax > .cart-price > .price').text().trim()
            const totalPrice = cart.find('.subtotal > .price-excluding-tax > .cart-price > .price').text().trim()
            expect(singlePrice).to.equal(totalPrice)
        })
    }

    deleteItem() {
        cy.get('.action-delete').click()
        cy.wait(2000)
        cy.get('.columns').should('contain', 'You have no items in your shopping cart.')
    }

    deleteItemViaWidget(){
        cy.get('#mini-cart > li > div > div > div.product.actions > div.secondary > a').click()
    }

}