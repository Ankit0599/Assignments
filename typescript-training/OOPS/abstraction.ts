//Abstraction : It is the concept of hiding the implementation.

//Method : It is a block of code or collection of statements written together inside the block to perform spcific task.

abstract class Application{

    LoginintoApplication() : void{
        console.log ("Launch the browser.");
        console.log ("Enter the credentials");
        console.log ("click on login button and verify the login is successful")
}

    abstract logoutfromapplication():void ;
}

class facebook {
    //let obj = new Application ();
}

abstract class google extends Application {

    logoutfromapplication(): void {
        
    }

        getMethods () {
        this.LoginintoApplication();
    }
}