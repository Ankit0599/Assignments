//Access modifiers in Typescript =>

//1. Public/ No keyword => can be accessed from anywhere.
//2. Protected => can be accessed either within the class or its subclasses.
//3. Private => can be accessed only within the class.


class Person {

    public name : string = "Ankit Jeure"; //Public data (accessble anywhere)
    protected Age : number = 26; //Protected Data (can be accessble within the class and child class )
    private Salary : number; //Private data (can be accessble within the class)


    // Access all the members within the class

    printEmpData(){
        console.log ("Accessing members within the class : ");
        console.log (this.name);
        console.log (this.Age);
        console.log (this.Salary);
    }

    public getSalary () {
        return this. Salary;
    }

    public setSalary (Salary : number) {
        this.Salary = Salary;
    }


    //private data member

    private pancard : string = "";

    public setPancard (pancard : string) {
        this.pancard = pancard ;
    }

    public getPancard () {
        return this.pancard ;
    }
}

class Project {

    // Access all the members outside of the class

    printEmpData(){
        console.log ("Accessing members outside of the class : ");
        let obj = new Person();
        console.log (obj.name);
        // console.log (obj.Age);
        console.log (obj.getSalary());

        obj.setPancard("ABCDSE13245");
        console.log (obj.getPancard());       
    }

}

class Employee extends Person {

    // Access all the members within the class

    printEmpData(){
        console.log ("Accessing members in the child class : ");
        let obj = new Person();
        console.log (obj.name);
        // console.log (obj.Age);
        // console.log (obj.Salary);
    }

}