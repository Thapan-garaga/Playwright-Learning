import {test, expect, type Locator} from '@playwright/test';

test.skip("Selecting Option from Dropdown", async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForTimeout(2000);
    await page.pause();

    const mdropdown: Locator = page.locator('select#colors');

    // await mdropdown.selectOption(['red', 'blue']);
    await mdropdown.selectOption([{value: 'red'}, {index: 2}, {label: 'Yellow'}]);
    await page.waitForTimeout(1000);


});
test("Selecting search from Dropdown", async ({page}) => {

    await page.goto("https://www.google.com/");
    await page.waitForTimeout(2000);
    await page.pause();

    const searchbox: Locator = page.locator('textarea#APjFqb.gLFyf');
    const suggestions: Locator =page.locator('ul.G43f7e li.sbct');

    await searchbox.fill('playwright');
    await page.waitForTimeout(1000);
    await suggestions.count();
    await page.waitForTimeout(1000);
    console.log(await suggestions.first().innerText());
    await page.waitForTimeout(1000);
    console.log(await suggestions.nth(6).innerText());

    for(const suggestion of await suggestions.all()){
        if(await suggestion.innerText() === 'Playwright Automation'){
            await suggestion.click();
            break;
        }
    }
    
    // for(const suggestion of suggestions){
    //     console.log("Suggestion is:", suggestion);
    // }


});
