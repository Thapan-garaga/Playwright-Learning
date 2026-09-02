import {test, expect, type Locator} from "@playwright/test";

test("Scroll", async ({page}) =>{


    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForTimeout(2000);
    await page.pause();  
    
    const source = page.locator('div#draggable');
    const target = page.locator('div#droppable');

    await target.scrollIntoViewIfNeeded();
    await page.waitForTimeout(2000);

    await page.mouse.wheel(0,1500);
    await page.waitForTimeout(2000);
    await page.mouse.wheel(0,900);
    await page.waitForTimeout(2000);

    await source.evaluate(source => source.scrollTop += 500);

    await page.close();









});