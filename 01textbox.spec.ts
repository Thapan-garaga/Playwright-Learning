import { test, type Locator } from '@playwright/test';

test("Handling Text Field", async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForTimeout(2000);
    await page.pause();

    const nameField : Locator = page.getByRole('textbox', {name: 'Enter Name'});

    await nameField.fill(('Playwright'));
    let data: string = await nameField.inputValue();
    console.log('Before clear:', data);
    await nameField.clear();
    let data2: string = await nameField.inputValue();
    console.log('After clear:', data2);
    await page.getByRole('textbox', {name: 'Enter Name'}).clear();



});