import {test, expect, type Locator} from '@playwright/test';

test.skip("New Tab Window Test", async ({page, context}) => {
    

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForTimeout(5000);
    await page.pause();

    const newWindowButton: Locator = page.locator('//button[text()="New Tab"]');
    const popupWindowButton: Locator = page.locator('//button[text()="Popup Windows"]');

    const [ newwindow ] = await Promise.all([
        context.waitForEvent('page'),
        popupWindowButton.click()
    ]);
    
    
    const newtitle = await newwindow.title();
    console.log("New window title is:", newtitle);
    expect.soft(newtitle).toBe('SDET-QA Blog');
    await page.bringToFront();
    expect.soft(await page.title()).toBe('Automation Testing Practice');

    console.log(await page.title());

    await newwindow.bringToFront();
    await newwindow.close();

    await page.close();







});

test("Multiple Windows Test", async ({page, context}) => {
    

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForTimeout(5000);
    await page.pause();

    const newWindowButton: Locator = page.locator('//button[text()="New Tab"]');
    const popupWindowButton: Locator = page.locator('//button[text()="Popup Windows"]');

    await Promise.all([
        context.waitForEvent('page'),
        popupWindowButton.click()
    ]);

    await page.waitForTimeout(5000);

    const allpages = context.pages();
    console.log("Total number of pages are:", allpages.length);

    console.log ('Title of the first page:', await allpages[0].title());
    console.log ('Title of the second page:', await allpages[1].title());
    console.log ('Title of the third page:', await allpages[2].title());

    await allpages[1].bringToFront();
    console.log("Title of the second page after bringing to front:", await allpages[1].title());
    await allpages[1].close();

    await allpages[2].bringToFront();
    console.log("Title of the third page after bringing to front:", await allpages[2].title());
    // await allpages[2].close();
    await allpages[0].bringToFront();
    console.log("Title of the first page after bringing to front:", await allpages[0].title());

    await allpages[2].close();
    // await allpages[1].close();
    await allpages[0].close();






});