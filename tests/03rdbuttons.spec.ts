import {test, expect, type Locator} from '@playwright/test';

test("Clicking on Button", async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForTimeout(2000);
    await page.pause();
    const rdBtn: Locator = page.locator('input#male');
    const chbox1: Locator = page.locator('input#sunday');
    const chbox2: Locator = page.locator('input#monday');
    await rdBtn.check();
    await expect.soft(rdBtn, 'Radio button should be checked').toBeChecked();
    
    await chbox1.check();
    await expect.soft(chbox1, 'Check box should be checked').toBeChecked();

    await chbox2.uncheck();
    await expect.soft(chbox2, 'Check box should be unchecked').not.toBeChecked();



    await page.close();



});