import {test, expect, type Locator} from "@playwright/test";

test("screenshot", async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForLoadState("domcontentloaded");
    await page.pause();

    const title = page.locator("div#header-inner");

    // await title.screenshot();
    // await title.screenshot({path: './screenshots/title1.jpg'}); 
    // await page.screenshot({path: './screenshots/title2.png'});
    // await page.screenshot({path: './screenshots/title3.jpg', fullPage: true});
    expect.soft(await title.screenshot({path: 'title2.jpg'}))
    .toMatchSnapshot({path: 'title1.jpg'});
    
    await page.close();


});