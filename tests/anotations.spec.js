// .only  ---- Fousing on only some test.
// .skip   ----   Mark a test as skipped.
// .fixme   ---- Similar to skip only but we are indicating that it should be fixed after sometime.
//  .fail  ---- Marks a test as "should fail". Playwright runs this test and ensures that it is actually failing
//  .slow  ----- marks the test as slow and triples the test timeout.
    import { test, expect } from '@playwright/test';
test.describe("Test groupung Suite", async() =>{



test('Verify Login with valid credentials', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill(process.env.APP_USERNAME);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.APP_PASSWORD);
  await page.getByRole('button', { name: 'Login' }).click();


//  await expect(page.getByRole('heading', { name: 'Dashboard' }) ).toBeVisible({delay : 10000});

//  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

//  await expect(page.locator('ul.oxd-main-menu')).toBeVisible();
});



test('Verify Login with valid Username and Invalid password', async ({ page }) => {

   // test.fail();
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('qwertyui');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Invalid credentials')).toBeVisible();
});


test('Verify Login with Invalid Username and valid password', async ({ page }) => {

    //test.skip();
    //test.fixme();
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('awrsdfgh');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Invalid credentials')).toBeVisible();
});

test('Verify Login with Invalid Username and invalid password working with annotations', async ({ page }) => {
   // test.slow();
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('awrsdfgh');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('xfcvadmin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Invalid credentials')).toBeVisible();
});
})