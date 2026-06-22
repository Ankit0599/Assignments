//Polymorphism : It is a concept of having multiple implementation with one single methhod.

import { add } from "../../modules/1_named_exports.ts";
import sum from "../../modules/4_default_exports.ts";

//Two types of polymorphism
//1. complie time polymorphism (Method Overloading) : Having multiple methods with the same name within the same class with the different parameters.
//2. Runtime Polymorphism (Method Overriding)


class Maths {

    // add(a:number ,b:number): number {
    //     return a+b;
    // },

    // add(a:string ,b:string): string {
    //     return a+b;
    // }

    // add(a,b) {
    //     return a+b;
    // }

    // add("a"+"b") {
    //     return a+b;
    // }

    //Alternative 1
    add(a:any, b:any): any {
        return a+b;
    }

    //Alternative 2 //ideal should not encourage this approach as it is not type safe and can lead to runtime errors.
    sum(a:any, b?:any, c?:any): any {
        return a+b;
    }
}