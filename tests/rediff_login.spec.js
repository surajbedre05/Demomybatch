import { test, expect } from '@playwright/test';

import data from "../testData/rediff_account_data.json"

test('Verify Login with valid credentials', async ({ page }) => {
    
    await page.goto("https://register.rediff.com/register/register.php");

    await page.locator('//input[@placeholder="Enter your full name"]').fill(data.fullname);

    await page.locator('//input[@placeholder="Enter Rediffmail ID"]').fill(data.Rediffid);

    await page.locator('//input[@value="Check availability"]').click();

    await page.locator('//span[@id="toggle-password"]').click({delay : 1000});

    await page.locator('//input[@id="newpasswd"]').pressSequentially(data.password,{delay : 1000});
    
    await page.locator('//span[@id="toggle-password"]').click({delay : 1000});

    await page.locator('//span[@id="toggle-retype-password"]').click({delay : 1000});

    await page.locator('//input[@placeholder="Retype password"]').pressSequentially(data.retypepassword,{delay : 1000});

    await page.locator('//span[@id="toggle-retype-password"]').click({delay : 1000});
    
    await page.locator('select[name^="DOB_Day"]').selectOption(data.day);

    await page.locator('select[name^="DOB_Month"]').selectOption(data.month);

    await page.locator('select[name^="DOB_Year"]').selectOption(data.year);

});