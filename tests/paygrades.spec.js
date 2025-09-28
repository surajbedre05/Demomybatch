import { test, expect } from '@playwright/test';

const paygrades = [
    {
        name: 'Pay Grade 1'
    },
        {
        name: 'Pay Grade 2'
    },
        {
        name: 'Pay Grade 3'
    },
        {
        name: 'Pay Grade 4',
            }
]

for(let emp in paygrades) {

    const{name} = paygrades[emp];

    test(`Adding Pay Grades - ${name}`, async ({ page }) => {


    // Navigate to the login page
    
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // Enter valid username and password
    await page.locator('//input[@placeholder="Username"]').pressSequentially('Admin');
    await page.locator('//input[@placeholder="Password"]').pressSequentially("admin123");

    // CLck on the Login button

    await page.locator('//button[@type="submit"]').click();

    //Asert that the user is navigating to the dashboard or not.

    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',{timeout : 10000});

    //Click on the Admin menu button
    await page.locator('//a[@href="/web/index.php/admin/viewAdminModule"]').click();

    //Click on the Jobs menu button
    await page.locator('(//span[@class="oxd-topbar-body-nav-tab-item"])[2]').click();

    //Click on the pay grade menu button
    await page.locator('(//a[@role="menuitem"])[2]').click()

    //Click on the Add button
    await page.locator('//button[@class="oxd-button oxd-button--medium oxd-button--secondary"]').click();

    //Enter the pay grade name
    await page.locator('//div[@class="oxd-input-group oxd-input-field-bottom-space"]/div[2]/input').pressSequentially(`${name}`);

    //Enter the save button
    await page.locator('//button[@type="submit"]').click();     

})
}