// Assignment: Write a program to perform the following tasks:
// 1. Count the total number of words in the sentence.
// 2. Print the sentence words in reverse order.
// 3. Convert the first character of each word to uppercase and print original sentence

// String sentence = "Java programming is fun and challenging";


console.log (" Original String Sentence : Java programming is fun and challenging");

const sentence : string = "Java programming is fun and challenging";

const words : string = sentence.split(" ");

// 1. Count the total number of words in the sentence.
console.log (" 1. Count the total number of words in the sentence : ")
console.log (" Total number of words in this sentence are : " + words.length)


// 2. Print the sentence words in reverse order.
console.log (" 2. Print the sentence words in reverse order : ")
let reverseSentence : string = " ";
for (let i : number = words.length - 1 ; i>=0 ; i--) {
    reverseSentence = reverseSentence + words [i] + " " ;
}
console.log (" Reverse sentence is : " + reverseSentence);

//3. Convert the first character of each word to uppercase
console.log (" 3. Convert the first character of each word to uppercase : ")
let uppercaseSentence : string = " ";
for (const word of words) {
    uppercaseSentence = uppercaseSentence + word.substring (0, 1).toUpperCase() + word.substring(1) + " ";
}
console.log (" Uppsercase Sentence is : " + uppercaseSentence.trim());
