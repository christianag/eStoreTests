Feature: Luma Magento eCommerce - Cart Page functionalities7

    Scenario: Increase the quantity of an item in cart
        Given I start with full cart - 1 shirt
        When I open the cart dialog widget
        And I increase the quantity of item
        Then Confirm price total amount has increased
        And I clear items from cart via dialog widget 

    
    Scenario: Decrease the quantity of an item in cart
        Given I start with full cart - 3 bags
        When I open the cart menu
        And I decrease the quantity of the items
        Then Confirm price total amount has decreased
        And I clear items from cart menu