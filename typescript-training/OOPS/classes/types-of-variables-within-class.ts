//Types of variables in Typescript 

// 1. local variable ==> The variable declared inside the method is called as local variable. This variable we can access only within the method. outside of the method it is not allowed.

// 2. instance variable ==> The variable declared outside of the method and inside the class. whenever we want to access this variable, we can create an instance of the particular clas & we can access the data.
//Creating instance means creating an object of the class.

// 3. static variable ==> The variable declared outside of the method & inside the class, along with the static keyword. we can access this variable directly by taking a reference to the class name without creating  an object.


class Employee {

    empName : String = "Ankit Jeure"; //Instance variable

    static company : string = "Tech Solutions"; //Static variable

    printEmpDetails():void {
        let empSalary : number  = 300000; //local variable
        console.log ("Employee Salary : " + empSalary);
    }
}

let obj = new Employee();
console.log (obj.empSalary); //1.Local variable
console.log (obj.empName); //2.Instance variable
console.log (Employee.company); //3.static variable