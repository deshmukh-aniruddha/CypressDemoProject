 Feature: Invalid Email or password

  Scenario: Login with incorrect email and password
    Given Launch the browser
    Then Navigate to the base URL
    And Verify if title is 'Automation Exercise'
    Then Click on Signup / Login button
    Then Check if Login to your account visible
    And Enter incorrect email 'test@mail.com' and password 'test@1234' 
    When Click login button
    Then Check Error Message
    Then Return to home page
    Then Check for Polo brand
    And Check for Biba brand

