import {type Locator, type Page} from '@playwright/test';

export default class PageObjects{

    readonly page: Page;
    readonly userEmail: Locator;
    readonly password: Locator;
    readonly loginapp: Locator;
    readonly logout: Locator;
    readonly products: Locator;
    readonly cart: Locator;
    readonly checkoutBtn: Locator;
    readonly country: Locator;
    readonly selectCountry: Locator;
    readonly pOrder: Locator;
    readonly orderId: Locator;
    readonly myOrders: Locator;
    readonly rows: Locator;
    readonly viewOrders: Locator;    

    constructor(page: Page){
        this.page = page;
        this.userEmail = this.page.locator('input#userEmail');
        this.password = this.page.locator('input#userPassword');
        this.loginapp = this.page.locator('input#login');
        this.logout = this.page.getByText(' Sign Out ');
        this.products = this.page.locator('div.card');
        this.cart = this.page.locator('button[routerlink*="cart"]');
        this.checkoutBtn = this.page.getByText('Checkout');
        this.country = this.page.getByPlaceholder('Select Country');
        this.selectCountry = this.page.locator('button.ta-item');
        this.pOrder = this.page.getByText('Place Order ');
        this.orderId = this.page.locator('label.ng-star-inserted');
        this.myOrders = this.page.locator('button[routerlink*="myorders"]');
        this.rows = this.page.locator('table.table-bordered tbody tr');
        this.viewOrders = this.page.getByText(' View Orders ');





    }




}