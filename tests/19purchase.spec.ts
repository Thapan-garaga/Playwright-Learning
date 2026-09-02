import {test, expect, type Locator} from "@playwright/test";

test.describe("Group orangeHRM Tests", async () => {
    test("login orangeHRM", async ({page}) => {

        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await page.waitForTimeout(2000);

        await page.getByPlaceholder('Username').fill('Admin');
        await page.getByPlaceholder('Password').fill('admin123');
        await page.locator('//button[@type="submit"]').click();


    });


    test("Verify Logout orangeHRM", async ({page}) => {

        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await page.waitForTimeout(2000);

        await page.getByPlaceholder('Username').fill('Admin');
        await page.getByPlaceholder('Password').fill('admin123');
        await page.locator('//button[@type="submit"]').click();

        expect.soft(page.locator('//h6[text()="Dashboard"]')).toBeVisible();

        await page.locator('span.oxd-userdropdown-tab').click();
        await page.getByText('Logout').click();




    });

});
