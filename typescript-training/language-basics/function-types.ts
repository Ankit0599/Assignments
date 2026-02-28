// Function Types in TypeScript

// There are mainly three different types of functions that will be used in JavaScript and TypeScript. 

// 1. Named functions 
// 2. Arrow functions / lambda functions
// 3. Anonymous function


// 1. Named functions 
// Named functions are nothing but the functions that are declared explicitly with some name. 

// Syntax: 

// function functionName (parameters) : ReturnType {
//     statements
// }

function greeting (name : string) : string {
    return "hello, " +name+ " Good Morning";
}
//calling the function 
console.log (greeting ("Ankit"));


// 2. Arrow functions / lambda functions
// Arrow functions are nothing but the function that we are going to write without any name. And the implementation will be written by using arrow mark. 
// Syntax: 

// let functionName = (parameters) : returntype => Implementation ;

//regular function 

function add(a: number, b:number){
    let c:number = a+b;
    return c;
}
//calling the function
console.log (add(10,20));

//arrow function
let sum = (a:number, b:number) : number => a+b;
let greet = (name:string) : void => console.log("hello ",+name+"good morning");
let currentYear = () : number => new Date().getFullYear();

//callling the function
console.log (sum(20, 45));
console.log ("Virat");
console.log (currentYear());


// 3. Anonymous function