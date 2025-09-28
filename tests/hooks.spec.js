import { test, expect } from '@playwright/test';


test.describe("Verifying payment using deifferent methods", async ({page}) => {

    test.beforeEach(() => {
        
        console.log("Launch the URL");
        console.log("Login");
        console.log("Search the product");
        console.log("Add the product to cart");
        console.log("Select the Delivery Address");
    })


    test.afterEach(() => {
        console.log("Order Success");
    })



    test.afterAll(() => {
        console.log("This is After all")
    })

    test.beforeAll(() => {
        console.log("This is Before all")
    })


    test('Verify payment with COD', async ({ page }) => {


        console.log("Do the payment with COD");

    })

    test('Verify payment using debit card', async ({ page }) => {

        console.log("Do the payment debit card");

    });


    test('Verify payment with paytm', async ({ page }) => {

        console.log("Do the payment paytm");

    });

    test('Verify payment using credit card', async ({ page }) => {

        console.log("Do the payment credit card");

    });

})