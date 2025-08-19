import {test, expect} from '@playwright/test'

test('BasicEx', async ({page}) =>{

    await page.goto('https://www.demoblaze.com')

    await page.locator('#login2').click()

    await page.locator('#loginusername').fill('pavanol')

    await page.locator('#loginpassword').fill('test@123')

    await page.click('//button[@class="btn btn-primary" and @onclick="logIn()"]')

    await page.waitForTimeout(4000)
})