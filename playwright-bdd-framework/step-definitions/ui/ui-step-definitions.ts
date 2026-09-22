import {Given, When, Then} from "@cucumber/cucumber";
import {CustomWorld} from "../../support/World";
import data from "../../testdata/ui/data.json";
import { stringify } from "querystring";

//Given Launch the Creatio Application
Given ('Launch the Creatio Application' , async function (this: CustomWorld) {
    await this.loginPageSteps.launchApplication();
});

//Then Cookies pop-up should be displayed
Then ('Cookies pop-up should be displayed' , async function (this: CustomWorld) {
    await this.cookiesPageSteps.verifyCookiesPageIsDisplayed();
});

//And Verify the content of the cookies popup
Then ('Verify the content of the cookies popup (string)' , async function (this: CustomWorld, expectedContent: string) {
    await this.cookiesPageSteps.verifyCookiesContent(expectedContent);
});

//And Verify the logos in the cookies popup
Then ('Verify the logos in the cookies popup' , async function (this: CustomWorld) {
    await this.cookiesPageSteps.verifyCookiesPopUpLogos();
});

//And Verify the selection buttons in the cookies popup
Then ('Verify the selection buttons in the cookies popup' , async function (this: CustomWorld) {
    await this.cookiesPageSteps.verifyCookiesPopUpSelectionButtons();
});

//And Verify the switch buttons in the cookies popup
Then ('Verify the switch buttons in the cookies popup' , async function (this: CustomWorld) {
    await this.cookiesPageSteps.verifyCookiesPopUpSwitchButtons();
});

//And Verify the show details link is displayed in the cookies popup
Then ('Verify the show details link is displayed in the cookies popup' , async function (this: CustomWorld) {
    await this.cookiesPageSteps.verifyShowDetailsLinkInCookiesPopUp();
});

//When User clicks on the show details link in the cookies popup
When ('User clicks on the show details link in the cookies popup' , async function (this: CustomWorld) {
    await this.cookiesPageSteps.clickShowDetailsLinkInCookiesPopUp();
});

//Then Verify cookies popup should be displayed in expanded mode
Then ('Verify cookies popup should be displayed in expanded mode' , async function (this: CustomWorld) {
    await this.cookiesPageSteps.verifyCookiesPopUpExpandedViewofCookiesPopUp();
});

//When User clicks on the "allow all" button in the cookies popup
When ('User clicks on the {string} button in the cookies popup' , async function (this: CustomWorld, buttonName: string) {
    await this.cookiesPageSteps.clickOnCookiesSelectionButtons(buttonName);
});

//Then Verify cookies popup should be closed
Then ('Verify cookies popup should be closed' , async function (this: CustomWorld) {
    await this.cookiesPageSteps.verifyCookiesPopUpIsClosed();
});

//Given The login page is launched
Given ('The login page is launched' , async function (this: CustomWorld) {
    await this.loginPageSteps.launchApplication();
});

//When User enters "<username>" and "<password>"
When ('User enters {string} and {string}' , async function (this: CustomWorld, username: string, password: string) {
    await this.loginPageSteps.enterUsernamePassword(username, password);
});

//And User clicks on the login button
Then ('User clicks on the login button' , async function (this: CustomWorld) {
    await this.loginPageSteps.clickOnLoginButton();
});

//Then Login should be "<status>"
Then ('Login should be {string}' , async function (this: CustomWorld, expectedStatus: string) {
    await this.homePageSteps.verifyHomePageIsDisplayed();
});

//When User clicks on the profile icon in the top right corner
When ('User clicks on the profile icon in the top right corner' , async function (this: CustomWorld) {
    await this.homePageSteps.clickOnProfileIcon();
});

//And User clicks on the logout button
Then ('User clicks on the logout button' , async function (this: CustomWorld) {
    await this.homePageSteps.clickOnLogOutButton();
});

//Then Verify user should be logged out successfully
Then ('Verify user should be logged out successfully' , async function (this: CustomWorld) {
    await this.loginPageSteps.verifyLoginPageIsDisplayed();
});
