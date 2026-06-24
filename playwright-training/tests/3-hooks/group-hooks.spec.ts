import { test, expect } from "@playwright/test";

//test.describe = refers group of tests related to specific feature.

test.describe("Group 1 - Tests", async () => {
    
    test("Group 1 - Test 1", async () => {
        console.log("Gorup 1 - Test 1 is Executing...")
    });

    test("Group 1 - Test 2", async () => {
        console.log("Gorup 1 - Test 2 is Executing...")
    });

    test("Group 1 - Test 3", async () => {
        console.log("Gorup 1 - Test 3 is Executing...")
    });

    //Group hooks :

test.beforeAll(async () => {
    console.log("******Group Before all : This runs before all the test cases.******");
});

test.afterAll(async () => {
    console.log("******Group After all : This runs After all the test cases.******");
});

test.beforeEach(async () => {
    console.log("-------Group Before Each : This runs before each the test cases.-------");
});

test.afterEach(async () => {
    console.log("-------Group After Each : This runs after each the test cases.-------");
});

})


test.describe("Group 2 - Tests", async () => {
    
    test("Group 2 - Test 1", async () => {
        console.log("Gorup 2 - Test 1 is Executing...")
    });

    test("Group 2 - Test 2", async () => {
        console.log("Gorup 2 - Test 2 is Executing...")
    });

    test("Group 2 - Test 3", async () => {
        console.log("Gorup 2 - Test 3 is Executing...")
    });
})


