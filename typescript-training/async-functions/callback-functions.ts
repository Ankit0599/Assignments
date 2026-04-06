// three Important things -->
// 1. Async fucntions
// 2. Await functions
// 3. Callback functions


// 1. Callback functions :
// funtions to get sum of numbers 

function sumofNumbers (input : number) : number {
    let sum = 0;
    for (let i=0; i<=input; i++){
        sum+=i;
    }
    return sum;
}

//Normal execution Flow
// console.log("Start of the program : ");
// console.log("Step 1 : Executed");
// console.log("Step 2 : Executed");
// let result = sumofNumbers (10000000000);
// console.log("Step 3: Executed and the result is : " + result);
// console.log("Step 4 : Executed");
// console.log("Step 5 : Executed");
// console.log("Step 6 : Executed");
// console.log("End of the program.");

//callback function
console.log("Start of the program : ");
console.log("Step 1 : Executed");
console.log("Step 2 : Executed");
setTimeout ( () : void => {
    let result = sumofNumbers (10000000000);
    console.log ("Step 3 : Executed and the result is : " + result);
}, 3000)
console.log("Step 4 : Executed");
console.log("Step 5 : Executed");
console.log("Step 6 : Executed");
console.log("End of the program.");


