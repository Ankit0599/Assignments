import { test, expect } from "@playwright/test";

//test.only () ==> It will execute only particular test case by skipping all other test cases.
//test.skip () ==> It will skip the particular test case and execute all other test cases.
//test.fail () ==> I'm expecting a particular test case to be failed highlight this test cases if it's not failed
//test.fixme () ==> I'm sure this test case is not working. Please ignore even if it's failed.
//test.slow () ==> Playwright will consider that there loading issues and it may face slowness in the test execution. It can increase the timeout 3x times more than the normal timeout.


test.describe("Group 1 - Tests", async () => {
    
    test.fixme("Group 1 - Test 1", async () => {
        console.log("Gorup 1 - Test 1 is Executing...")
    });

    test("Group 1 - Test 2", async () => {
        test.slow();
        console.log("Gorup 1 - Test 2 is Executing...")
        await new Promise ((resolve) => setTimeout(resolve, 40000)); //wait for 40 seconds 
    });

    //if test takes more than 90 seconds

    test("Group 1 - Test 3", async () => {
        test.setTimeout(180000); //wait for 3 minutes
        console.log("Gorup 1 - Test 3 is Executing...")
        await new Promise ((resolve) => setTimeout(resolve, 100000)); //wait for 100 seconds 
    });

    test("Group 1 - Test 4", async () => {
        console.log("Gorup 1 - Test 4 is Executing...")
    });
})