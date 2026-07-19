import {Page} from "@playwright/test";
import loginPage from "../page-elements/login-page-elements.json";
import {WebCommons} from "../../commons/ui/web-commons";
import config from  "../../config/config.json";

export class LoginPageSteps {

    page : Page;
    web : WebCommons;

    constructor (page : Page) {

        this.page = page;
        this.web = new WebCommons(page);
    }

    //method to verify application is launched
    async launchApplication(){
        await this.web.launchapplication(config.app.url);
    }

    //Method to verify the login page is displayed
    async verifyLoginPageIsDisplayed(){
        await this.web.isElementVisible(loginPage.loginPageHeader);
    }

    //Method to enter username and password
    async enterUsernamePassword (username : string, password : string){
        await this.web.enterText(loginPage.businessEmailTextBox, username);
        await this.web.enterText(loginPage.passwordTextBox, password);
    }

    //method to click on login button
    async clickOnLoginButton() {
        await this.web.clickElement (loginPage.loginButton);
    }

    //method to click on forgot password link
    async clickOnForgotPasswordLink() {
        await this.web.clickElement (loginPage.forgotPasswordLink);
    }

    //method to verify the forgot password confirmation message is displayed
    async verifyForgotPasswordConfirmationMessageIsDisplayed(){
        await this.web.isElementVisible(loginPage.forgotPasswordCOnfirmationMsg);
    }

    //method to verify error message is displayed for invalid login attempt
    async verifyInvalidLoginErrorMessageisDisplayed(){
        await this.web.isElementVisible(loginPage.loginErrorMessage);
    }

    //method to verify social media login options within login page
    async verifySocialMediaLoginOptions(){
        await this.web.isElementVisible(loginPage.linkdinIcon);
        await this.web.isElementVisible(loginPage.googleIcon);
    }

    //method to click on sign up link within the login page
    async clickOnSignUpLink(){
        await this.web.clickElement(loginPage.signUpLink);
    }
}

export default LoginPageSteps;