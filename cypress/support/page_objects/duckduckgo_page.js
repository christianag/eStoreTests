export default class Duckduckgo {

    goToDuckduckgoPage() {
        cy.visit("https://duckduckgo.com/")
    }

    seeSearchBar() {
        cy.get("input").should(
            "have.attr",
            "placeholder",
            "Search the web without being tracked"
          )
    }

}