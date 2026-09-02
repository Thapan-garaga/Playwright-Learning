import {test, expect, type Locator} from '@playwright/test';

test("Mouse Actions Test", async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForTimeout(2000);
    await page.pause();

    const blog = page.getByRole('link', {name: 'Blog'});
    const playwright = page. getByRole('link', {name: 'PlaywrightPractice'});
    const name = page.locator('input#name')
    const source = page.locator('div#draggable');
    const target = page.locator('div#droppable');

    await blog.first().hover();
    await page.waitForTimeout(2000);

    await playwright.hover();
    await page.waitForTimeout(2000);

    await name.fill('PlayWright');
    await name.dblclick();
    await page.waitForTimeout(2000);

    await source.scrollIntoViewIfNeeded();
    await source.dragTo(target);
    // await page.waitForTimeout(2000);

    await page.close();



});