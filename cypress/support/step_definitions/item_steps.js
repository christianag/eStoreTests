import ItemPage from "../page_objects/item_page";

const { When, Then, Given } = require("@badeball/cypress-cucumber-preprocessor");
const itemPage = new ItemPage()

Given("I start with an empty cart", () => {
    itemPage.emptyCartOfLoggedInUser()
})

When("I select item size and color", () => {
    itemPage.selectItemSize()
    itemPage.selectItemColor()
})

When("Add item to my cart", () => {
    itemPage.addToCart()
})

When("Increase quantity of item to {string}", (quantity) => {
    itemPage.increaseQnatity(quantity)
})

Then("Confirm number of items added to cart; should be {string}", (number) => {
    itemPage.messageOfSuccess()
    itemPage.amountOfItemsInCart(number)
})

Then("Check if all mandatory fields are visible", () => {
    itemPage.doesItemHaveAllMandatoryField()
})

Then("I should see an error stating size and color are mandatory fields", () => {
    itemPage.doesItemHaveAllMandatoryField()
})

Then("Clear cart", () => {
    itemPage.clickOnCartIcon()
    itemPage.clearCartViaWidget()
})