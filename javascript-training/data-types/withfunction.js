//Test Case 1 : Verify the Home Page
console.log("***********************Test Case 1 : Verify the Home Page*********************");
launchBrowserAndlogin("MicrosoftEdge");
console.log("Verify the home page is displayed or not");
logoutAndCloseBrowser();

//Test Case 2 : Verify the Account Balance
console.log("***********************Test Case 2 : Verify the Account Balance*********************");
launchBrowserAndlogin("Chrome");
console.log("Verify the home page is displayed or not");
console.log("Navigate to the account balance page");
let accountBalance = 100000;
console.log("Verify the account balance as" + accountBalance);
logoutAndCloseBrowser();


//Test Case 3 : Verify the Account statement
console.log("***********************Test Case 3: Verify the Account statement*********************");
launchBrowserAndlogin("Safari");
console.log("Verify the home page is displayed or not");
console.log("Navigate to the account statement page");
console.log("Verify that account statement is displayed with the following details :")
logoutAndCloseBrowser();


function launchBrowserAndlogin(browserName) {
    console.log("launch the "+browserName+" Browser");
    console.log("Enter the URL : https:icici.com");
    console.log("Enter the valid username as 'Ankit' and password as 'Ankit@123'");
    console.log("click on the login button");
}


function logoutAndCloseBrowser() {
    console.log("logout from the application");
    console.log("close the browser");
}

function getAccountBalance(){
    console.log("Navigate to the account balance page");
    let accountBalance = 100000;
    return accountBalance;
}

console.log(getAccountBalance());