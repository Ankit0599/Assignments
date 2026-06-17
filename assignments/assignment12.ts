//base value (x) and exponent is initialized
let x : number  = 2.00000; //Base number
let n : number = 10; // Exponent (this can zero, positive & negative)

// Start with the default result is 1

let result : number = 1; // variable to store the result of x^n

// case when exponent is 0 = exponent of x^0 = 1

if (n===0) {
    result = 1;
}

// Case when exponent is negative
// convert the base to its reciprocal to make it positive

if (n < 0) {
    x = 1 / x; //Inverse the base
    n = -n; //make it positive
}

//multiply the base 'x' to itself 'n' times
for (let i : number = 0; i < n; i++) {
    result = result * x;
}

//to print the final result of x raised by power n
console.log (result);

