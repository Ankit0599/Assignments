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
