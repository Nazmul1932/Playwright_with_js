const { test } = require('@playwright/test');


test('login test', async({page}) => {
    // test.slow()
    await page.goto('https://letcode.in/')
    await page.locator("xpath=//a[normalize-space()='Log in']").click()
    await page.locator("xpath=//input[@name='email']").fill("koushik350@gmail.com")
    await page.locator("xpath=//input[@placeholder='Enter password']").fill("Pass123$")
    await page.locator("xpath=//button[normalize-space()='LOGIN']").click()
    await page.locator("xpath=//a[normalize-space()='Sign out']").click()

    await page.close()
})