import {test, expect, type Locator} from "@playwright/test";

test("Shadowdom Handling", async ({page}) => {

    await page.goto("https://www.selectorshub.com/xpath-practice-page/");
    await page.waitForLoadState("domcontentloaded");
    await page.pause();
    
    const shadowdom = page.locator('div#app2')
    const Pizaname = shadowdom.locator('input#pizza');
    await Pizaname.fill('Playwright');

    




});


