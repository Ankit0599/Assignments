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

//4. removing unwanted spaces (begining & ending) from the string => string.trim();
console.log (" 4. removing unwanted spaces (begining & ending) from the string : ");
console.log ("OriginalString : " + originalString + " ");
console.log ("Trimmed String : " + originalString.trim() + " ");

//5. Remove all spaces from the string => string.replace(/[exp]/g, newchar);
console.log (" 5. Remove all spaces from the string :  ");
let StringwithoutSpaces = originalString.replace(/ /g, "");
console.log (StringwithoutSpaces);
    
//6. Remove all the alphabets from the string 
console.log (" 6. Remove all the alphabets from the string : ");
let stringwithoutAlphabets = originalString.replace(/[a-zA-Z]/g, "");
console.log (stringwithoutAlphabets);

//7. Remove all the numbers from the string 
console.log (" 7. Remove all the numbers from the string : ");
let stringwithoutNumbers = originalString.replace(/[0-9]/g, "");
console.log (stringwithoutNumbers);

//8. Remove all the special chars from the string 
console.log (" 8. Remove all the special chars from the string  : ");
let StringwithoutSpecialChars = originalString.replace(/[^0-9a-zA-Z]/g, "");
console.log (StringwithoutSpecialChars);

//9. converting the string to uppercase => string.toUpercase();
console.log (" 9. converting the string to uppercase : ");
let uppercaseString = originalString.toUpperCase();
console.log (uppercaseString);

//10. converting the string to lowercase => string.toLowercase()
console.log (" 10. converting the string to lowercase : ");
let lowercaseString = originalString.toLowerCase();
console.log (lowercaseString);

//11. Extract Specific part of the string based on string & ending index => string.substring (startindex, endindex+1);
console.log (" 11. Extract Specific part of the string based on string & ending index : ");
// let extractedString = originalString.substring(5, 16); //name : Adm
// console.log (extractedString);

let Username = originalString.substring (12, 18);
let Password = originalString.substring (31, 40);
console.log ("Username : " + Username);
console.log ("Password : " + Password);

//12. Extract Specific part of the string from the dynamic text => string.split(exp); => string[]
console.log (" 12. Extract Specific part of the string from the dynamic text : ");
let splitedValues : string [] = originalString.split(" ");
console.log (splitedValues[3]);
console.log (splitedValues[7]);

//13. Compare two different strings
//=== --> operater for strict equality (comparing both value and data type)
//==  --> Operator for loose equality (comparing value only, performs type coercion)(case-sensitive)
//e.g., -> 10 == "10" --> true
// 10 === "10" --> false
//includes() method for Substring Check (case-sensitive)
//startsWith() and endsWith() methods for Prefix/Suffix Check (case-sensitive)

// "10" --> can not perform mathematical operation when we are going to use double quotation on numbers.


console.log ("13. Compare two different strings : ");
let string1 : string = "Hello, World!";
let string2 : string = "hello, world!";
console.log ("using === Operator : " + (string1 === string2));
console.log ("using == Operator : " + (string1 == string2));
let string3 : string = "100"; //string
let numbervalue : number = 100; // number
console.log ("Using === Operator : " + (numbervalue===string3));
console.log ("Using == Operator : " + (numbervalue==string3));

let string4 : string = "Typescript";
console.log ("Typescript includes 'Script' : " + string4.includes("Script"));
console.log ("Typescript includes 'Script' : " + string4.includes("script"));
console.log ("Typescript starts with 'Type' : " + string4.startsWith("Type"));
console.log ("Typescript ends with 'Script' : " + string4.endsWith("Script"))


//14. Data conversions
//Converting other data type to string 
console.log ("14. Data conversions : ");
let stdCode : number = 144;
let phonenumber : number = 325325;
let stdCodeString : string = String (stdCode);
console.log (stdCodeString + phonenumber);

//Converting string to other data type
let balance  : string = "Account balance is 19,999.99 rupees";
balance = balance.replace(/[^0-9.]/g,"");
let bal : number  = parseFloat (balance);
console.log (bal>10000);