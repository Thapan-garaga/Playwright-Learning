import {test, expect, type Locator} from '@playwright/test';

test.skip("Test Webtables", async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForTimeout(2000);
    await page.pause();

    const pagelinks = page.locator('ul.pagination a');

    for(const pagelink of await pagelinks.all()){
        const linktext: string = await pagelink.innerText();
        console.log("Link text is:", linktext);
        pagelink.click();
        // await page.waitForTimeout(1000);
    }
    const table = page.locator('table#productTable');
    const tableheaders: Locator = page.locator('table#productTable thead tr th');
    const rows: Locator = page.locator('table#productTable tbody tr');

    for(const tableheader of await tableheaders.all()){
        const headertext: string = await tableheader.innerText();
        console.log("Table header text is:", headertext);

    }
    for(const pagelink of await pagelinks.all()){
        await pagelink.click();
        for(const row of await rows.all()){
            const columns: Locator = row.locator('td');
            const productname: string = await columns.nth(1).innerText();
            const rowtext: string = await row.innerText();
            if(productname == 'Tablet' || productname == 'Digital Camera' || 
                productname == 'Fitness Tracker'){
                await columns.nth(3).locator('input').check();
                break;
            }
        }
    }





});
