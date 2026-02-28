//Array of transactions : positive values represents credits and negative values represents debits
const Transactions : number [] = [50000, -2000, 3000, -15000, -200, -300, 4000, -3000];

//Varibales to store total cound and amount of credit and debits
let totalCredits : number = 0;
let totalDebits : number = 0;
let totalCreditedAmount : number = 0;
let totalDebitedAmount : number = 0;
let SuspeciousTransactions : number = 0;

//Iterate through each transaction in the array
for (const amount of Transactions) {

    if(amount > 0){
        //Credit Transaction
        totalCredits++;
        totalCreditedAmount += amount;

        //check for suspeciously large credit transactions
        if(amount > 10000){
            console.log(`Suspecious credit transaction with Amount : ${amount}`);
            SuspeciousTransactions++;
        }
    } else {
        //Debit Transaction
        totalDebits++;
        totalDebitedAmount -= amount; //conver to positive

        //Check for suspecious=ly large Debit transactions
        if(amount < -10000) {
            console.log(`Suspecious Debit transaction with Amount : ${amount}`);
            SuspeciousTransactions++;
        }
    }


}

//Final Balance
const FinalBalance : number = totalCreditedAmount - totalDebitedAmount;

//Print Summary
console.log ("-----------Transaction Summary---------------");
console.log ("Total Number of Credit tranactions : ", totalCredits);
console.log ("Total Number of Debit tranactions : ", totalDebits);
console.log ("Total Amount Credited : ", totalCreditedAmount);
console.log ("Total Amount Debited : ", totalDebitedAmount);
console.log ("Final Remaining amount in the account : ", FinalBalance);
console.log ("Total Number of Suspecious tranactions : ", SuspeciousTransactions);