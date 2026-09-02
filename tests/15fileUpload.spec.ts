import {test, expect, type Locator} from "@playwright/test";

test("Keyboard actions", async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForLoadState("domcontentloaded");
    await page.pause();

    const singleFile = page.locator('input#singleFileInput')
    const singleFileBtn = page.getByText('Upload Single File');
    const singleFileStatus = page.locator('p#singleFileStatus');

    const multipleFiles = page.locator('input#multipleFilesInput');
    const multipleFilesBtn = page.getByText('Upload Multiple Files');
    const multipleFilesStatus = page.locator('p#multipleFilesStatus');

    await singleFile.setInputFiles('./screenshots/title1.jpg');
    await singleFileBtn.click();
    expect.soft(await singleFileStatus.innerText()).toContain('title1.jpg');

    await multipleFiles.setInputFiles(['./screenshots/title1.jpg', './screenshots/title2.png']);
    await multipleFilesBtn.click();
    expect.soft(await multipleFilesStatus.innerText()).toContain('title1.jpg');
    expect.soft(await multipleFilesStatus.innerText()).toContain('title2.png');

    await singleFile.setInputFiles([]);
    await multipleFiles.setInputFiles([]);
    
    await page.close();






});