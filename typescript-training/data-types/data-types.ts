//syntax to store the data in typescript.

//syntax :
// VariableDeclaration variable:dataType = value;

//There are two types of data types are present in tyepscript
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


//Data Type in typescript//

//*************************PRIMITIVE DATA TYPE*******************************//

//1. Number ==> the data type that we are going to use to store the number with decimals or without decimals also, without quotes.
let num1: number = 10;
let num2: number = 10.5;
console.log(num1);
console.log(num2);

//2. String ==> the datatype that we are going to use to store the text or characters with the help of single quotes or double quotes and backticks.
let empName: string = "Ankit Jeure";
let location: string = 'Pune';
console.log(empName);
console.log(location);

//backticks ==> Used to store the template literals.
let message : string = `New employee name is ${empName} and his location is ${location}.`;
console.log(message);


//3. boolean ==> the data type which we are going use to store the true and false values which are results of condition.
let isActive : boolean = true;
console.log(isActive);
console.log(10>5);

//4. undefined ==> represents a variable that has been declared but not assigned a value.
let age1;
console.log(age1);

//union type : Represents more than one data type allowed within the variable.

let empAddress : string|number|boolean = "123 Main st.";
console.log(empAddress);
let empAddress1 = 122345;
console.log(empAddress1);
let empAddress2 = true;
console.log(empAddress2);

//any type : any is a data type that is going to remove the type safety layer within the typescript.

let data:any = "Hellow World";
console.log(data);
data = 100;
console.log(data);
data = true;
console.log(data);


//*************************NON-PRIMITIVE DATA TYPE*******************************//

//1. object ==> represents a collection of key-value pairs.

interface personInfo {
    name : string,
    age  : number,
    EmpID: number,
    VisaStatus : boolean,
    address : {
        city : string,
        state : string,
        country : string
    }
}

let person:personInfo = {
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

//2. Array ==> represents a list of values.
let fruits: string[] = ["apple", "banana", "mango", "grapes", "kiwi"];
let prices: number[] = [10, 20, 30, 40, 50];
let fruitsandprices: (string | number)[] = ["apple",10, "banana",20, "mango",30, "grapes",40, "kiwi",50];

console.log(fruits);
console.log(prices);
console.log(fruitsandprices);

//3. tuple ==> the data type that we are going to use to store multiple values with different data types in a single variable in specific order.

//Array vs tuple

//strore employee name, employee number and employee visa status within the array.
let empInfo : (String | Number | boolean) [] = [87367482332, "Bharat", true];

//strore employee name, employee number and employee visa status within the array.
let newempInfo : [String, string, Number, boolean] = ["Ankit", "Jeure", 238746238, true];

//4. function ==> Represents block of code or collection of statements to complete particular task.
function launchBrowserAndlogin(browserName : string) : void {
    console.log("launch the "+browserName+" Browser");
    console.log("Enter the URL : https:icici.com");
    console.log("Enter the valid username as 'Ankit' and password as 'Ankit@123'");
    console.log("click on the login button");
}

function getAccountBalance() : number{
    console.log("Navigate to the account balance page");
    let accountBalance = 100000;
    return accountBalance;
}

//5. map ==> A map can store multiple key value pairs. Map allow duplicate values, but they won't allow dplicate keys.
let empInfoMap : Map<number, string> = new Map();
empInfoMap.set(123, "Ankit");
empInfoMap.set(124, "Bharat");

//6. set ==> represents a collection od unique values of any data type.
let empIDs:Set<number> = new Set();
empIDs.add(123);
empIDs.add(124);

//7. date ==> Represents date and time in typescript.

let currentDate = new Date();
console.log(currentDate);
