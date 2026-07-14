import {test, expect} from '@playwright/test';

test('CSS Selector Syntax', async ({page}) => {

// 1. Launch application using url (https://parabank.parasoft.com/parabank/index.htm)
await page.goto("https://parabank.parasoft.com/parabank/index.html");
await page.screenshot({path: 'screenshots/web-actions-1/Launched application.png', fullPage: true});

// 2.verify application logo is displayed
const logo = page.locator ('img.logo');
await expect(logo).toBeVisible();
console.log("Logo is displayed successfully)");

//Take the screenshot
await page.screenshot({path: 'screenshots/web-actions-1/Logo.png', fullPage: true});

// 3.Verify application caption displayed as "Experience the difference"
const caption = page.locator ('p.caption');
const expectedCaption = "Experience the difference";
const actualCaption = await caption.textContent();
await expect(expectedCaption).toBe(actualCaption);
console.log("Caption is displayed successfully)");
await page.screenshot({path: 'screenshots/web-actions-1/Caption.png', fullPage: true});

// 4.Enter invalid username
const username  = page.locator ('input[name="username"]');
await username.fill("Invalid User");
console.log("Username is displayed successfully)");
await page.screenshot({path: 'screenshots/web-actions-1/Username.png', fullPage: true});

// 5.Enter empty Password
const password = page.locator ('input[name="password"]');
await password.fill ('');
console.log("Password is displayed successfully)");
await page.screenshot({path: 'screenshots/web-actions-1/Password.png', fullPage: true});

// 6.Click on login button
const loginbutton = page.locator ('input[value="Log In"]');

//higlight the login button
await loginbutton.focus();

await loginbutton.evaluate(el=> {
    el.style.border = "5px Solid red"
});

await loginbutton.click();
console.log("Login button is clicked successfully)");
await page.screenshot({path: 'screenshots/web-actions-1/Login button.png', fullPage: true});

// 7.Verify the error message "Please enter a username and password."
const errorMesssage = page.locator ('p.error');
await expect(errorMesssage).toHaveText("Please enter a username and password.");
console.log("Error message is displayed successfully)");
await page.screenshot({path: 'screenshots/web-actions-1/Error message.png', fullPage: true});

// 8.Click on admin page link
const adminPage = page.locator ('ul[class="leftmenu"]>li>a[href="admin.htm"]');
await adminPage.click();
console.log("Admin page link is clicked successfully)");
await page.screenshot({path: 'screenshots/web-actions-1/Admin page.png', fullPage: true});

// 9.select the option "soap" from dba mode radio button
await selectDBAMode(page,'soap');
console.log("Option soap is selected successfully)");
await page.screenshot({path: 'screenshots/web-actions-1/SOAP.png', fullPage: true});

// 10.Scroll to loan provider dropdown
const loanprovider = page.locator('#loanProvider');
await loanprovider.scrollIntoViewIfNeeded();
console.log ("Scrolled to the loan provider successfully");
await page.screenshot({path: 'screenshots/web-actions-1/Loan provider.png', fullPage: true});

// 11.Select the option web service from the dropdown
await loanprovider.selectOption({label : 'Web Service'});
console.log("Option web service is selected successfully)");
await page.screenshot({path: 'screenshots/web-actions-1/Web Service.png', fullPage: true});

// 12.click on submit button
const submitButton = page.locator ('input[value="Submit"]');
await submitButton.click();
console.log ("Submit button clicked successfully");
await page.screenshot({path: 'screenshots/web-actions-1/Submit button.png', fullPage: true});

// 13.verify submission is successful by validating success message
const successMessage = page.locator ('//b[text()="Settings saved successfully."]');
await expect(successMessage).toBeVisible();
console.log("Settings saved successfully message is displayed successfully)");
await page.screenshot({path: 'screenshots/web-actions-1/Success message.png', fullPage: true});

// 14.Click on services page link
const servicePage = page.locator ('ul[class="leftmenu"]>li>a[href="services.htm"]');
await servicePage.click();
console.log("Service page link is clicked successfully)");
await page.screenshot({path: 'screenshots/web-actions-1/Service page.png', fullPage: true});

// 15.wait for service page
const bookstoreservices = page.locator ('//span[text() ="Bookstore services:"]');
await expect(bookstoreservices).toBeVisible();
console.log("Bookstore services table is displayed successfully)");
await page.screenshot({path: 'screenshots/web-actions-1/Bookstore services.png', fullPage: true});

// 16.Scroll down till bookstore services table
await bookstoreservices.scrollIntoViewIfNeeded();
console.log("Scrolled to the bookstore services table successfully)");
await page.screenshot({path: 'screenshots/web-actions-1/Bookstore services table.png', fullPage: true});

// 17.get total rows of books store services table
const rows = page.locator ('//span[text() ="Bookstore services:"]//following-sibling::table[1]//tr');
const Totalrows = await rows.count ();
console.log("Total rows of the table are :  " + Totalrows);
await page.screenshot({path: 'screenshots/web-actions-1/Bookstore services rows.png', fullPage: true});

// 18.get total columns of books store services table
const columns = page.locator ('//span[text() ="Bookstore services:"]//following-sibling::table[1]//tr[1]//td');
const Totalcolumns = await columns.count ();
console.log("Total columns of the table are :  " + Totalcolumns);
await page.screenshot({path: 'screenshots/web-actions-1/Bookstore services columns.png', fullPage: true});

// 19.Print table data (row wise and column wise data)
for (let r: number = 1; r <= Totalrows; r++) {
    for (let c: number = 1; c <= Totalcolumns; c++) {
        const cell = page.locator(`//span[text() ="Bookstore services:"]//following-sibling::table[1]//tr[${r}]//td[${c}]`);
        const cellValue = await cell.textContent();
        console.log(`Row [${r}] Column [${c}] value is :` + cellValue);
        await page.screenshot({path: `screenshots/web-actions-1/Bookstore services cell ${r}-${c}.png`, fullPage: true});
    }
}

});

async function selectDBAMode(page:any, option:string){
    const dbaMode = page.locator (`input[value="${option}"]`);
    await dbaMode.click();
}