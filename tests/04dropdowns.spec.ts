import {test, expect, type Locator} from '@playwright/test';

test("Selecting Option from Dropdown", async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForTimeout(2000);
    await page.pause();

    const dropdown: Locator = page.locator('select#country');

    await dropdown.selectOption('uk');
    await page.waitForTimeout(1000);

    await dropdown.selectOption({value: 'france'});
    console.log("selected option is:", await dropdown.inputValue());
    await page.waitForTimeout(1000);
    await dropdown.selectOption({value: 'uk'});
    console.log("selected option is:", await dropdown.inputValue());
    await page.waitForTimeout(1000);
    await dropdown.selectOption({index: 9});
    console.log("selected option is:", await dropdown.inputValue());
    await page.waitForTimeout(1000);

    const dropdownlist: string = await dropdown.innerText();
    console.log("Dropdown list is:", dropdownlist);

    const dropdownlist1: string | null = await dropdown.textContent();
    console.log("Dropdown list is:", dropdownlist1);

    const dropdownlist2: string[] = await dropdown.allInnerTexts();
    console.log("Dropdown list is:", dropdownlist2);

    const dropdownlist3: string[] = await dropdown.allTextContents();
    console.log("Dropdown list is:", dropdownlist3);
    
    const options: Locator[] = await dropdown.locator('option').all();

    // await options.length;
    console.log("Total options in dropdown are:", options.length);

    for(const option of options){
        const optionText: string = await option.innerText();
        console.log("Option text is:", optionText);
    }
    await page.close();


});