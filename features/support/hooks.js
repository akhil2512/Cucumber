import { Before, After, Status} from "@cucumber/cucumber"
import { chromium } from "@playwright/test";


Before("@Regression", async function() {
    this.browser = await chromium.launch({headless: false});
    const context = await this.browser.newContext();
    this.page = await context.newPage();
})



After("@Regression", async function ({result}) {

    if(result.status === Status.FAILED){
        await this.page.screenshot({path:'screenshot.png', fullPage: true})
    }
    await this.browser.close();    
})