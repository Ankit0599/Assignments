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
import cookiesPage from "../page-elements/cookies-page-elements.json" with { type: "json" };
import { WebCommons } from "../../commons/ui/web-commons.ts";

export class CookiesPageSteps {

    page: Page;
    web: WebCommons;

    constructor(page: Page) {
        this.page = page;
        this.web = new WebCommons(page);
    }

    //Method to verify Cookies page is displayed. 
    async verifyCookiesPageIsDisplayed() {
        await this.web.isElementVisible(cookiesPage.cookiesHeader);
    }

    //Method to verify the content of the cookies page.
    async verifyCookiesPageContent(expectedContent: string) {
        await this.web.isElementVisible(cookiesPage.cookiesContent);
        const actualContent = await this.web.getText(cookiesPage.cookiesContent);
        if (!actualContent?.includes(expectedContent)) {
            throw new Error(`Expected content: ${expectedContent}, but got: ${actualContent}`);
        }
    }


    // Method to verify the logos on the cookies pop-up
    async verifyCookiesPopUpLogos() {
        await this.web.isElementVisible(cookiesPage.creatioLogo);
        await this.web.isElementVisible(cookiesPage.cookieBotLogo);
    }

    //Method to verify all the selection buttons in the cookies pop-up 
    async verifyCookiesPopUpSelectionButtons() {
        await this.web.isElementVisible(cookiesPage.allowAllButton);
        await this.web.isElementVisible(cookiesPage.allowSelectionButton);
        await this.web.isElementVisible(cookiesPage.denyButton);
    }

    //Method to verify switch buttons are displayed in the cookies pop-up 
    async verifyCookiesPopUpSwitchButtons() {
        await this.web.isElementVisible(cookiesPage.necessarySwitchButton);
        await this.web.isElementVisible(cookiesPage.preferencesSwitchButton);
        await this.web.isElementVisible(cookiesPage.statisticsSwitchButton);
        await this.web.isElementVisible(cookiesPage.marketingSwitchButton);
    }

    //Method to verify Show details link in the cookies pop-up 
    async verifyShowDetailsLinkInCookiesPopUp() {
        await this.web.isElementVisible(cookiesPage.showDetailsLink);
    }

    //Method to click on the show details link within the cookies pop-up. 
    async clickShowDetailsLinkInCookiesPopUp() {
        await this.web.clickElement(cookiesPage.showDetailsLink);
    }

    //Method to verify expanded view of the cookies pop-up after clicking on the show details link. 
    async verifyExpandedViewOfCookiesPopUp() {
        await this.web.isElementVisible(cookiesPage.cookiePopupExpandedView);
    }

    //Method to click on the cookies selection buttons.
    async clickCookiesSelectionButtons(buttonName: string) {
        switch (buttonName.toLowerCase()) {
            case "allow all":
                await this.web.clickElement(cookiesPage.allowAllButton);
                break;
            case "allow selection":
                await this.web.clickElement(cookiesPage.allowSelectionButton);
                break;
            case "deny":
                await this.web.clickElement(cookiesPage.denyButton);
                break;
            default:
                throw new Error(`Invalid button name: ${buttonName}`);
        }

    }

    //Method to Verify Cookies Pop-up is Closed Successfully 
    async verifyCookiesPopUpIsClosed() {
        await this.web.isElementNotVisible(cookiesPage.cookiesHeader);
    }

}

export default CookiesPageSteps;