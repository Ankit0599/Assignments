//Xpath : Xpath is all about the XML path.

//1. Absolute Xpath : /html/body/div[1]/div[1]/a[2]/img -> (Full xpath starts with a single forward Slash. Starts from the root HTML element to the target element)
//2. Relative : starts with //

//*************** Level 1 : Basic Xpath ***************//

//Syntax 1 : //tagName[@attribute('attribute-value')];
//Syntax 2 : //tagName[text() = 'text-value];

//*************** Level 2 : Contains, Starts with ***************//

//Syntax 3 : //tagName[contains (@attribute,'partial-attribute-value')];
//Syntax 4 : //tagName[contains (text(),'partial-text-value')];
//Syntax 5 : //tagName[starts-with (@attribute,'partial-attribute-value')];
//Syntax 6 : //tagName[starts-with (text(),'partial-text-value')];

//*************** Level 3 : Combine multiple attributes and text values together by using the "and" operator ***************//

//Syntax 7 : //tagName[@attribute1 = 'attribute-value1' & @attribute2 = 'attribute-value2'];
//Syntax 8 : //tagName[@attribute = 'attribute-value' & text() ='text-value'];

//*************** Level 4 : Advanced Xpath with Realtionship ***************//

//Syntax 9 : Reference element - xpath/relationship : target - element - xpath

//Valid Relationships 
//child
//parent
//ancestor
//following-sibling
//proceeding-sibling
//following
//preceeding
// /(child)
// // (within the entire family)

//target --> sibling --> parent --> ancestor --> ancestor's sibling

//ancestor : //ul[@class = "leftmenu"]
//parent : //li
//target : //a[text() = "Services"]

//ul[@class = "leftmenu"]/child::li/child::a[text() = "Services"]
//ul[@class = "leftmenu"]//a[text() = "Services"]
//ul[@class = "leftmenu"]/li/a[text() = "Services"]
//li[text() = "Solutions"]/following-sibling::li[2]/child::a[text()="Services"]

//username text input : taking reference of username and locating the input text box 
//Syntax : //b[text() = "Username"]/parent::p/following-sibling::div[1]/child::input

//password text input : taking reference of Password and locating the input text box 
//Syntax : //b[text()="Password"]/parent::p/following-sibling::div[1]/child::input

import {test, expect} from '@playwright/test';

test('Xpath Locators Syntax', async ({page}) => {

    //launch the application
    await page.goto ('https://parabank.parasoft.com/parabank/index.html');

    //Lcoate the "Logo" Image using Syntax 1
    await page.locator ("//img[@alt = 'Parabank']");

    //Locate the "Caption" text using Syntax 2
    await page.locator ("//p[text() = 'Experience the difference']");

    //Lcoate the "Logo" Image using Syntax 3
    await page.locator ("//img[contains(@src,'logo.gif']");

    //Locate the "Caption" text using Syntax 4
    await page.locator ("//p[contains (text(),'difference')]");

    //Lcoate the "Logo" Image using Syntax 5
    await page.locator ('//img[starts-with(@src,"images/logo")]');

    //Locate the "Caption" text using Syntax 6
    await page.locator ("//p[starts-with (text(),'Experience')]");

    //Locate the "Logo" image using Syntax 7
    await page.locator ('//img[@alt = "ParaBank" and @class="logo" and @title="ParaBank"]');

    //Locate the "Caption" text using Syntax 8
    await page.locator ('//p[@class = "caption" and text() = "Experience the difference"]');

    //Locate the "Services" hyperlink using Syntax 9
    await page.locator ('//ul[@class = "leftmenu"]//a[text() = "Services"]');

});