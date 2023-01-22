Feature: Luma Magento eCommerce - Home Page functionalities

    Background: 
        Given I visit the home page

    Scenario: Login as valid user & search for unavailable item
        Given I log in with valid credentials: "wesagiv830@quamox.com" and "Pass1234!"
        When I search for this item: "pen"
        Then I should get no results

    Scenario: The main sections should redirect to the correct page
        When I click on "<sectionName>" section
        Then Confirm you are redirected to section "<sectionName>"

        Examples:
        | sectionName |
        | What's New |
        | Women |
        | Men |
        | Gear |
        | Training |
        | Sale |

    Scenario: Search for an available item and open the item's page
        When I pick a random item of the type "pants"
        Then Check if all mandatory fields are visible

    Scenario: Header and footer content is as expected
        When I confirm the header content
        Then I make sure all footer links are available

    Scenario: Create a new account
        Given I open the registration form
        When I fill out the registration form
        Then Confirm the registration was successfull & log out

