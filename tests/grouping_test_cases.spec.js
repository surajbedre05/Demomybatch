import { test, expect } from '@playwright/test';

test.describe("Grouping the testS", async() => {
    test("test 1", async({page}) => {
        console.log("test 1")
    })
     test("test 2", async({page}) => {
        console.log("test 2")
    })
     test("test 3", async({page}) => {
        console.log("test 3")
    })
     test("test 4", async({page}) => {
        console.log("test 4")
    })
     test("test 5", async({page}) => {
        console.log("test 5")
    })
    
})

test.describe("Test Suite 2", async() => {


 test("test 6", async({page}) => {
        console.log("test 6")
    })
     test("test 7", async({page}) => {
        console.log("test 7")
    })
    })