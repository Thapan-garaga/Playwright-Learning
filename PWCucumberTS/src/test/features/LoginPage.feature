Feature: Login functionality
    @Smoke
    Scenario: Verify login functionality with valid credentials
        Given User should be in login page
        When Enter User Name "gomasa1988@gmail.com" and Password "Gomasa1988"
        And User click on the login button
        Then User should be landing in dashboard page

    @Smoke
    Scenario: Verify login functionality with invalid credentials
        Given User should be in login page
        When Enter User Name "gomasa1989@gmail.com" and Password "Gomasa1989"
        And User click on the login button
        Then User should not be landing in dashboard page

   @Regression @Smoke 
    Scenario Outline: Verify login functionality with valid credentials
        Given User should be in login page
        When Enter User Name "<UserName>" and Password "<Password>"
        And User click on the login button
        Then User should not be landing in dashboard page  

    Examples:

        |   UserName            |   Password    |
        | splaywright@gmail.com | Gomasa@1988   |
        | splaywright@gmail.com | Gomasa@1988   |
        | splaywright@gmail.com | Gomasa@1988   |
        | splaywright@gmail.com | Gomasa@1988   |