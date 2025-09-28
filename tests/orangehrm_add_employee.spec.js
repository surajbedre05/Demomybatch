const { test, expect } = require('@playwright/test');

function getRandomString(length = 6) {
  const chars = 'abcdefghijklmnopqrstuvwxyz';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

test('Add Employee in OrangeHRM', async ({ page }) => {
  // Go to login page
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // Login as Admin
  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'admin123');
  await page.click('button[type="submit"]');

  // Wait for dashboard to load
  await page.waitForSelector('nav[aria-label="Sidepanel"]');


  // Click on PIM menu (wait for it to be visible)
  await page.waitForSelector('span.oxd-text.oxd-main-menu-item--name', { timeout: 20000 });
  await page.click('span.oxd-text.oxd-main-menu-item--name:has-text("PIM")');

  // Debug: print all nav tab texts
  const navTabs = await page.$$eval('.oxd-topbar-body-nav-tab', els => els.map(e => e.textContent));
  console.log('Nav tabs:', navTabs);

  // Wait for Add Employee tab to be visible and click
  await page.waitForSelector('.oxd-topbar-body-nav-tab:has-text("Add Employee")', { timeout: 20000 });
  await page.click('.oxd-topbar-body-nav-tab:has-text("Add Employee")');

  // Enter random first and last name
  const firstName = getRandomString();
  const lastName = getRandomString();
  await page.fill('input[name="firstName"]', firstName);
  await page.fill('input[name="lastName"]', lastName);

  // Click Save
  await page.click('button[type="submit"]');

  // Wait for Personal Details page (after save)
  await expect(page.locator('h6:has-text("Personal Details")')).toBeVisible({ timeout: 20000 });

  // Verify employee name is visible on the page
  await expect(page.locator('input[name="firstName"]')).toHaveValue(firstName);
  await expect(page.locator('input[name="lastName"]')).toHaveValue(lastName);
});
