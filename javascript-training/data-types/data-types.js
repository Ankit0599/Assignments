//Data types in javascript are divided into two different categories

//1. Primitive Datatype (Immutable)
//2. Non-Primitive Datatype (Mutable)

//Mutable vs Immutable 

//Mutable
let a=10;
a=10;
console.log(a);

//Immutable
let obj= {
    "name" : "Ankit",
    "ID" : 1234
}
obj.age=26;
console.log(obj);


//Data Type in javascript//

//*************************PRIMITIVE DATA TYPE*******************************//

//1. Number ==> the data type that we are going to use to store the number with decimals or without decimals also, without quotes.
let num1 = 10;
let num2 = 10.5;
console.log(num1);
console.log(num2);

//2. String ==> the datatype that we are going to use to store the text or characters with the help of single quotes or double quotes and backticks.
let empName = "Ankit Jeure";
let location = 'Pune';
console.log(empName);
console.log(location);

let greeting = 'He told me, "Good Morning." ';
let newgreeting = "I replied to him with, `Very Good Morning` ";
let anothergreeting = "I replied to him with, `Very Good Morning` and \"nice to meet you\"";
console.log(greeting);
console.log(newgreeting);
console.log(anothergreeting);

//backticks ==> Used to store the template literals.
let message = `New employee name is ${empName} and his location is ${location}.`;
console.log(message);


//3. boolean ==> the data type which we are going use to store the true and false values which are results of condition.
let isActive = true;
console.log(isActive);
console.log(10>5);

//4. undefined ==> represents a variable that has been declared but not assigned a value.
let age;
console.log(age);

//5. null ==> represents a variable that has been declared and assigned null value.
let salary = null;
console.log(salary);

//6. symbol ==> Represents a unique hidden identifier.

let CountryofOrigin = Symbol();
let productInfo = {
    ProductName : 'OnePlus',
    Price : 90000,
    [CountryofOrigin] : 'China'
}

console.log(productInfo);

//*************************NON-PRIMITIVE DATA TYPE*******************************//

//1. object ==> represents a collection of key-value pairs.
let person = {
    name : "Ankit Jeure",
    age  : 26,
    EmpID: 12345,
    VisaStatus : true,
    address : {
        city : "solapur",
        state : "maharashtra",
        country : "india"
    }
}

//print the name of the person
console.log(person.name);
console.log(person["name"]);

//print the country of the person
console.log(person.address.country);
console.log(person.address["country"]);

//print the complete person object
console.log(person);


//2. Array ==> represents a list of values.
let fruits = ["apple", "banana", "mango", "grapes", "kiwi"];
let prices = [10, 20, 30, 40, 50];
let fruitsandprices = ["apple",10, "banana",20, "mango",30, "grapes",40, "kiwi",50];

console.log(fruits);
console.log(prices);
console.log(fruitsandprices);
console.log(fruitsandprices[0]);//apple
console.log(fruitsandprices[1]);//price


//3. function ==> Represents block of code or collection of statements to complete particular task.
function launchBrowserAndlogin(browserName) {
    console.log("launch the "+browserName+" Browser");
    console.log("Enter the URL : https:icici.com");
    console.log("Enter the valid username as 'Ankit' and password as 'Ankit@123'");
    console.log("click on the login button");
}

//4. set ==> represents a collection od unique values of any data type.
let empIDs = new Set();
empIDs.add(123);
empIDs.add(124);
empIDs.add(124);
empIDs.add(125);
empIDs.add(126);
console.log(empIDs);
console.log(empIDs.size);

//5. map ==> A map can store multiple key value pairs. Map allow duplicate values, but they won't allow dplicate keys.
let empMap = new Map();
empMap.set(123, "Ankit");
empMap.set(124, "Bharat");
empMap.set(123, "Vijay");
empMap.set(125, "Anil");
empMap.set(126, "Anil");
empMap.set(127, "Shiv");
console.log(empMap);
console.log(empMap.get(123));
console.log(empMap.size);
empMap.delete(127);
console.log(empMap);

//6. date ==> Represents date and time in javascript.

let currentDate = new Date();
console.log(currentDate);

//current Year
console.log(currentDate.getFullYear());

//current Month
console.log(currentDate.getMonth()+1); // 0 to 11

//current Date
console.log(currentDate.getDate());

//current Hour
console.log(currentDate.getHours());

//current Minutes
console.log(currentDate.getMinutes());

//current Seconds
console.log(currentDate.getSeconds());