// Assignment: Write a program to search for all occurrences of a “Java” word in the paragraph and print their
// indexes.
// 1. Find total number of occurrences
// 2. Print count and Indexes of the word

// String paragraph = "Java is a popular programming language. Java is used for web
// development, mobile applications, and more.";

const paragraph : string [] = "Java is a popular programming language. Java is used for web development, mobile applications, and more.";
 
const words : string [] = paragraph.split(" ");

//get the count and index of java word

let count : number  = 0;

for (let i : number = 0; i <words.length; i++) {
    if (words[i].toLowerCase () === "java") {
        console.log("java word is present in the array with index : " + i);
        count++;
    }
}

console.log (" Total words with java are : " + count);