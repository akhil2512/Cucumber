Feature: Ecommerce E2E Validation
  @Regression
  Scenario Outline: Logging in and adding item to cart with multiple users
    Given I navigate to the Ecommerce application
    And I enter "<username>" as username
    And I enter "<password>" as password
    When I click on the login button
    Then I should be logged into the application
    When I click on the "Add to Cart" button for "<item>"
    Then The item "<item>" should be visible in the cart
    When I click on the logout option
    Then I should be redirected to the login page
    And The username and password fields should be visible

  Examples:
    | username                      | password          | item            |
    | defototeci@mechanicspedia.com | Testing@123       | ZARA COAT 3     |
    | akhilreddy60602@gmail.com     | Akhil@2512        | ZARA COAT 3     |
    | balavikash6@gmail.com         | Cognizant@123     | ZARA COAT 3     |

