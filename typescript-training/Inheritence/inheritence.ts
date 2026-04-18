//Inheritence --> Concept of extending parent class properties into child class without creating an object.

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