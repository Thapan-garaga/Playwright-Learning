import {test, expect, type Locator} from '@playwright/test';

test("Clicking on Button", async ({page}) => {

    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.waitForTimeout(2000);
    await page.pause();
    const emailField: Locator = page.locator('input#userEmail');
    const pwdField: Locator = page.locator('input#userPassword');
    const loginBtn: Locator = page.getByRole('button', {name: 'Login'});
    const signOutBtn: Locator = page.getByRole('button', {name: 'Sign Out'});
    const ordersBtn: Locator = page.locator('button[routerlink*="myorders"]');
    const cartBtn: Locator = page.locator('button[routerlink*="cart"]');
    const goToCartBtn: Locator = page.getByText('Go Back to Cart', {exact: true});
    const goToShopBtn: Locator = page.getByText('Go Back to Shop', {exact: true});

    

    await emailField.fill('gomasachandrashekhar@gmail.com');
    await pwdField.fill('Gomasa@1988');
    await loginBtn.click();
    await expect.soft(signOutBtn, 'Sign button should be visible').toBeVisible();
    await ordersBtn.click({button: 'left'});
    await expect.soft(goToCartBtn, 'Go Back to Cart button should be visible').toBeVisible();
    await goToShopBtn.click({button: 'right'});
    await goToCartBtn.click({button: 'left', delay: 200});
    

    await signOutBtn.click();




});
