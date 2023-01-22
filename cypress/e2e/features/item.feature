Feature: Luma Magento eCommerce - Item Page functionalities

Background: 
        Given I visit the home page

    Scenario: Add item to cart as a logged-in user
        Given I log in with valid credentials: "wesagiv830@quamox.com" and "Pass1234!"
        And I start with an empty cart
        When I pick a random item of the type "shirt"
        And I select item size and color
        And Add item to my cart
        Then Confirm number of items added to cart; should be "1"

    Scenario: Add item to cart as a guest
        When I pick a random item of the type "bag"
        And Add item to my cart
        Then Confirm number of items added to cart; should be "1"

    Scenario: Shouldn't be able to add item to cart without selecting size
        When I pick a random item of the type "jacket"
        And Add item to my cart
        Then I should see an error stating size and color are mandatory fields

    Scenario: Add more than 1 item in cart
        When I pick a random item of the type "bag"
        And Increase quantity of item to "5"
        And Add item to my cart
        Then Confirm number of items added to cart; should be "5"
        And Clear cart