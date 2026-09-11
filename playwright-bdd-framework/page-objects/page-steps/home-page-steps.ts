import {Page} from "@playwright/test";
import homePage from "../page-elements/home-page-elements.json";
import {WebCommons} from "../../commons/ui/web-commons";

export class HomePageSteps {

    page : Page;
    web : WebCommons;

    constructor (page : Page) {
        this.page = page;
        this.web = new WebCommons(page);
    }

    //Method to verify the home page is displayed
    async verifyHomePageIsDisplayed(){
        await this.web.isElementVisible
        await this.web.isElementVisible(homePage.homePageHeaderLink);
    }

    //Method to click on profile icon
    async clickOnProfileIcon(){
        await this.web.clickElement(homePage.profile);
    }

    //Method to click on log out Link
    async clickOnLogOutLink(){
        await this.web.clickElement(homePage.logOutLink);
    }
}

export default HomePageSteps;