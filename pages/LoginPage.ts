import {type Page, expect} from '@playwright/test';
import PageObjects from '../pages/PageObjects';

export default class LoginPage extends PageObjects {

    // readonly page: Page;

    constructor(page: Page) {

        super(page);
 
    }

    async goto(url: string){

        await this.page.goto(url);
        await this.page.waitForTimeout(4000);
    }

    async login(email: string, password: string){

        await this.userEmail.fill(email);
        await this.password.fill(password);
        await this.loginapp.click();

        await this.page.waitForTimeout(3000);

    }

    async logoutApp(){


        await this.logout.click();
        await this.page.waitForTimeout(3000);
    }

    







}