//Exceptional handling --> Handle the exceptions

//Try..Catch..Finally Block --> 
// When there is an exception, we can handle an exception & continue the execution process.

// throw a custom exception --> 
// When there is no exception but intentionally the use wants to fail the program, by using 'throw' keyword. we can fail the program.

// let input : any ;
// console.log (input.toLowerCase());
// console.log ("Execution is completed.");

//=> try....catch..method :

let input : any ;

try {
    console.log(input.toLowerCase()); //Plan A
} catch (error) {
    console.log (error);
    console.log ("Execption occured, please check"); // Plan B 
    console.log (input.toUpercase());
} finally {
    console.log ("Execution is completed."); //Mandatory code
}


