const { test } = require('@playwright/test');


const file = "C:\\Users\\BS971\\Desktop\\download.jfif"
const file1 = "C:\\Users\\BS971\\Desktop\\Sharebus-Note.txt"

// test('upload-file', async ({page}) => {

//     await page.goto("https://www.sendgb.com/en/") 
//     await page.setInputFiles("xpath=//input[@name='qqfile']", [file, file1])


//     await page.close() 

// })

test("upload-file-using-chooser-listener", async ({page})=>{

    await page.goto("https://the-internet.herokuapp.com/upload") 

    await page.setInputFiles("xpath=//input[@id='file-upload']", [file, file1])
    await page.locator("xpath=//input[@id='file-submit']").click()


})