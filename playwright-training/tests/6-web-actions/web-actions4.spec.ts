import {test, expect} from '@playwright/test';

test('Automate Frames', async ({page}) => {

//1. enter the URL and launch the application (https://demoqa.com/frames)
await page.goto('https://demoqa.com/frames');

//2. Locate the main window element
const mainwindowElement = page.locator ('h1.text-center');

//Locate the frame 
const frame = page.frameLocator('iframe#frame1');

//3. Locate the frame element
const frameElement = await frame.locator ('h1#sampleHeading');

//4. copy the text from the frame element and print
console.log ("The Frame element is : " + await frameElement.textContent());

//5. copy the text from the main window element and print
console.log ("The main window Element is : " + await mainwindowElement.textContent());

});