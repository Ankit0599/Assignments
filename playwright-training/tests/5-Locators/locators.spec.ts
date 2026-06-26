//locator : Locator is a default playwright method to identify the location of a web element (based on the HTML tags & additionall attribute)

//Web element : element displayed within the UI (example : text box, button, hyperlink, dropdown, etc.)

//There are multiple locator strategies in playwright :
//1. getByRole() 
//2. getByLabel()
//3. getByPlaceholder()
//4. getByText()
//5. getByAltText()
//6. getByTitle()
//7. getByTestId()
//8. Locator () (Css & xpath)

//1. getByRole() : This locator method is going to help us to locate the element based on the role or nature of the element.
//Syntax : page.getByRole(Role, options);
//Example : page.getByRole('link', {"Gmail"});

//Purple : HTML tag (Nature of Web Element)
//Brown : Attribute 
//Blue : Attribute value
//Black : Text value (Text displayed in the UI)
//Anker Tag : It is having hyperlink

//*
//* role = 'text box' for text box 
//* role = 'button' for button
//* role = 'link' for hyperlink
//* role = 'combobx' for dropdown
//* role = 'checkbox' for checkbox
//* role = 'radio' for radio button
//* role = 'switch' for toggle button
//* role = 'heading' for heading 
//* role = 'list' for list
//* role = 'listitem' for listitem
//* 

//2. getByLabel() : you need to identify the label of the element and you need to use it as a locator.
//Syntax : page.getByLabel ('Label-text-value');
//Example HTML : <label class = "form-label" id="dateof-birth-label">Date of Birth</label>
//Locator Example : page.getByLabel ('Date of Birth');

//3. getByplaceholder() : placeholder attribute value of the element.
//Syntax : page.getByPlaceholder('Placeholder-text-value');
//Example HTML : <input type = "text", placeholder = "Enter Your Name">
//Locator example : page.getByPlaceholder ('Enter your name');

//4. getByText() : Text content of the element 
//Syntax : page.getByText('text-content-value');
//HTMl Example : <button> submit </button>
//Locator Example : page.getByText('Submit');

//5. getByAltText() : alt attribute value of the element.
//Syntax : page.getByAltText ('alt-text-value);
//HTML Example : <img src="//www.jockey.in/cdn/shop/files/JOCKEY_150TH_LOGO_2.webp?v=1775798814&amp;width=200" alt="Jockey India" srcset="//www.jockey.in/cdn/shop/files/JOCKEY_150TH_LOGO_2.webp?v=1775798814&amp;width=90 90w, //www.jockey.in/cdn/shop/files/JOCKEY_150TH_LOGO_2.webp?v=1775798814&amp;width=135 135w, //www.jockey.in/cdn/shop/files/JOCKEY_150TH_LOGO_2.webp?v=1775798814&amp;width=180 180w" width="90" height="50.0" loading="lazy" class="header__heading-logo motion-reduce" sizes="(max-width: 180px) 50vw, 90px">
//Locator example : page.getByAltText('Jockey India');

//6. getByTitle() : title attribute value of the element.
//Syntax : page.getByTitle('Title-text-value');
//HTML example : <a href = "#"title = "HomePage"> </Home>
//Locator Example : page.getByTitle('Home Page');

//7. getByTestId() : data-test id attribute value of the element 
//Syntax : page.getByTestId('test-id-value');
//HTML example: <div data-test id = "user profile"> user profile </div>
//Locator Example : Page.getByTestId('User-Profile');

//8. Locator : locator method will be used to locate the element by using CSS seletor or xpath.