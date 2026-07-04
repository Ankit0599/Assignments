import {test, expect} from '@playwright/test';

test('Automate web form', async ({page}) => {

//1. enter the URL and launch the application (https://demoqa.com/automation-practice-form)
await page.goto ('https://demoqa.com/automation-practice-form');

//2. wait for page to load
const PageHeader = page.locator('h1.text-center');
await expect(PageHeader).toBeVisible();

//3. enter the first name and last name
const firstName = page.locator ('input#firstName');
await (firstName).fill("Ankit");

const lastName = page.locator ('input#lastName');
await (lastName).fill("Jeure");

//4. enter the email address
const Email = page.locator('input#userEmail');
await (Email).fill ('ankitrj56789@gmail.com');

//5. select the gender(male)
await selectGender (page, 'Male');

//6. enter the mobile number
const mobile = page.locator('input#userNumber');
await (mobile).fill('9890730509');

//7. select the date of birth (1 feb 1991)
await selectDateofBirth (page, '1', 'February', '1991');

//8. search and select computer science and english
let subjects: string[]= ["Computer Science" , "English"];
await selectSubjects (page, subjects);

//9. select the hobbies as sports and reading
let Hobbies: string[]= ["Sports", "Reading"];
await selectHobbies (page, Hobbies);

//10. upload the picture
const uploadbut = page.locator('input#uploadPicture');
const filepath = "Photos/4july2026.png"
await (uploadbut).setInputFiles(filepath);

//11. submit the details
const submitBut = page.locator('button#submit');
await submitBut.click();

//take screenshot of the page after submission
await page.screenshot({path: 'screenshots/web-actions-3/submit.png', fullPage: true});

});

async function selectGender (page:any, option:string){
    const gender = page.locator(`//label[text()="${option}"]`);
    await gender.click();
}

async function selectDateofBirth (page:any, date:string, month:string, year:string) {
    
    //launch the calender
    const calender = page.locator ('input#dateOfBirthInput');
    await calender.click();

    //Select the month value
    const monthDrop = page.locator ('select.react-datepicker__month-select');
    await monthDrop.selectOption({label : month});
    

    //Select the year value
    const yearDrop = page.locator ('select.react-datepicker__year-select');
    await yearDrop.selectOption({label : year});

    //Select the date element
    const dateEle = page.locator (`//div[text()="${date}" and contains(@aria-label, "${month}")]`);
    await dateEle.click();
}


async function selectSubjects (page:any, subjects:string[]){

    //select the subject input field and click on it
    const subjectInput = page.locator('div[class*="subjects-auto-complete__input-container"]');
    await subjectInput.click();

    //Select each subject and select from the suggestion
    for (let subject of subjects){

        //fill the subject name
        const subjectInput = page.locator('input#subjectsInput');
        await subjectInput.fill(subject);

        //press the enter button
        await subjectInput.press('Enter');
    }
}

async function selectHobbies (page:any, Hobbies:string[]){

    for (let hobby of Hobbies) {

        //Locate the hobby element 
        const hobbyEle = page.locator(`//label[text()="${hobby}"]/preceding-sibling::input`);

        //check hobby element is selected
        if(!await hobbyEle.isChecked()){
            await hobbyEle.click();
        }
        
    }
}