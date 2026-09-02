import {test, expect, type Locator} from '@playwright/test';

test.skip("Alert Test", async ({page}) => {
    

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    await page.waitForTimeout(5000);
    await page.pause();

    const simpleAlert: Locator = page.locator('//button[text()="Click for JS Alert"]');

    page.on('dialog', async (dialog) => {
        const message = dialog.message();
        console.log(`Alert message: ${message}`);
        expect.soft(message).toBe('I am a JS Alert');

        const type = dialog.type();
        console.log(`Alert type: ${type}`);
        expect.soft(type).toBe('alert');

        await dialog.accept();
    });

    await simpleAlert.click();


});

test.skip("confirmation Alert Test", async ({page}) => {
    

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    await page.waitForTimeout(5000);
    await page.pause();

    const confirmAlert: Locator = page.locator('//button[text()="Click for JS Confirm"]');
    const resultText: Locator = page.locator('p#result');

    page.on('dialog', async (dialog) => {
        const message = dialog.message();
        console.log(`Alert message: ${message}`);
        expect.soft(message).toBe('I am a JS Confirm');

        const type = dialog.type();
        console.log(`Alert type: ${type}`);
        expect.soft(type).toBe('confirm');

        await dialog.accept('Playwright');
    });

    await confirmAlert.click();
    console.log(await resultText.innerText());
});

test("prompt Alert Test", async ({page}) => {
    

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    await page.waitForTimeout(5000);
    await page.pause();

    const promptAlert: Locator = page.locator('//button[text()="Click for JS Prompt"]');
    const resultText: Locator = page.locator('p#result');

    page.on('dialog', async (dialog) => {
        const message = dialog.message();
        console.log(`Alert message: ${message}`);
        expect.soft(message).toBe('I am a JS prompt');

        const type = dialog.type();
        console.log(`Alert type: ${type}`);
        expect.soft(type).toBe('prompt');

        await dialog.accept('Playwright');
    });
    await promptAlert.click();
    console.log(await resultText.innerText());

});