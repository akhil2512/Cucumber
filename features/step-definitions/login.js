import {Given, When, Then, setDefaultTimeout} from "@cucumber/cucumber";
import { expect } from "@playwright/test";
setDefaultTimeout(30*1000)

  Given('I navigate to the Ecommerce application', async function () {
    await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  });

  Given('I enter {string} as username', async function (string) {
    await this.page.getByPlaceholder("email@example.com").fill(string);
  });

  Given('I enter {string} as password', async function (string) {
    await this.page.getByPlaceholder("enter your passsword").fill(string);
  });

  When('I click on the login button', async function () {
    await this.page.locator('#login').click();
  });

  Then('I should be logged into the application', async function () {
    const homeIcon = await this.page.locator('.btn.btn-custom').nth(0);
    await expect(homeIcon).toBeVisible();
  });

  When('I click on the {string} button for {string}', async function (string, string2) {
    await this.page.locator(".btn.w-10").nth(0).click();
  });

  Then('The item {string} should be visible in the cart', async function (string) {
    await this.page.locator('.btn.btn-custom').nth(2).click();
    const itemName = await this.page.locator('.cartSection > h3').textContent();
    await expect(itemName).toBe(string);
  });

  When('I click on the logout option', async function () {
    await this.page.locator('.btn.btn-custom').nth(3).click();
  });

  Then('I should be redirected to the login page', async function () {
    const loginButton = await this.page.locator("input[type='submit']")
    await expect(loginButton).toBeVisible();
  });

  Then('The username and password fields should be visible', async function () {
    const userNameFiled = await this.page.locator("input[type='email']")
    const passswordFiled = await this.page.locator("input[type='password']")
    await expect(userNameFiled).toBeVisible();
    await expect(passswordFiled).toBeVisible();
  });