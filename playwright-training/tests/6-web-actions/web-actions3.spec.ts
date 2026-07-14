//Alerts

import {test, expect} from '@playwright/test';

test('Automate alerts', async ({page}) => {

//1. enter the URL and launch the application (https://demoqa.com/alerts)
await page.goto('https://demoqa.com/alerts')

//2. click alert buttons to trigger alerts.
const informationAlert = page.locator ('button#alertButton');
const confirmationAlert = page.locator ('button#confirmButton');
const prompAlert = page.locator ('button#promtButton');

//3. click on the information alert and copy the alert message and then select Ok button.
page.once('dialog', async dialog => { 

    //Copy the alert message and print 
    console.log ("Information Alert message is : " + await dialog.message());

    //Select ok Button
    await dialog.accept();

});

//trigger the Information alert
await informationAlert.click();

//wait for 10 sec
await page.waitForTimeout(10000);

//4. click on the confirmation alertc, copy the alert message and select the Cancel button.

page.once('dialog', async dialog => { 

    //Copy the alert message and print 
    console.log ("Confirmation Alert message is : " + await dialog.message());

    //Select cancel Button
    await dialog.dismiss();

});

//trigger the Information alert
await confirmationAlert.click();

//wait for 10 sec
await page.waitForTimeout(10000);

//5. click on prompt alert, copy the alert message, enter the text and select OK button.


page.once('dialog', async dialog => { 

    //Copy the alert message and print 
    console.log ("Prompt Alert message is : " + await dialog.message());

    //Enter the text and Select ok Button
    await dialog.accept('Bharat tech Academy');

});

//trigger the Information alert
await prompAlert.click();

//wait for 10 sec
await page.waitForTimeout(10000);

});