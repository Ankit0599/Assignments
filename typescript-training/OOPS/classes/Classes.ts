//OOPS --> Object oriented programming language

//OOPS in Type script -->

// 1. class 
// 2. Object
// 3. Constractor 

//1. Class : Class is a template that can store data, methods and objects together at one place.\

//Syntax of class :

// Class className {
//     //data
//     //method
//     //object
// }

//2. Object : object is an instance of a class.

//Syntax of Object :

// let objectName = new className();
// objectName.MethodName();


//3. Constructor : A constructor is a special method with a name "Constructor" created by default in every class.
// It is used to initialize the data members of the class. It is automatically called when an object of the class is created.

//There are two types of constructor 
//1. Default constructor
//2. Parameterized constructor 

//1. Default constructor 
// --> constructor method created by default everytime when you are going to create a class. by default it is available inside the memory of the class

//2. Parameterized constructor 
// ---> The constructor method with some prarmeters that is called as parameterized constructor.

//Syntax 
// constructor (name : string) {
//     console.log ("This is constructor of employee class.")
// }

//Creating employee data 

class Employee {

    //default constructor
    constructor () {
        console.log("This is constructor of employee class.");
    }

    empID : number = 101;
    empName : string = "John";

    empAddress(): void {
        console.log ("Noida, Up");
    }
}

//Access the data from the class by creating the object

let obj = new Employee (); //new + constructor = object
console.log (obj.empID);
console.log (obj.empName);
obj.empAddress();
