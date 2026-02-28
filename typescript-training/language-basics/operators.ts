//Operators in TypeScript : Set of special characters that we are going to use in our TypeScript programming language to perform different types of operations. 

//There are mainly five different types of operators available: 

//1. Arithmetic operators ==> The special characters used in mathematical operations. (+,-,*,/,%,++,--)
//2. Assignment operators==>The special characters used to assign a value to a variable. (=,+=,-=,*=,/=,%=)
//3. Comparison operators==>The special characters used to compare two values. (==,===,!=,!==,>,<,>=,<=)
//4. Logical operators==>The special characters used to perform logical operations. (&&,||,!)
//5. Ternary operator ==> The special character used to perform a conditional operation. (condition ? expression1 : expression2)


//1. Arithmetic operators ==> The special characters used in mathematical operations. (+,-,*,/,%,++,--)
//+ addition
//- subtraction
//* multiplication
/// division
//% modulus (remainder) 
//++ increment (x++ ==> post increment, ++x ==> pre increment)
//-- decrement (x-- ==> post decrement, --x ==> pre decrement)

let a: number = 20;
let b : number = 15;
console.log ("Addition :" + (a+b)); //35
console.log ("subtraction :" + (a-b)); //5
console.log ("multiplication :" + (a*b)); //300
console.log ("division :" + (a/b)); //1.3
console.log ("modulus :" + (a%b)); //5

//++  ==> +1 ==> x++ ==> x = x + 1;
//--  ==> -1 ==> x-- ==> x = x - 1;

console.log ("Post Increment : " + (a++)); //Post execution of this line, increase the value by 1
console.log ("After next line of post increment : " + a);

console.log ("Pre-Increment : " + (++a)); //Before execution of this line, increase the value by 1

console.log ("Post Decrement : " + (a--)); //Post execution of this line, decrease the value by 1
console.log ("After next line of post Decrement : " + a);

console.log ("Pre-Increment : " + (--a)); //Before execution of this line, decrease the value by 1


//2. Assignment operators==>The special characters used to assign a value to a variable. (=,+=,-=,*=,/=,%=)
let c:number  = 25 // assignment operator
console.log ("Initial value of c : " + c); // 25
c+=10; // c = c+10;
console.log ("c+=10 initial value of c : " + c ); // 35
c-=10; // c= c-10;
console.log ("c-=10 Initial value of c : " + c); // 25
c*=10; // c= c*10;
console.log ("c*=10 Initial value of c : " + c); // 250
c/=10; // c= c/10;
console.log ("c/=10 Initial value of c : " + c); // 25


//3. Comparison operators==>The special characters used to compare two values. (==,===,!=,!==,>,<,>=,<=)
// == represents loose equality ==> It will just check value without considering the data type.
// === represents strict equality ==> It will check value as well as data type.
let x: number = 10;
let y: any = "10";
console.log ("Looose equality with == : " + (x==y));
console.log ("Strict equality with === : " + (x===y));

console.log ("Looose equality with != : " + (x!=y));
console.log ("Strict equality with !== : " + (x!==y));


//4. Logical operators==>The special characters used to perform logical operations. (&&,||,!)
//&& (Logical AND) ==> represents results will be true only when all the conditions are true.
//|| (Logical OR) ==> represents results will be if any of the condition is true.
//! (Logical Not) ==> represents opposite results

let i: number = 10;
let j: number = 20;

console.log ((i<j) && (i==j)); // true and false => false
console.log ((i<j) || (i==j)); // true or false => true
console.log (!(i<j) || (i==j)); // not (true or false) => not true => false

//5. Ternary operator ==> The special character used to perform a conditional operation. 
// (condition ? expression1 : expression2)
let age: number = 18;
let canvote = (age>=18) ? "Eligible to Vote" : "Not-Eligible to Vote";
let eligible = (age>=18) ? "true" : "false";
console.log (canvote);
console.log (eligible);
