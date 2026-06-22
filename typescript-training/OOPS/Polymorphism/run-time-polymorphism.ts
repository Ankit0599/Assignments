//2. Runtime Polymorphism (Method Overriding) : Having multiple methods with the same name and the same paramters between parent and child classes.

class Parent {
    
    add(a:number, b:number) : number {
        return a+b;
    }
}

class Child extends Parent {

     add(a:number, b:number) : number {
        return a+b+10;
    }
}

let parent = new Parent ();
console.log(parent.add(10,20));//30

let child = new Child ();
console.log(child.add(10,20));//40

