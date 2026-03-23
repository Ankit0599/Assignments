//Array Methods:

//Array : An array is a collection of multiple values.

//1. Creating an array 
console.log ("Creating an array :");
let fruits : string [] = ["Apple", "Banana", "Cherry"];
let numbers : number [] = [1, 2, 3, 4, 5];
console.log(fruits);
console.log(numbers);

//2. Accessing the array
console.log ("Accessing the array elements : ");
console.log (fruits[1]);// Banana
console.log (numbers[2]);// 3

//3. Adding additional values to the exisitng array at the end 
console.log (" Adding additional values to the exisitng array at the end : ");
numbers.push (6); // push - to add additional value in the array at the end 
console.log (numbers);

//4. Removing the last element from the array
console.log ("Removing the last element from the array : ");
numbers.pop();// pop - to remove the last element from the array 
console.log (numbers);

//5. Adding additional values to the esiting array at the begining 
console.log ("Adding additional values to the esiting array at the begining : ");
numbers.unshift (0); //unshift - to add additional value the at the begining of the array 
console.log (numbers);

//6. Removing the first element from the array
console.log ("Removing the first element from the array : ");
numbers.shift (); // shift - to remove the first element from the array
console.log (numbers);

//7. Add or Remove one or more values within the array from a specific index.
console.log ("Add or Remove one or more values within the array from a specific index : ");
numbers.splice (2, 2, 2.5, 3.5); // splice (index, number of values to removed, values to be added)
console.log (numbers);

//8. Creating new array by extracting a portion of an esiting array
console.log ("Creating new array by extracting a portion of an esiting array : ");
let extracted_values = numbers.slice (2, 3);// slice - (start index, end index+1)
console.log (numbers);

//9. Merge two or more arrays and create a new array
console.log ("Merge two or more arrays and create a new array : ");
let numbers1: number [] = [1, 2, 3, 4];
let numbers2: number [] = [5, 6, 7, 8];
let numbers3: number [] = [9, 10, 11, 12];
let mergedarray : number [] = numbers1.concat(numbers2).concat(numbers3);
console.log(mergedarray);

//10. finding the index of a specific value within the array
console.log ("finding the index of a specific value within the array : ");
let indexofBanana = fruits.indexOf("Banana");
let indexofwatermelon= fruits.indexOf("Watermelon");
console.log(indexofBanana);
console.log(indexofwatermelon);

//11. Iterate the values of the array
console.log ("Iterate the values of the array : ");
for (let fruit of fruits) {
    console.log (fruit);
}

//12. Reverse the values within the array
console.log ("Reverse the values within the array : ");
let num : number [] = [1, 2, 3, 7, 4, 5, 6, 10];
console.log (num.reverse());

//13. Sort the values within the array 
console.log ("Sort the values within the array  : ");
num.sort((a,b)=> a-b); //asscending order
console.log(num);
console.log(num.sort((a,b) => b-a)); //decending order

//14. special lambda expression in array (map -> manipulate, filter -> reduce, foreach -> iterate value)
let input : number [] = [1, 2, 3, 4, 5, 6];

//Map -> get the square of each & every number 
let squareNumbers = input.map (x => x * x);
console.log (squareNumbers);

//filter -> print only event numbers from the list
let evenNumbers = input.filter (x => x%2 ===0);
console.log (evenNumbers);

//foreach -> loop each & every values from array
input.forEach(x => console.log(x));

