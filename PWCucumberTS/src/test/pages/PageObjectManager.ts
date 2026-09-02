import {type Page} from '@playwright/test';
import LoginPage from '../pages/LoginPage';
// import PlaceOrderPage from '../pages/PlaceOrderPage';
import TestData from '../testdata/testdata';

export default class PageObjectManager{

    readonly page: Page;
    readonly loginpage: LoginPage;
    // readonly placeOrderPage: PlaceOrderPage;
    readonly testData: TestData;

    constructor(page: Page){

        this.page = page;
        this.loginpage = new LoginPage(this.page);
        // this.placeOrderPage = new PlaceOrderPage(this.page);
        this.testData = new TestData();


    }


}