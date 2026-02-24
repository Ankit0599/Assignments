// Create common function and then based on below details, print whether user is eligible to get the loan
// or not
// customerName = "John Doe";
// creditScore = 720;
// income = 55000.0;
// isEmployed = true;
// debtToIncomeRatio = 35.0;

// 1. Credit Score:
// o If the credit score is above 750, the loan is automatically approved.
// o If the credit score is between 650 and 750, additional checks are performed.
// o If the credit score is below 650, the loan is denied.

let creditScore : number = 720;
if (creditScore > 750){
    console.log ("Your Loan is approved");
}else if (creditScore >= 650 && creditScore <= 750){
    console.log ("Additonal Check are required");
} else {
    console.log ("Your loan is denied (low Credit score");
}

// 2. Income:
// o For credit scores between 650 and 750, the customer’s income must be at least $50,000
// for the loan to be considered.

let Income : number = 55000.0;
let creditScore1 : number = 720;
if (creditScore1 > 750) {
    console.log ("Your loan is aaproved");
} else if (creditScore1 >= 650 && creditScore1 <= 750) {
    if (Income >= 50000) {
    console.log ("Your loan is considered (Income Criteria Met)");
    } else {
        console.log ("Your loan is not considered (Income criteria Not met)");
    }
} else {
    console.log ("Your loan is denied (Low Credit Score)")
}

// 3. Employment Status:
// o If the customer’s income is at least 50,000, the system checks whether the customer is
// employed.
// o If the customer is unemployed, the loan is denied.

let creditScore2 : number = 720;
let income : number = 55000.0;
let isEmployed : boolean = true;
if (creditScore2 > 750) {
    console.log ("Your loan is approved");
} else if (creditScore2 >= 650 && creditScore2 <= 750){
    if (income >= 50000) {
        if (isEmployed) {
            console.log ("Loan approved (Income and Employement Verified)");
        } else {
            console.log ("Loan is denied (Customer is unemployed)");}
    } else {
        console.log ("Loan is denied (Income is below $50000)");
    }
} else {
    console.log ("Your loan is denied (Low Credit Score)");
}

// 4. Debt-to-Income Ratio:
// o If the customer is employed, the system checks the debt-to-income (DTI) ratio.
// o If the DTI ratio is less than 40%, the loan is approved.
// o If the DTI ratio is 40% or greater, the loan is denied.

let creditScore3 : number = 720;
let income2 : number = 55000.0;
let isEmployed1 : boolean = true;
let debtToIncomeRatio = 35.0;
if (creditScore3 > 750) {
    console.log ("Your loan is approved");
} else if (creditScore3 >= 650 && creditScore3 <= 750){
    if (income2 >= 50000) {
        if (isEmployed1) {
            if (debtToIncomeRatio<40) {
                console.log ("Loan approved (Income, Employement and debtToIncomeRatio Verified)");
        } else {
            console.log ("Loan is denied (debtToIncomeRatio is Higher)");
        } 

        } else {
            console.log ("Loan is denied (Customer is unemployed)");
        }

    } else {
        console.log ("Loan is denied (Income is below $50,000)");
    }

} else {
  console.log("Your loan is denied (Low credit score)");
}