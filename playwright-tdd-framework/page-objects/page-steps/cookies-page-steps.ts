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

}
