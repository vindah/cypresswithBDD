Feature: Login Feature
    As I land on the Sudo Login Page, I want to login

Scenario: User can login with valid email and password
  Given I visit the login page
  When I enter a valid username
  And I enter a valid password
  And I click on the login button
  Then I should be logged in successfully