import {test, expect, type Locator} from "@playwright/test";

test("Keyboard actions", async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForLoadState("domcontentloaded");
    await page.pause();

    const name = await page.locator('input#name');
    const email = await page.locator('input#email');

    await name.pressSequentially('Playwright', {delay: 1000});
    await name.press('Control+A');
    await name.press('Control+C');
    await email.press('Control+V');
    


});