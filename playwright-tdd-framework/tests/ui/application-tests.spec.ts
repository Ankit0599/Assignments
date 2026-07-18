import {test, expect, TestInfo} from "@playwright/test";
import CookiesPageSteps from '../../page-objects/page-steps/cookies-page-steps';
import HomePageSteps from '../../page-objects/page-steps/home-page-steps';
import LoginPageSteps from '../../page-objects/page-steps/login-page-steps';
import data from '../../testdata/ui/data.json';

let loginPage : LoginPageSteps;
let HomePage : HomePageSteps;
let CookiePage : CookiesPageSteps;
let testdata: any;

test.describe('Application Test', () => {

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPageSteps(page);
        HomePage = new HomePageSteps(page);
        CookiePage = new CookiesPageSteps(page);
    });
    
    test.describe ('Application Test', () => {
        
        test ('Test Case 1 : To verify Cookies popup is displayed', async () => {
            await loginPage.launchApplication();
            await CookiePage.verifyCookiesPageIsDisplayed();
    });

    test ('Test Case 2 : To verify Cookies popup content is displayed', async ({}, testinfo : TestInfo) => {
        testdata = data[testinfo.title as keyof typeof data];
            await loginPage.launchApplication();
            await CookiePage.verifyCookiesPageIsDisplayed();
            await CookiePage.verifyCookiesContent(testdata["expectedContent"]);
    });

    test ('Test Case 3 : To verify Cookies popup Logo is displayed', async () => {
            await loginPage.launchApplication();
            await CookiePage.verifyCookiesPageIsDisplayed();
            await CookiePage.verifyCookiesPopUpLogos();
    });

    test ('Test Case 4 : To verify Cookies popup selection button is displayed', async () => {
            await loginPage.launchApplication();
            await CookiePage.verifyCookiesPageIsDisplayed();
            await CookiePage.verifyCookiesPopUpSelectionButton();
    });

    test ('Test Case 5 : To verify Cookies popup switch button is displayed', async () => {
            await loginPage.launchApplication();
            await CookiePage.verifyCookiesPageIsDisplayed();
            await CookiePage.verifyCookiesPopUpSwitchButton();
    });

    test ('Test Case 6 : To verify show details features cookies popup is displayed', async () => {
            await loginPage.launchApplication();
            await CookiePage.verifyCookiesPageIsDisplayed();
            await CookiePage.verifyShowDetailsLink();
            await CookiePage.clickShowDetailsLink();
            await CookiePage.verifyCookiesPopUpExpandedView();
    });

    test ('Test Case 7 : To verify cookies popup is closed successfully', async () => {
            await loginPage.launchApplication();
            await CookiePage.verifyCookiesPageIsDisplayed();
            await CookiePage.verifyCookiesPopUpSelectionButton();
            await CookiePage.clickOnCookiesSelectionButton("Allow All");
            await CookiePage.verifyCookiesPopUpIsClosed();
    });

    test ('Test Case 8 : To verify user is able to login successfully with valid credentials', async ({}, testinfo : TestInfo) => {
            testdata = data[testinfo.title as keyof typeof data];
            await loginPage.launchApplication();
            await CookiePage.verifyCookiesPageIsDisplayed();
            await CookiePage.verifyCookiesPopUpSelectionButton();
            await CookiePage.clickOnCookiesSelectionButton("Allow All");
            await CookiePage.verifyCookiesPopUpIsClosed();
            await loginPage.verifyLoginPageIsDisplayed();
            await loginPage.enterUsernamePassword(testdata["username"], testdata["password"]);
            await loginPage.clickOnLoginButton();
            await HomePage.verifyHomePageIsDisplayed();
    });

    test ('Test Case 9 : To verify Error message is displayed for invalid login attempt', async ({}, testinfo : TestInfo) => {
            testdata = data[testinfo.title as keyof typeof data];
            await loginPage.launchApplication();
            await CookiePage.verifyCookiesPageIsDisplayed();
            await CookiePage.verifyCookiesPopUpSelectionButton();
            await CookiePage.clickOnCookiesSelectionButton("Allow All");
            await CookiePage.verifyCookiesPopUpIsClosed();
            await loginPage.verifyLoginPageIsDisplayed();
            await loginPage.enterUsernamePassword(testdata["username"], testdata["password"]);
            await loginPage.clickOnLoginButton();
            await loginPage.verifyInvalidLoginErrorMessageisDisplayed();
    });

    test ('Test Case 10 : To verify forgot password functionality within the login page', async () => {
            await loginPage.launchApplication();
            await CookiePage.verifyCookiesPageIsDisplayed();
            await CookiePage.verifyCookiesPopUpSelectionButton();
            await CookiePage.clickOnCookiesSelectionButton("Allow All");
            await CookiePage.verifyCookiesPopUpIsClosed();
            await loginPage.verifyLoginPageIsDisplayed();
            await loginPage.clickOnForgotPasswordLink();
            await loginPage.verifyForgotPasswordConfirmationMessageIsDisplayed();
    });

    test ('Test Case 11 : To verify social media icons within the login page', async () => {
            await loginPage.launchApplication();
            await CookiePage.verifyCookiesPageIsDisplayed();
            await CookiePage.verifyCookiesPopUpSelectionButton();
            await CookiePage.clickOnCookiesSelectionButton("Allow All");
            await CookiePage.verifyCookiesPopUpIsClosed();
            await loginPage.verifyLoginPageIsDisplayed();
            await loginPage.verifySocialMediaLoginOptions();
    });

    test ('Test Case 12 : To verify logout functionality within the login page', async ({}, testinfo : TestInfo) => {
            testdata = data[testinfo.title as keyof typeof data];
            await loginPage.launchApplication();
            await CookiePage.verifyCookiesPageIsDisplayed();
            await CookiePage.verifyCookiesPopUpSelectionButton();
            await CookiePage.clickOnCookiesSelectionButton("Allow All");
            await CookiePage.verifyCookiesPopUpIsClosed();
            await loginPage.verifyLoginPageIsDisplayed();
            await loginPage.enterUsernamePassword(testdata["username"], testdata["password"]);
            await loginPage.clickOnLoginButton();
            await HomePage.verifyHomePageIsDisplayed();
            await HomePage.clickOnLogOutButton();
            await loginPage.verifyLoginPageIsDisplayed();
    });


});

});