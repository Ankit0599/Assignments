//Css Selector syntax

//Syntax 1 : tagName#id
//Syntax 2 : tagName.ClassName
//Syntax 3 : tagName[attribute = 'attribute-value']
//Syntax 4 : tagName[attribute *= 'attribute-value'] // * means contains
//Syntax 5 : tagName[attribute ^= 'attribute-value'] // ^ means starts with
//Syntax 6 : tagName[attribute $= 'attribute-value'] // $ means ends with
//Syntax 7 : tagName[attribute1 = 'attribute-value1'] [attribute2 = 'attribute-value2'] //Multiple attributes 
//Syntax 8 : Advanced Css Selectors with realtionships
//Syntax : Locator : ancestor > parent > child 

//target : a[href="services.htm"]
//Parent : li
//Ancestor : ul [class = "leftmenu"]
//Locator : ul [class = "leftmenu"] > li > a[href="services.htm"]

import {test, expect} from '@playwright/test';

test('CSS Selector Syntax', async ({page}) => {

    //launch the application
    await page.goto ('https://www.google.com/');

    //Locate the "Google Search" text box using syntax 1
    await page.locator('textarea#APjFqb');

    //Locate the "Google Search" text box using syntax 2
    await page.locator ('textarea.gLFyf');

    //Locate the "Google Search" text box using syntax 3
    await page.locator ('textarea.[title="Search"]');

    //Locate the "How Search Works" hyperlink using syntax 4
    await page.locator ('a[href*="howsearchwork"]');

    //Locate the "Google Search" button using syntax 5
    await page.locator ('input[aria-label^="Google"]');

    //Locate the "Google Search" text box using syntax 6
    await page.locator ('input[aria-label$="Search"]');

    //Locate the "Google Search" text box using syntax 7
    await page.locator ('textarea[title="Search"][aria-label="Search"]');

    //Locate the "Google Search" text box using syntax 8
    await page.locator ('ul [class = "leftmenu"] > li > a[href="services.htm"]');
});