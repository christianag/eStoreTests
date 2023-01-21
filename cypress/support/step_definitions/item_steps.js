import ItemPage from "../page_objects/item_page";

const { When, Then, Given } = require("@badeball/cypress-cucumber-preprocessor");
const itemPage = new ItemPage()

When("I select item size", () => {
    itemPage.selectItemSize()
})

When("I pick color of item", () => {
    itemPage.selectItemColor()
})

When("I add item to cart", () => {
    itemPage.addToCart()
})

Then("Confirm item was addedd successfully", () => {
    itemPage.messageOfSuccess()
})

Then("Check if all mandatory fields are visible", () => {
    itemPage.doesItemHaveAllMandatoryField()
})