//Access modifiers in Typescript =>
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//1. Public/ No keyword => can be accessed from anywhere.
//2. Protected => can be accessed either within the class or its subclasses.
//3. Private => can be accessed only within the class.
var Person = /** @class */ (function () {
    function Person() {
        this.name = "Ankit Jeure"; //Public data (accessble anywhere)
        this.Age = 26; //Protected Data (can be accessble within the class and child class )
        this.Salary = 30000; //Private data (can be accessble within the class)
    }
    // Access all the members within the class
    Person.prototype.printEmpData = function () {
        console.log("Accessing members within the class : ");
        console.log(this.name);
        console.log(this.Age);
        console.log(this.Salary);
    };
    return Person;
}());
var Project = /** @class */ (function () {
    function Project() {
    }
    // Access all the members outside of the class
    Project.prototype.printEmpData = function () {
        console.log("Accessing members outside of the class : ");
        var obj = new Person();
        console.log(obj.name);
        console.log(obj.Age);
        console.log(obj.Salary);
    };
    return Project;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Access all the members within the class
    Employee.prototype.printEmpData = function () {
        console.log("Accessing members in the child class : ");
        var obj = new Person();
        console.log(obj.name);
        console.log(obj.Age);
        console.log(obj.Salary);
    };
    return Employee;
}(Person));
