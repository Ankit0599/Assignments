class Employee {

    empID : number; //empty
    constructor (id : number) {
        this.empID = id;
    }

    //Method 1

    PrintEmployeeDetails (EmpName : String) {
        console.log ("Employee ID : " + this.empID);
        console.log ("Employee Name : " + EmpName);
    }

    //Method 2

    PrintEmployeeProject (EmpProject : String) {
        console.log ("Employee ID : " + this.empID);
        console.log ("Employee Project : " + EmpProject);
    }

    //Method 3

    PrintEmployeeRole (EmpRole : String) {
        console.log ("Employee ID : " + this.empID);
        console.log ("Employee Role : " + EmpRole);
    }
}

// Creating object of employee class
let emp = new Employee (1234);

//calling method 1
emp.PrintEmployeeDetails("Ankit Jeure");

//calling method 2
emp.PrintEmployeeProject("CIBC");

//calling method 3
emp.PrintEmployeeRole("QA tester");