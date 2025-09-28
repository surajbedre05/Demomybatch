import { test, expect } from '@playwright/test';

test('Verify Login with valid credentials', async ({ page }) => {

    await page.goto("https://demo.guru99.com/test/radio.html");

    //await page.locator('//input[@type="radio"]').click();

    await page.locator('//input[@type="checkbox"]').check();
})
