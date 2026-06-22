//Interface : 100% abstract class

interface Application1 {

    LoginintoApplication(): void;

    logoutfromapplication():void;
}

interface Application2 {
    
    VerifyHomePage(): void;

    VerifyDashboard():void;
}

class Google implements Application1, Application2 {

    LoginintoApplication(): void {
        throw new Error("methods are not implemented.");
    }

    logoutfromapplication():void {
        console.log("Logging out from Google application...");
        //clear session and redirect to home page
    }
    
    VerifyHomePage(): void {
        console.log("Verifying Google home page now...");
        //Assert home page elements are visible
    }

    VerifyDashboard():void {
        console.log("verifying the Dashboard...");
    }
}

//extends : Extending the help
//Implement : Implementing the parent classs umimplemented methods in the child class. In return we are not going to get any properties from parent class.
