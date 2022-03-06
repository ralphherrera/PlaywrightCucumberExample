@LoginTesting
Feature: As a user of XYZ Banking website 
I should be able to login using my login credentials

@LoginSuccess
Scenario: Login as Bank Manager
Given I access the XYZ Banking website
When I login as a 'Bank Manager'
Then I should be redirected to the manager dashboard page

@LoginInvalid
Scenario: Login as Customer
Given I access the XYZ Banking website
When I login as a 'Customer'
Then I should be see the customer name in the customer dashboard page