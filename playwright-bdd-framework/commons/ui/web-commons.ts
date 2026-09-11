import {expect, Locator, Page, selectors} from '@playwright/test';

export class WebCommons {
    page: Page;

    //constructor method to provide correct browser tab details to perform the actions.
    constructor(page: Page) {
        this.page = page;
    }

    //common method to generate web elenment from the locator 
    element(selectors : string) : Locator {
        return this.page.locator(selectors);
    }

    //common method to launch the application and verify the title
    async launchapplication(url: string, title?: string) {
        await this.page.goto(url);
        if (title) {
            await expect(this.page).toHaveTitle(title);
        }
    }

    //common method to scroll to the web element
    async scrollToElement(selectors:string) {
        await this.element(selectors).scrollIntoViewIfNeeded();
    }

    //common method to click on the web element
    async clickElement(selectors:string){
        await this.scrollToElement(selectors);
        await this.element(selectors).click();
    }

    //common method to double click on the web element 
    async doubleClickElement (selectors:string){
        await this.scrollToElement(selectors);
        await this.element(selectors).dblclick();
    }

    //common method to right click on the web element 
    async rightClickElement (selectors:string){
        await this.scrollToElement(selectors);
        await this.element(selectors).click({ button : "right" });
    }

    //common method to hover on the web element 
    async hoverOnElement (selectors:string){
        await this.scrollToElement(selectors);
        await this.element(selectors).hover();
    }

    //common method to force click on the web element 
    async forceClickElement (selectors:string){
        await this.scrollToElement(selectors);
        await this.element(selectors).click({ force : true});
    }

    //common method to click and hold the web element
    async clickAndHoldElement (selectors : string){
        await this.scrollToElement(selectors);
        const elementHandle = await this.element(selectors).elementHandle();
        if (elementHandle){
            await elementHandle.hover();
            await this.page.mouse.down();
        }
    }

    //common method to release click on web element
    async releaseClick (selectors:string){
        await this.page.mouse.up();
    }

    //common method to clear the entered text from the textbox
    async clearTextBox (selectors:string){
        await this.scrollToElement(selectors);
        await this.element(selectors).clear();
    }

    //common method to enter text from the textbox
    async enterText (selectors:string, text:string){
        await this.clearTextBox(selectors);
        await this.element(selectors).fill(text);
    }

    //common method to select the option from the drop-down
    async selectOption (selectors: string, option:string){
        await this.scrollToElement(selectors);
        await this.element(selectors).selectOption(option);
    }

    //common method to check the checkbox only it is already not checked
    async checkCheckBox (selectors : string){
        await this.scrollToElement(selectors);
        const isChecked = await this.element(selectors).isChecked();
        if(!isChecked){
            await this.element(selectors).check();
        }
    }

    //common method to uncheck the checkbox only it is already not checked
    async uncheckCheckBox (selectors : string){
        await this.scrollToElement(selectors);
        const isChecked = await this.element(selectors).isChecked();
        if(isChecked){
            await this.element(selectors).uncheck();
        }
    }

    //common method to check the radio button
    async checkRadioButton (selectors : string) {
        await this.scrollToElement(selectors);
        await this.element(selectors).check();
    }

    //common method to extract text value from the web element
    async getText (selectors : string) : Promise<string | null> {
        await this.scrollToElement(selectors);
        return await this.element(selectors).textContent();
    }

    //common method to extract attribute value from the web element
    async getAttribute (selectors : string, attributeName : string) : Promise<string | null> {
        await this.scrollToElement(selectors);
        return await this.element(selectors).getAttribute(attributeName);
    }

    //common method to upload the files
    async uploadFiles (selectors : string, filePath : string) {
        await this.scrollToElement(selectors);
        await this.element(selectors).setInputFiles(filePath);
    }

    //common method to check the visibility of the web element
    async isElementVisible (selectors:string){
        await this.element(selectors).isVisible();
        // await expect(this.element(selectors)).toBeVisible();
    }
    
    //common method to verify the element is enabled or not
    async isElementEnabled (selectors : string) {
        await expect(this.element(selectors)).toBeEnabled();
    }

    //common method to verify text value of the web element
    async isTextValueCorrect (selectors : string, expectedText:string){
        await expect(this.element(selectors)).toHaveText(expectedText);
    }

    //common method to verify attribute value of the web element
    async isAttributeValueCorrect (selectors : string, expectedAttribute:string){
        await expect(this.element(selectors)).toHaveAttribute(expectedAttribute);
    }
    
    //common method to verify the web element is not visible
    async isElementNotVisible (selectors : string) {
        await expect(this.element(selectors)).toBeHidden();
    }

    //common method to deal with alerts
    async handleAlert (action : string) {
        this.page.on("dialog" , async (dialog) => {
            if (action === "accept"){
                await dialog.accept();
            }
            if (action === "dismiss"){
                await dialog.dismiss();
            }
        })
    }


}