import { test, expect } from "@playwright/test";

//test.describe = refers group of tests related to specific feature.

test.describe("Group 1 - Tests", async () => {
    
    test("Group 1 - Test 1", {tag : '@smoke'}, async () => {
        console.log("Gorup 1 - Test 1 is Executing...")
    });

    test("Group 1 - Test 2", {tag : '@sanity'}, async () => {
        console.log("Gorup 1 - Test 2 is Executing...")
    });
})
