import {test, expect, chromium} from '@playwright/test';

test('Browser actions - Open and Close Browser', async () => {

    //launch the browser engine (chrome engine)
    const browserEngine = await chromium.launch ({channel : 'chrome', headless : false});//msedge

    //launch the browser context or incognito window from the browser engine.
    const browsercontext = await browserEngine.newContext();

    //Clear all the cookies before begining the execution.
    await browsercontext.clearCookies();

    //launch a new tab or page within the browser context.
    const page = await browsercontext.newPage();

    //Maximize the browser window to a specific resolution (1920 * 1080)
    await page.setViewportSize({width: 1920, height: 1080});

    //Enter URL https://www.google.com and launch the google application.
    await page.goto ('https://www.google.com');

    //Verify appplication launched by using the title of the application.
    await expect(page).toHaveTitle('Google');

    //locate sign in button and take the screenshot
    const signInButton = page.locator('a[aria-label="Sign in"]');
    await signInButton.screenshot ({ path : 'screenshots/signIn.png'});

    //launch a new application within the same tab or page by using the URL https://playwright.dev
    await page.goto ('https://playwright.dev');

    //take screenshot of the entire browser window
    await page.screenshot ({ path : 'screenshots/playwright.png', fullPage : true});

    //Go back to the previous google application.
    await page.goBack();

    //mMove forward to the playwright application.
    await page.goForward();

    //Refresh the current application.
    await page.reload();

    //Launch the new tab within the same browser.
    const newPage = await browsercontext.newPage();

    //Launch the new application with the URL : https://www.selenium.dev
    await newPage.goto('https://www.selenium.dev');

    //Go back to the previous application available in the previous tab.
    await page.bringToFront();

    //get the current browser URL.
    let currentUrl = page.url();
    console.log(currentUrl); 

    //Close the current page.
    await page.close();

    //Close all pages or tabs.
    await browserEngine.close();

});