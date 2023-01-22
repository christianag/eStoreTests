import CartPage from "../page_objects/cart_page";
import HomePage from "../page_objects/home_page";
import ItemPage from "../page_objects/item_page";

const { When, Then, Given } = require("@badeball/cypress-cucumber-preprocessor");
const cartPage = new CartPage()
const itemPage = new ItemPage()
const homePage = new HomePage()


Given("I start with full cart - 1 shirt", () => {
    homePage.goToHomePage()
    homePage.searchFor("shirt")
    homePage.itemFound()
    homePage.clickOnRandomItem()
    itemPage.selectItemSize()
    itemPage.selectItemColor()
    itemPage.addToCart()
    cy.wait(3000)
})

Given("I start with full cart - 3 bags", () => {
    homePage.goToHomePage()
    homePage.searchFor("bag")
    homePage.itemFound()
    homePage.clickOnRandomItem()
    itemPage.increaseQnatity(3)
    itemPage.addToCart()
    cy.wait(3000)
})

When("I open the cart dialog widget", () => {
    cartPage.openCartDialogWidget()
})

When("I open the cart menu", () => {
    cartPage.goToCartMenu()
})

When("I increase the quantity of item", () => {
    cartPage.increateQantityOfItemInCart()
})

When("I decrease the quantity of the items", () => {
    cartPage.decreaseQantityOfItemInCart()
})

Then("Confirm price total amount has increased", () => {
    cartPage.confirmPricesAreNotEqual()
})

Then("Confirm price total amount has decreased", () => {
    cartPage.confirmPricesAreEqual()
})

Then("I clear items from cart menu", () => {
    cartPage.deleteItem()
})

Then("I clear items from cart via dialog widget", () => {
    itemPage.clearCartViaWidget()
})