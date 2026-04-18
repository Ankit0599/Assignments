class Parent {
    //parent class value
    course : string = "javascript";
    
    PrintName () {
        console.log ("Parent Class Method");
    }
}

class Child extends Parent {

    course : string = "typescript";

        PrintName () {
        console.log ("Child Class Method");
    }

    //Method Level
    printCourse (course : string){
        console.log ("Course Name : " + course);
        // console.log ("Course Name : " + new Child ().course);
        // console.log ("Course Name : " + new Parent ().course);
        // console.log ("Course Name : " + this.course); // this -> represents current class instance value
        console.log ("Course Name : " + super.PrintName()); // super -> represents super or parent class instance value
    }
}

let object = new Child ();
object.printCourse ("playwright");