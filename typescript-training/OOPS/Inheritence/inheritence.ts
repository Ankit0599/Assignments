//Inheritence --> Concept of extending parent class properties into child class without creating an object.

// types of inheritence 
// 1. single inheritence
// 2. Multilevel inheritence
// 3. Hierarchical inheritence
// 4. Multiple inheritence --> this is not supported in typescript but we can acheive this using interface.

// From parent class to child class we can access the data.
// from child class to parent class we can not access the data.

// Q. why we can not reverse extend into child class into parent class
//--> Because everytime when we are going to write the extend keyword it is not just going to check 
// imediate parent class but to check is there any grand parent class present but the grandparent 
// clas should not be same as parent class.

class Class1 {
    empName : string = "Ankit";
    empID : number = 1234;
}

class Class2 extends Class1 { //child class extends parent class
    empSalary : number = 50000;
    printempDetails () {
        let object = new Class1 ();
        console.log ("Employee Name : " + this.empName);
        console.log ("Employee ID : " + this.empID);
        console.log ("Employeen Salary : " + this.empSalary); // this means current class instance
    }
}

class Class3 extends Class2 { //child class extends parent class
    empDept : string = "IT";
}

let object = new Class2 ();
object.printempDetails ();

// class Class4 extends Class1, Class2 {
// error - classes can only extend a single class
// One child class can not maintain two different parent class
// }