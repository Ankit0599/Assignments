//function: a function is a block of code or a collection of statements written together to complete a specific task. 

//1.function without parameters and without return type
//Creating a common function that is not at all going to take any input. At the same time, it is not going to give you any output as well.

function greet() : void {
    console.log ("Hello, Welcome to TypeScript Training!");
}
//calling the function
greet();


//2.function with parameters and without return type
//Creating a common function that is going to take input, but it is not going to give you any output data.

function greetPerson(name : string): void {
    console.log (`Hello, ${name}, Welcome to TypeScript Training!`);
}
//calling the function
greetPerson("Ankit");



//3. Function with parameters and return type. 
// Creating a common function that is going to take some input and finally it is going to provide you some output value as well. 

function addNumbers (a: Number, b:Number ) : number {
    return a+b; //return keyword will be used to return the data
}
//calling the function
console.log (addNumbers (10, 20));



//4. Function without parameters but with return type. 
//Creating a common function that is going to provide some output without taking any input parameters. 

function getCurrentYear() : number {
    let CurrentDate = new Date();
    return CurrentDate.getFullYear();
}
//calling the function
console.log (getCurrentYear());



//5. Function with optional parameters. 
//Creating a common function that can take some input parameters, out of that some parameters are optional to enter. 
//? Represents the parameter is optional. 

function PrintEmpData (name : string, age?:number) :void {
    if (age!== undefined) {
        console.log ("Employee Name : " +name+ ", Emp age is : " +age);
    } else {
        console.log ("Employee Name : " +name+ ", Emp age is not provided")
    }
}

//calling the function
PrintEmpData ("Ankit", 26);
PrintEmpData ("Sunil");


//6. Function with default parameters. 
//Creating a function that can take some input parameters and some of those parameters having default values. 
//default value ==> If the user is not going to provide any value, by default it is going to consider the default value. 

function PrintEmpVisaStatus (name : string, visastatus :boolean = false) : void {
    console.log ("Employee name : " +name+ ", Employee Visa Status :  " +visastatus);
}
//callung the function
PrintEmpVisaStatus ("Ankit Jeure" , true);
PrintEmpVisaStatus ("Anil Sharma");


//7. Function with rest parameters. 
// Creating a common function that can take multiple input parameters as an array. 
function SumofNumbers(...numbers: number []) : void {
    let Sum:number = 0;
    for (let num of numbers) {
        Sum +=num;
    }
    console.log (Sum);
}

//calling the function
SumofNumbers (10, 20, 30);
SumofNumbers (40, 50, 60);
SumofNumbers (60, 70, 80, 90);