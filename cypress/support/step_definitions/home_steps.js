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

Given("I open the registration form", () => {
    homePage.clickCreateAccount()
})

When("I fill out the registration form", () => {
    homePage.enterDummyData()
    homePage.generateRandomEmailAndPassword()
    homePage.submitNewRegistration()
})

When("I pick a random item of the type {string}", (item) => {
    homePage.searchFor(item)
    homePage.itemFound()
    homePage.clickOnRandomItem()
})

When("I search for this item: {string}", (item) => {
    homePage.searchFor(item)
})

When("I click on {string} section", (sectionName) => {
    homePage.clickOnItemSection(sectionName)
})

When("I confirm the header content", () => {
    homePage.welcomeMessageContentCheck()
    homePage.signInCheck()
    homePage.createAccountCheck()
    homePage.searchBarCheck()
    homePage.cartIsEmpty()
})

Then("I make sure all footer links are available", () => {
    homePage.footerContentCheck()
    homePage.subsrcibeFieldsCheck()
})

Then("I should get no results", () => {
    homePage.invalidItemSearch()
})

Then("Confirm you are redirected to section {string}", (sectionName) => {
    homePage.sectionChecks(sectionName)
})

Then("Confirm the registration was successfull & log out", () => {
    homePage.confirmSuccessfullRegistrations()
    homePage.clickSignOut()
})