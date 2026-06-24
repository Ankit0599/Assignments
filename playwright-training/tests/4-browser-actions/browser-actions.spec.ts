import {test, expect, chromium} from '@playwright/test';

test('Browser actions - Open and Close Browser', async () => {

    //launch the browser engine (chrome engine)

    const browserEngine = await chromium.launch ({channel : 'chrome', headless : false});//msedge

    //launch the browser context or incognito window from the browser engine.

    //launch a new tab or page within the browser context.

    //Maximize the browser window to a specific resolution (1920 * 1080)

    //Clear all the cookies before begining the execution.

    //Enter URL https://www.google.com and launch the google application.

    //Verify appplication launched by using the title of the application.

    //launch a new application within the same tab or page by using the URL https://playwright.dev

    //Go back to the previous google application.

    //mMove forward to the playwright application.

    //Refresh the current application.

    //Launch the new tab within the same browser.

    //Launch the new application with the URL : https://www.selenium.dev

    //Go back to the previoud application available in the previous tab.

    //get the current browser URL.

    //Close the current page.

    //Close all pages or tabs.

});