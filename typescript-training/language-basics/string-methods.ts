//String -> It is a collection of characters written toghether within the quotation.

//1. Storing string in a variable 
let greeting : string = "Hello, world"; //double quote
let name : string =  'Jhon doe'; //single quote
let message : string = `welcome to the typescript training`; //backticks
console.log (greeting);
console.log (name);
console.log (message);

//Advantages of backticks is that we can use the string interpolation
let firstname : string = "Jane";
let lastname : string = "smith";

//old way of concatenating strings
let fullnameOld : string = firstname + " " + lastname; //using concatenating 

//new way of concatenating string using template literals 
let fullnamenew : string  = `${firstname} ${lastname}`; //using template literals for string concatenation 

console.log (fullnameOld);
console.log (fullnamenew);

//======================================= STRING METHODS =======================================

//1. Soring stirng in a variable 
console.log (" 1. Storing stirng in a variable : ");
let originalString : string  = " Username : Admin | Password : Admin1234" ;
console.log ("originalString : " + originalString + " ");

//2. Calculate the total number of characters available in the string => string.length
console.log (" 2. Calculate the total number of characters available in the string : ");
let stringlengthNumber = originalString.length
console.log (stringlengthNumber);

//3. Get the specific character from the string at specific index => string.CharAt (index);
console.log ( " 3. Get the specific character from the string at specific index : ");
let CharAtIndex5 : string = originalString.charAt(5);
console.log (CharAtIndex5);

// reverse the string 
let reverseString:string = "";
for (let i:number=stringlengthNumber-1; i>-0; i--) {
    reverseString = reverseString+originalString.charAt(i);
}
console.log (" Reverse string is : " + reverseString);
