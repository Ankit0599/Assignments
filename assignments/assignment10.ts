//Array represents the stock prices over different days
//Each element represents to the prices of the stock on that day

const prices : number [] = [7,1,5,3,6,4] ; //array

//Varibale to store the maximum pr0fit observed so far
let maxprofit : number = 0;

//Variables to store the best day to buy and sell the stock (1 - based index)
let buyday : number = 0;
let sellday : number = 0;

//outer loop : picking each day as potential day to pick as buying day
for (let i: number = 0; i < prices.length-1; i++)  {

    //Inner loop : pick each subsequent day as selling day 
    for (let j: number = i + 1; j < prices.length; j++) {

        //Calculate profit if we are buying day (i) & selling on day (j)
        const profit : number = prices [j] - prices [i];

        //if profit is greater than the current maximum profit
        if (profit>maxprofit) {

            //update maxprofit with the new current profit
            maxprofit = profit;

            //update buyday and sellday prices based on current values (based on  -1 index)
            buyday = i + 1;
            sellday = j + 1;
        }
    }
}

//printing the result
if (maxprofit>0) {
    console.log ("Max profit is : " + maxprofit);
    console.log ("Buy the share on Day : " + buyday);
    console.log ("Sell the share on Day : " + sellday);
} else {
    console.log ("You will loose your money don not buy this share.")
}

