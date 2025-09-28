import { test, expect } from '@playwright/test';

test('Verify Login with valid credentials', async ({ page }) => {

 await page.goto("https://the-internet.herokuapp.com/checkboxes");
 const checkbox1 = await page.locator('//input[@type="checkbox"][1]').isChecked();
 console.log(checkbox1);
 if (checkbox1 == false)
 {
    await page.locator('//input[@type="checkbox"][1]').check();
 }
 
 const checkbox2 = await page.locator('//input[@type="checkbox"][1]').isChecked();
 console.log(checkbox2);


 const checkbox3 = await page.locator('//input[@type="checkbox"][2]').isChecked();
 console.log(checkbox3);
  if (checkbox3 == true)
 {
    await page.locator('//input[@type="checkbox"][2]').uncheck();
 }
 
 const checkbox4 = await page.locator('//input[@type="checkbox"][2]').isChecked();
 console.log(checkbox4);
});
