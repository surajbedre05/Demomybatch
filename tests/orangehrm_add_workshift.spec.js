const { test, expect } = require('@playwright/test');

test('Add Work Shift in OrangeHRM', async ({ page }) => {
  // Go to login page
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // Login as Admin
  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'admin123');
  await page.click('button[type="submit"]');

  // Wait for dashboard to load
  await page.waitForSelector('nav[aria-label="Sidepanel"]');

  // Click on Admin menu
  await page.waitForSelector('span.oxd-text.oxd-main-menu-item--name:has-text("Admin")', { timeout: 20000 });
  await page.click('span.oxd-text.oxd-main-menu-item--name:has-text("Admin")');

  // Click on Job menu and select Work Shifts
  await page.waitForSelector('.oxd-topbar-body-nav-tab:has-text("Job")', { timeout: 20000 });
  await page.click('.oxd-topbar-body-nav-tab:has-text("Job")');
  await page.waitForSelector('a.oxd-topbar-body-nav-tab-link:has-text("Work Shifts")', { timeout: 20000 });
  await page.click('a.oxd-topbar-body-nav-tab-link:has-text("Work Shifts")');

  // Click on Add button
  await page.waitForSelector('button:has-text("Add")', { timeout: 20000 });
  await page.click('button:has-text("Add")');

  // Wait for the Add Work Shift form to appear
  await page.waitForSelector('h6:has-text("Add Work Shift")', { timeout: 20000 });

  // Enter morning shift name
  await page.fill('div.oxd-form-row input.oxd-input', 'Morning Shift');

  // Enter working shift timings (example: 08:00 to 16:00)
  const timeInputs = await page.$$('input.oxd-input.oxd-input--active[placeholder="hh:mm"]');
  await timeInputs[0].fill('08:00');
  await timeInputs[1].fill('16:00');

  // Click Save button
  await page.click('button:has-text("Save")');

  // Debug: print all table cell texts after saving
  await page.waitForTimeout(3000); // wait for table to update
  const cellTexts = await page.$$eval('div.oxd-table-cell', els => els.map(e => e.textContent.trim()));
  console.log('Table cell texts:', cellTexts);

  // Assert the new shift is visible in the list
  await expect(page.locator('div.oxd-table-cell:has-text("Morning Shift")')).toBeVisible({ timeout: 30000 });
});
