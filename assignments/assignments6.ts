//prime number is greater than 1
//prime number is divisible by 1 and itself
//prime number start from 2
// for example - 2, 3, 5, 7, 11

//Input number to check whether it's a prime number or not
let n: number = 7;

//assume prime number initially
let prime : boolean = true;

//check whether input is less than 1 or not
if (n<=1){
    console.log ( n + " is not a prime number");
    prime = false; // set prime default to false for 0 or 1 or negative numbers
}

//check whether input is divisible by 2 or input-1
for (let i : number = 2; i < n; i++){
    if (n % i === 0) {
        // found divisor other than 1 and itself
        prime = false;
    }
}

//Final decision after checking all the divisors
if (prime) {
    console.log ( n + " Is a prime number");
} else {
    console.log (n + " Is not a prime number");
}