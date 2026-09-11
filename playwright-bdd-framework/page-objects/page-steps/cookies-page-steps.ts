//1. launch the browser
//2. navigate to the url and launch the application
//3. verify the cookies page is displayed
//4. Click on "Accept All" Cookies button
//5. Verify that cookies banner is no longer displayed
//6. Verify login page is displayed
//7. enter username and password
//8. click on login button
//9. verify that user is logged in successfully and redirected to the dashboard page

import {Page} from "@playwright/test";
import cookiesPage from "../page-elements/cookies-page-elements.json";
import { WebCommons } from "../../commons/ui/web-commons";

export class CookiesPageSteps {

    page : Page;
    web : WebCommons;

    constructor (page : Page) {
        this.page = page;
        this.web = new WebCommons(page);
    }

    //Method to verify the cookies page is displayed
    async verifyCookiesPageIsDisplayed () {
        await this.web.isElementVisible(cookiesPage.cookiesHeader);
    }


    //method to verify the cookies content
    async verifyCookiesContent (expectedContent : string) {
        await this.web.isElementVisible(cookiesPage.cookiesContent);
        const actualContent = await this.web.getText(cookiesPage.cookiesContent);
        if (actualContent !== expectedContent) {
            throw new Error(`Expected content : ${expectedContent}, but got : ${actualContent}`);
        }
    }

    //Method to verify Logos on the cookies pop-up
    async verifyCookiesPopUpLogos(){
        await this.web.isElementVisible(cookiesPage.creatioLogo);
        await this.web.isElementVisible(cookiesPage.cookieBotLogo);
    }

    //Method to verify all selection buttons in the cookies Pop up
    async verifyCookiesPopUpSelectionButtons() {
        await this.web.isElementVisible(cookiesPage.allowAllButton);
        await this.web.isElementVisible(cookiesPage.allowSectionbutton);
        await this.web.isElementVisible(cookiesPage.denyButton);
    }

    //method to verify switch buttons are displayed in the cookies popup
    async verifyCookiesPopUpSwitchButtons(){
        await this.web.isElementVisible(cookiesPage.neccesarySwitchButton);
        await this.web.isElementVisible(cookiesPage.preferencesSwitchButton);
        await this.web.isElementVisible(cookiesPage.statisticsSwitchButton);
        await this.web.isElementVisible(cookiesPage.marketingSwitchButton);
    }

    //Method to verify that show details link in the cookies popup
    async verifyShowDetailsLinkInCookiesPopUp(){
        await this.web.isElementVisible(cookiesPage.showDetailsLink);
    }

    //method to click on show details link within the cookkies pop up
    async clickShowDetailsLinkInCookiesPopUp(){
        await this.web.clickElement(cookiesPage.showDetailsLink);
    }

    //Methods to verify expanded view of cookies pop up after clicking on show details link
    async verifyCookiesPopUpExpandedViewofCookiesPopUp(){
        await this.web.isElementEnabled(cookiesPage.cookiePopUpExpandedView);
    }

    //Method to click on cookies selection buttons
    async clickOnCookiesSelectionButtons(buttonName : string){
        switch (buttonName.toLowerCase()){
            case "allow all" :
                await this.web.clickElement(cookiesPage.allowAllButton);
                break;
                
            case "allow selection" :
                await this.web.clickElement(cookiesPage.allowSectionbutton);
                break;
                
            case "deny" :
                await this.web.clickElement(cookiesPage.denyButton);
                break;
            default :
                throw new Error (`Invalid button name : ${buttonName}`);  
        }
    }

    //Method to verify cookies pop up is closed succesfully
    async verifyCookiesPopUpIsClosed () {
        await this.web.isElementNotVisible(cookiesPage.cookiesHeader);
    } 
}


export default CookiesPageSteps;