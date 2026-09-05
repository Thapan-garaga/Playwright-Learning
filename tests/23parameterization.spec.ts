import {test, expect} from '@playwright/test';
import PageObjectManager from '../pages/PageObjectManager';
// import LoginPage from '../pages/LoginPage';
import { parse } from 'csv-parse/sync';
import PATH from 'path';
import ReadFiles from '../utils/ReadFiles';
import fs from 'fs';
import path from 'path';
let POManager: PageObjectManager;
// const readFiles: ReadFiles = new ReadFiles();

// const filePath = './TestData/PlaceOrder.json';

// const data = fs.readFileSync(filePath,'utf-8');

// const loginData: any = JSON.parse(data);
const readFiles: ReadFiles = new ReadFiles();

// const loginData: any = readFiles.readJsonfile('./TestData/PlaceOrder.json');
// const filePath = path.join(__dirname, '../TestData/PlaceOrder.xlsx');
const loginData: any = readFiles.readExcelFile('./TestData/PlaceOrder.xlsx');

// const url: string = "https://rahulshettyacademy.com/client/#/auth/login";
for (const {prodName, country} of loginData)
{
    console.log(`${prodName}`);
    console.log(`${country}`);
    test.describe(`Place order for the user ${prodName}`, async function(){

        test.beforeEach("Before Every test case", async ({page}) => {

            POManager = new PageObjectManager(page);

            await POManager.loginpage.goto(POManager.testData.url);
            await POManager.loginpage.login(POManager.testData.email, POManager.testData.password);



        });

        test(`Place order for the user ${prodName}`, async ({page}) => {

            // loginPage = new LoginPage(page);
            
            await POManager.placeOrderPage.selectProduct(prodName);
            await POManager.placeOrderPage.checkout();
            await POManager.placeOrderPage.PlaceOrder(country);
            let orderId = await POManager.placeOrderPage.getOrderId();
            await POManager.placeOrderPage.viewOrder(orderId);


            

            
        });
        
        test.afterEach("Test After Each", async () => {

            await POManager.loginpage.logoutApp();

        });
    });
}