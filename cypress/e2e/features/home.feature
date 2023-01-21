Feature: Luma – Magento eCommerce cart functionality

    Background: 
        Given I visit the home page

    Scenario: Login as valid user & serach for unavailable item
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
        When I search for this item: "pants" 
        And Various results should load on the page
        And I click on a random result
        Then Check if all mandatory fields are visible

    Scenario: Add item to cart as a logged in user
        Given I log in with valid credentials: "wesagiv830@quamox.com" and "Pass1234!"
        When I search for this item: "shirt"
        And I click on a random result
        And I select item size
        And I pick color of item
        And I add item to cart
        Then Confirm item was addedd successfully

    Scenario: Add item to cart as a guest
        When I search for this item: "bag"
        And I click on a random result
        And I add item to cart
        Then Confirm item was addedd successfully

    # Examples:
    #     | username | password |
    #     | wesagiv830@quamox.com | Pass1234! |

