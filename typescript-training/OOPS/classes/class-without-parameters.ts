class Employee {

    //Method 1

    PrintEmployeeDetails (EmpID : Number, EmpName : String) {
        console.log ("Employee ID : " + EmpID);
        console.log ("Employee Name : " + EmpName);
    }

    //Method 2

    PrintEmployeeProject (EmpID : Number, EmpProject : String) {
        console.log ("Employee ID : " + EmpID);
        console.log ("Employee Project : " + EmpProject);
    }

    //Method 3

    PrintEmployeeRole (EmpID : Number, EmpRole : String) {
        console.log ("Employee ID : " + EmpID);
        console.log ("Employee Role : " + EmpRole);
    }
}

// Creating object of employee class
let emp = new Employee ();

//calling method 1
emp.PrintEmployeeDetails (1234, "Ankit Jeure");

//calling method 2
emp.PrintEmployeeProject (1234, "CIBC");

//calling method 3
emp.PrintEmployeeRole (1234, "QA tester");