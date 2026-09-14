Feature: Cookies feature in the Creatio CRM Application
    As a user of the creatio CRM Application, I want to verify all the validations realted to cookies

    Scenario: Verify Cookies Pop-up is launched
        Given Launch the Creatio Application
        Then Cookies Pop-up should be displayed

    @cookies
    Scenario: Verify Cookies Pop-up content
        Given Launch the Creatio Application
        Then Cookies Pop-up should be displayed
        And verify the Content of Cookies Pop-up
        """
        We may use cookies and similar technologies to collect information about the ways you interact with and use the website, to support and enhance features and functionality, to monitor performance, to personalize content and experiences, for marketing and analytics, and for other lawful purposes. We also may share information about your use of our site with our social media, advertising and analytics partners who may combine it with other information that you’ve provided to them or that they’ve collected from your use of their services. Please, see more details on the \"About\" tab"
        """

    Scenario: Verify Cookies Pop-up Logos
        Given Launch the Creatio Application
        Then Cookies Pop-up should be displayed
        And Verify the logos in the Cookies Pop-up

    Scenario: Verify Cookies Pop-up Selection Buttons
        Given Launch the Creatio Application
        Then Cookies Pop-up should be displayed
        And Verify the Selection Buttons in the Cookies Pop-up

    Scenario: Verify Cookies Pop-up Switch Buttons
        Given Launch the Creatio Application
        Then Cookies Pop-up should be displayed
        And Verify the Switch Buttons in the Cookies Pop-up

    Scenario: Verify Cookies Pop-up Show details Links functionality 
        Given Launch the Creatio Application
        Then Cookies Pop-up should be displayed
        And Verify the Show details Links is displayed the Cookies Pop-up
        When User clicks on the Show details Links in the Cookies Pop-up
        Then Verify the Show details Links functionality in the Cookies Pop-up

    Scenario: Verify Cookies Pop-up Allow All button functionality 
        Given Launch the Creatio Application
        Then Cookies Pop-up should be displayed
        And Verify the selection button is displayed in the Cookies Pop-up
        When User clicks on the "allow all" button in the Cookies Pop-up
        Then Verify Cookies Pop-up should be closed

    
