// conditional statements ==> statements along with conditions.
// statements ==> Line of Code.

// (condition) {
// console.log("Line 1");
// console.log("Line 2");
// console.log("Line 3");
// console.log("Line 4");
// console.log("Line 5");
// console.log("Line 6");
// }

// condiiton --> if this condition is true then only it will execute these line of code otherwise it will skip it.






let percentage: number = 91;
if (percentage > 75) {
    console.log("You got the Distinction");
    if (percentage > 90) {
        console.log ("You have won the Gold Medal...Congrats");
    } else {
        console.log ("You are not eligible for Gold Medal")
    }
}else if ( percentage > 60) {
    console.log ("You got the First Class");
}else if (percentage > 50){
    console.log ("You got the Second Class");
}else if (percentage > 35) {
    console.log ("You are Passed");
}else {
    console.log ("You are failed");
}