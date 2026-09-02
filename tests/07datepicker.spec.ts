import {test, expect, type Locator} from '@playwright/test';

test("Date Picker Test", async ({page}) => {
    let date: string = '6';
    let month: string = 'July';
    let year: string = '2026';

    await page.goto("https://jqueryui.com/datepicker/#other-months");
    await page.waitForLoadState('domcontentloaded');
    await page.pause();

    const frame = page.frameLocator('iframe.demo-frame');
    const dateField: Locator = frame.locator('input#datepicker');
    const prevButton: Locator = frame.locator('//a[@title="Prev"]');
    const nextButton: Locator = frame.getByText('Next');

    const monthText: Locator = frame.locator('span.ui-datepicker-month');
    const yearText: Locator = frame.locator('span.ui-datepicker-year');
    const dateValue = frame.locator(`//a[@class="ui-state-default" and text()="${date}"]`);

    await dateField.click();
    // let status: boolean = await nextButton.isVisible();
    let status = true;
    while(status){
        if(await monthText.innerText() === month && await yearText.innerText() === year){

            await dateValue.click();
            status = false;
        }
        else{
            await prevButton.click();
        }
    }
    // await dateValue.click();
    await page.close();
});