import { test, expect } from '@playwright/test';

const workshift = [
    {
        name: 'General Shift'
    },
    {
        name: 'Night Shift'
    },
    {
        name: 'Morning Shift'
    },
    {
        name: 'Evening Shift',
    }
]

for (let shiftname in workshift) {

    const { name } = workshift[shiftname];

    test(`Adding Shiftname and Timing - ${name}`, async ({ page }) => {


        // Navigate to the login page

        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        // Enter valid username and password
        await page.locator('//input[@placeholder="Username"]').pressSequentially('Admin');
        await page.locator('//input[@placeholder="Password"]').pressSequentially("admin123");

        // CLck on the Login button

        await page.locator('//button[@type="submit"]').click();

        //Asert that the user is navigating to the dashboard or not.

        await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

        //Click on the Admin menu button
        await page.locator('//a[@href="/web/index.php/admin/viewAdminModule"]').click();

        //Click on the Jobs menu button
        await page.locator('(//span[@class="oxd-topbar-body-nav-tab-item"])[2]').click();

        //Click on the Work shift menu button
        await page.locator('(//a[@role="menuitem"])[5]').click();

        //Click on the Add button
        await page.locator('//button[@class="oxd-button oxd-button--medium oxd-button--secondary"]').click();

        //Enter the shift name
        await page.locator('//form[@class="oxd-form"]/div/div/div/div/div[2]/input').fill(`${name}`);

        //Enter the from working hours time
        const timeInputs = await page.$$('input.oxd-input.oxd-input--active[placeholder="hh:mm"]');
        await timeInputs[0].fill('08:00');
        await timeInputs[1].fill('16:00');

        //Enter the save button
        await page.locator('//button[@type="submit"]').click();

    })
}