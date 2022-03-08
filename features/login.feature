@LoginTesting
Feature: As an employee of iCE HRM, I should be able to access the ice hrm website

    @LoginSuccess
    Scenario: Login to iCE HRM website with valid credentials
        Given I open the iCE HRM website
        # When I login as "<role>" "<username>" "<password>"
        When I login as admin
        Then I should be redirected to the dashboard page
        # Examples:
        #     | role    | username | password    |
        #     | admin   | admin    | password    |
        #     | manager | manager  | demouserpwd |
        #     | user1   | user1    | demouserpwd |
        #     | user2   | user2    | demouserpwd |




# @LoginInvalid
# Scenario: Login to iCE HRM website with invalid credentials
#     Given I access the XYZ Banking website
#     When I login as a 'Customer'
#     Then I should be see the customer name in the customer dashboard page