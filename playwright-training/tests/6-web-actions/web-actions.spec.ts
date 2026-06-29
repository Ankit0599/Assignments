import {test, expect} from '@playwright/test';

test('CSS Selector Syntax', async ({page}) => {

    //launch the application
    await page.goto ('https://www.google.com/');

    //Verify application launched successfully by using title
    await expect(page).toHaveTitle('Google');

    //Locate the element
    let element = page.locator("a[alt='image']");

    /*=============================================================
                    Common Web Element Actions 
    =============================================================*/

    //Check if the element is visible
    await expect(element).toBeVisible();

    //Check if the element is enabled 
    await expect(element).toBeEnabled();

    //Check if the element is checked (If it is a checkbox or radio button)
    await expect(element).toBeChecked();

    //Check if the element is hidden
    await expect(element).toBeHidden();

    /*=============================================================
                    Button Web Element Actions 
    =============================================================*/
    
    //Locate the button
    let button = page.locator("Button#login");

    //Verify the label of the button
    let Actualbuttontext  = await button.textContent(); //if the label is added as a text value
    let ActualbuttonValue = await button.getAttribute('value'); //if the label is added as a attribute value

    await expect(Actualbuttontext).toBe('login');
    await expect(ActualbuttonValue).toBe('login');

    //Direct assertions without storing the value in a variable
    await expect(button).toHaveText('Login');
    await expect(button).toHaveAttribute('value',"Login");

    //Click on the button
    await button.click();

    //Double click on the button
    await button.dblclick();

    //right click on the button
    await button.click({button : 'right'});

    //hover on the button
    await button.hover();

    //Drag and drop the button
    let source = page.locator('#source');
    let tagret = page.locator('#target');
    await source.dragTo(tagret);

    //Scroll till the button is displayed
    await button.scrollIntoViewIfNeeded();

    //Force click on the button
    await button.click({force : true});

    /*=============================================================
                    TextBox Web Element Actions 
    =============================================================*/

    //Locate the textbox element
    let textbox = page.locator("input#username");

    //Clear the existing text from the box
    await textbox.clear();

    //verify the placeholder of the textbox
    let actualPlaceholder = await textbox.getAttribute('Placeholder');
    await expect (actualPlaceholder).toBe('Enter your Username');

    //Type the text into textbox
    await textbox.fill('testuser');

    //Press keys like Enter into the textbox
    await textbox.press('Enter');

    //Verify the value entered into the textbox
    await expect(textbox).toHaveValue('testuser');

    /*=============================================================
                    Dropdown Web Element Actions 
    =============================================================*/

    //Locate the dropdown element
    let dropdown  = await page.locator('Select#country');

    //Select an option from the dropdown
    await dropdown.selectOption({label : 'Option 1'}) ; //by visible text
    await dropdown.selectOption({value : 'option 1'}); //By value
    await dropdown.selectOption({index : 0}); //By index

    //Verify if the dropdown is multi-select
    let MultiSelect = await dropdown.getAttribute('multiple') !== null;
    await expect (MultiSelect).toBe(true);

    //Select an option from the dropdown
    await dropdown.selectOption({label : 'Option 1'}) ; //by visible text
    await dropdown.selectOption({value : 'option 1'}); //By value
    await dropdown.selectOption({index : 0}); //By index

    //De-Select an option from the dropdown
    await dropdown.selectOption({label : 'Option 1'}) ; //by visible text
    await dropdown.selectOption({value : 'option 1'}); //By value
    await dropdown.selectOption({index : 0}); //By index

    //Verify the selected option from the dropdown
    let SelectedOption = await dropdown.inputValue();
    await expect(SelectedOption).toBe('Option 1');

    //verify total options available in the dropdown
    let totalcount = await dropdown.locator('option').count();
    await expect(totalcount).toBe(3);

    //verify the options available in the dropdown
    let Optiontext = await dropdown.locator('option').allTextContents();
    await expect (Optiontext).toEqual(['Option 1', 'Option 2', 'Option 3']);

    /*=============================================================
                    Checkbox Web Element Actions 
    =============================================================*/

    //locate the checkbox element
    let Checkbox = await page.locator('input#subscribe');

    //Check the checkbox only if it is not already checked
    if (!(await Checkbox.isChecked())){
        await Checkbox.check();
    }

    /*=============================================================
                    Radio Button Web Element Actions 
    =============================================================*/

    //locate the Radio button element
    let RadioButton = await page.locator('input[name = ""]');

    //Check the Radio Button
    await RadioButton.check(); //--> Selected radio button option can not be unchecked until you select another option from the same group of radio buttons

    /*=============================================================
                    Image Web Element Actions 
    =============================================================*/

    //locate the Image element
    let Image = await page.locator('img#logo');

    //verify the image is visible
    await expect(Image).toBeVisible();

    //Verify the image source to identify whether it is valid or not
    let imagesrc  = await Image.getAttribute('src');
    await expect (imagesrc).toBe('expected-image-source.png');

    //Verify the image size
    const ImageSize = await Image.boundingBox();
    const width = ImageSize?.width;
    const heigth = ImageSize?.height;
    await expect(width).toBe(100);
    await expect(heigth).toBe(50);

    //Verify the image position
    const ImagePosition = await Image.boundingBox();
    const x = ImagePosition?.x;
    const y = ImagePosition?.y;
    await expect(x).toBe(10);
    await expect(y).toBe(20);

    /*=============================================================
                    Hyperlink Web Element Actions 
    =============================================================*/

    //Locate the hyperlink element
    let hyperlink = await page.locator("a#learn-more");

    //verify the hyperlink (method 1)
    await expect(hyperlink).toHaveAttribute('href', 'expected-link.html');

    //verify the hyperlink by click on link & verify url (method 2)
    await hyperlink.click();
    await expect(page).toHaveURL('https://www.google.com');

    /*=============================================================
                    Text/Label Web Element Actions 
    =============================================================*/

    //Locate the Text/label element
    let textLabel = await page.locator("label[for = 'Username']");

    //Verify the text/label element
    let labelfortext = await textLabel.textContent(); //if the label is added as text value
    await expect(labelfortext).toBe('Username : ');

    let labelforAttribute  = await textLabel.getAttribute("for"); //if the label is added as attribute value
    await expect(labelforAttribute).toBe('Username : ')


    /*=============================================================
                    Text/Label Web Element Actions 
    =============================================================*/

    //Locate the file uplaod element
    let fileupload = await page.locator('Input#file-upload');

    //Upload a file
    await fileupload.setInputFiles('path/to/file.txt');

    // //Download a file
    // const fs = reuire ('fs');
    // const downloadpath = 'path/to/downloadds', fileupload.getAttribute('download');
    // if (!fs.existsSync(downloadpath)){
    //     console.log("File Downloaded successfully");
    // }

    // //Delete a file
    // downloadpath = 'path/to/downloadds'+fileupload.getAttribute('download');
    // fs.unlinkSync(downloadpath);

});