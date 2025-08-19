import { Before, After} from "@cucumber/cucumber"
import { chromium } from "@playwright/test";

Before("@Regression", async function() {
    this.browser = await chromium.launch({headless: false});
    const context = await this.browser.newContext();
    this.page = await context.newPage();
})



After("@Regression", async function () {
    await this.browser.close();    
})