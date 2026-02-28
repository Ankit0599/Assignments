//create an array to store student names
const StudentNames : string[]  = ["Suresh","Mahesh","Naresh"];

//create an array to store marks
const StudentMarks : number[] = [75, 80, 82];

//Variable to store total marks for average calculation
let total: number = 0;

//Create a new array to store updated marks
const UpdatedMarks : number[] = [];

//print the heading to display the updated marks
console.log ("Updated Marks : ");

//Loop through StudentMarks array using for loop
for (let i = 0; i< StudentMarks.length ; i++) {

//Add 10 marks to each student without moddifying the original array
UpdatedMarks[i] = StudentMarks[i] + 10;

//Add updated marks to toal average calculation
total += UpdatedMarks[i];

//print student names with update marks
console.log (`${StudentNames[i]} : ${UpdatedMarks[i]}`);

}

//calculate average marks
const Average = total/ UpdatedMarks.length;

//print average rounded to 1 decimal place
console.log (`Average Mark : ${Average}`); // expression interpolation which works only inside the backticks



