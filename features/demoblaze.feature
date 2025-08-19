Feature: DemoBlaze application
    @Regression
    Scenario Outline: Application Login Functionality
    Given I navigate to the DemoBlaze application
    When I enter "<username>" and "<password>"
    And I click on the DemoBlaze login button
    Then I should be logged into the DemoBlaze application

    Examples:
    | username                      | password          |
    | pavanol                       | test@123          |
