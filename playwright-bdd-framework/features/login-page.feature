Feature: Creatio Login Feature
    As a user of the Creatio CRM Application, I want to verify all the validations related to login functionality

    Background: Close the cookies pop-up if displayed
        Given Launch the Creatio Application
        Then Verify the cookies pop-up should be displayed
        And Verify the selection button is displayed in the cookies Pop-up
        When User clicks on the "allow all" button in the cookies Pop-up
        Then Verify cookies Pop-up should be closed

    Scenario: Verify Login Page is launched
        Given Login Page is launched.

    Scenario Outline: Verify Login fearture with <scenario> credentials
        Given Login Page is launched.
        When User enters "<username>" and "<password>"
        And User clicks on the Login button
        Then Login should be "<status>"
        Examples:
            | scenario | username | password | status |
            | valid    | ankitjeure927@gmail.com    | AnkitJeure@9278    | Successful |
            | invalid  | admin12@gmail.com    | test123     | Failed |

    
    Scenario: Verify the Forgot password link functionality
        Given Login Page is launched
        Then Verify the Forgot password link is displayed on the login page
        When User clicks on the Forgot password link
        Then Forgot Password confirmation message should be displayed

    Scenario: Verify social media login options
        Given Login Page is launched
        Then Verify the social media login options are displayed on the login page
        
        
        Scenario Outline: Verify logout feature
        Given Login Page is launched.
        When User enters "<username>" and "<password>"
        And User clicks on the Login button
        Then Login should be "<status>"
        When User clicks on profile icon in the top right corner
        And User clicks on the logout button
        Then Verify the user is logged out Successfully
        Examples:
            | scenario | username | password | status |
            | valid    | ankitjeure927@gmail.com    | AnkitJeure@9278    | Successful |
        
    