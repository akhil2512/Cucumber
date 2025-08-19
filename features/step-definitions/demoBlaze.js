import {Given, When, Then, setDefaultTimeout} from "@cucumber/cucumber";
import { expect } from '@playwright/test'

setDefaultTimeout(30*1000)

Given('I navigate to the DemoBlaze application', async function () {
    await this.page.goto("https://www.demoblaze.com")
    await this.page.locator('#login2').click()
})

When('I enter {string} and {string}', async function (string1, string2) {
    await this.page.locator('#loginusername').fill(string1)
    await this.page.locator('#loginpassword').fill(string2)
    
})

When('I click on the DemoBlaze login button', async function () {
    await this.page.click('//button[@class="btn btn-primary" and @onclick="logIn()"]')
})

Then('I should be logged into the DemoBlaze application', async function () {
    await this.page.waitForTimeout(4000)
    const welcomeIcon = await this.page.locator('#nameofuser')
    await expect(welcomeIcon).toBeVisible()
})