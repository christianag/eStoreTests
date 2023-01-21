import HomePage from "../page_objects/home_page";

const { When, Then, Given } = require("@badeball/cypress-cucumber-preprocessor");
const homePage = new HomePage()

Given("I visit the home page", () =>{
    homePage.goToHomePage()
})

Given("I log in with valid credentials: {string} and {string}", (username, password) => {
    homePage.clickSignIn()
    homePage.login(username, password)
    homePage.confirmSuccessfulLogin()
})

When("I search for this item: {string}", (item) => {
    homePage.searchFor(item)
})

When("Various results should load on the page", () => {
    homePage.itemFound()
})

When("I click on a random result", () => {
    homePage.clickOnRandomItem()
})

When("I click on {string} section", (sectionName) => {
    homePage.clickOnItemSection(sectionName)
})

Then("I should get no results", () => {
    homePage.invalidItemSearch()
})

Then("Confirm you are redirected to section {string}", (sectionName) => {
    homePage.sectionChecks(sectionName)
})
