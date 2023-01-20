import Duckduckgo from "../page_objects/duckduckgo_page";

const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const duckduckgo = new Duckduckgo()

When("I visit duckduckgo.com", () => {
  duckduckgo.goToDuckduckgoPage()
});

Then("I should see a search bar", () => {
  duckduckgo.seeSearchBar()
  assert.deepEqual({}, {});
});