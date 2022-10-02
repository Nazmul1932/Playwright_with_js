const { chromium, test } = require('@playwright/test');
test('login-logout-using-codegen', async ({page}) => {
//   const browser = await chromium.launch({
//     headless: false
//   });
//   const context = await browser.newContext();
//   // Open new page
//   const page = await context.newPage();
  // Go to https://letcode.in/
  await page.goto('https://letcode.in/');
  // Click text=Log in
  await page.locator('text=Log in').click();
  await page.waitForURL('https://letcode.in/signin');
  // Click text=EmailPasswordLOGIN >> [placeholder="Enter registered email"]
  await page.locator('text=EmailPasswordLOGIN >> [placeholder="Enter registered email"]').click();
  // Fill text=EmailPasswordLOGIN >> [placeholder="Enter registered email"]
  await page.locator('text=EmailPasswordLOGIN >> [placeholder="Enter registered email"]').fill('koushik350@gmail.com');
  // Click [placeholder="Enter password"]
  await page.locator('[placeholder="Enter password"]').click();
  // Fill [placeholder="Enter password"]
  await page.locator('[placeholder="Enter password"]').fill('Pass123$');
  // Press Enter
  await page.locator('[placeholder="Enter password"]').press('Enter');
  await page.waitForURL('https://letcode.in/');
  // Click text=Sign out
  await page.locator('text=Sign out').click();
  await page.waitForURL('https://letcode.in/');
  // ---------------------
  await page.close()
})