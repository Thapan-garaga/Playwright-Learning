import {test, expect, type Locator} from "@playwright/test";

test("download files", async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/p/download-files_25.html");
    await page.waitForLoadState("domcontentloaded");
    await page.pause();

    const textbox = page.locator('textarea#inputText');
    const generatetxt = page.locator('button#generateTxt');
    const generatepdf = page.locator('button#generatePdf');
    const downloadtxtfile = page.locator('a#txtDownloadLink');
    const downloadpdffile = page.locator('a#pdfDownloadLink');
    

    await textbox.fill('Playwright');
    await generatepdf.click();

    const [download] = await Promise.all(
    [
        page.waitForEvent('download'),
        await downloadpdffile.click()


    ]);

    // let downloadfilename = download.suggestedFilename();
    await download.saveAs(`./downloads/${download.suggestedFilename()}`);


    




});