Feature: Creatio Login Feature
    As a user of the Creatio CRM application, I want to verify all the validations related to login functionality

    Background: Close the cookies pop-up if displayed
        Given Launch the Creatio application
        Then Verify the Cookies Pop-up should be displayed
        And Verify the Allow All button is displayed in the Cookies Pop-up
        When User clicks on the "allow all" button in the Cookies Pop-up
        Then Verify Cookies Pop-up should be closed

    Scenario: Verify Login Page is launched
        Then Verify the Login Page should be displayed