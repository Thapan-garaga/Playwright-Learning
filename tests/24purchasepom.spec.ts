import {test, expect} from '@playwright/test';
import PageObjectManager from '../pages/PageObjectManager';
// import LoginPage from '../pages/LoginPage';
// import PlaceOrderPage from '../pages/PlaceOrderPage';

// let loginPage: LoginPage;
// let placeOrderPage: PlaceOrderPage;
let POManager: PageObjectManager;


const url: string = "https://rahulshettyacademy.com/client/#/auth/login";
let ProdName: string = 'ZARA COAT 3';
let countryName: string = 'india';
test("Login to client Application", async ({page}) => {

    POManager = new PageObjectManager(page);

    // loginPage = new LoginPage(page);
    // placeOrderPage = new PlaceOrderPage(page);

    await POManager.loginpage.goto(url);
    await POManager.loginpage.login('splaywright@gmail.com', 'Gomasa@1988');
    
    await POManager.placeOrderPage.selectProduct(ProdName);
    await POManager.placeOrderPage.checkout();
    await POManager.placeOrderPage.PlaceOrder(countryName);
    let orderId = await POManager.placeOrderPage.getOrderId();
    await POManager.placeOrderPage.viewOrder(orderId);


    await POManager.loginpage.logoutApp();
    // loginPage.login('Gomasa@1988');


    // await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    // await page.waitForLoadState('domcontentloaded');
    // await page.pause();

    // await page.locator('input#userEmail').fill('splaywright@gmail.com');
    // await page.locator('input#userPassword').fill('Gomasa@1988');
    // await page.locator('input#login').click();

    // const cards = await page.locator('div.card').all();

    // for(const card of cards)
    // {

    //     const data = await card.locator('b').innerText();
    //     if(data == 'ZARA COAT 3'){

    //         await card.getByText(' Add To Cart').click();
    //         break;
    //     }
    // }

    // await page.locator('button[routerlink*="cart"]').click();
    // await page.getByText('Checkout').click();

    // await page.getByPlaceholder('Select Country').pressSequentially('India');
    // await page.locator('button.ta-item').last().click();
    // await page.getByText('Place Order ').click();


    // const itemnumber = (await (page.locator('label.ng-star-inserted').innerText())).replaceAll('|', '').trim();
    // await page.locator('button[routerlink*="myorders"]').click();

    // const rows = await page.locator('table.table-bordered tbody tr').all();
    // for(const row of rows){
    //     const tableItemNumber = await row.locator('th').innerText();
    //     if(itemnumber == tableItemNumber)
    //     {
    //         row.getByText('View').click();
    //         break;
    //     }
    // }


    // await page.getByText(' View Orders ').click();

    // await page.getByText(' Sign Out ').click();









});