// Assignment: Write a program to print * in triangle pattern
// 1. If I will pass int rows = 5 then it should print triangle with 5 Rows
// *
// **
// ***
// ****
// *****

//total number of rows
let rows : number = 5;

//outer loop controls the number of rows
for (let i : number = 1; i<=rows; i++) {
    //empty line
let line : string = "";

//Inner loop to print spaces before each stars in rows
for (let j : number = i; j<rows; j++){
    line += " ";
}

//Inner loop to print stars
for (let j : number = 1; j <= i; j++){
    line += "*";
}

console.log(line);
}

// //outer loop controls the number of rows
// for (let i : number = 1; i<=rows; i++) {
//     //empty line
// let line : string = "";

// //Inner loop to print stars
// for (let j : number = 1; j <= i; j++){
//     line += "*";
// }

// //Inner loop to print spaces before each stars in rows
// for (let j : number = i; j<rows; j++){
//     line += " ";
// }
// console.log(line);
// }
