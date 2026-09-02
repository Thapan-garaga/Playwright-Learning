import {expect} from '@playwright/test';
import PageObjects from './PageObjects';
import {world} from '../utils/pageFicture';

export default class LoginPage extends PageObjects{
    async goto(url: string){
        await world.page.goto(url);
        await world.page.waitForLoadState('domcontentloaded');
    }

    async login(username: string, password: string){
        await this.userEmail.fill(username);
        await this.password.fill(password);
        await this.loginapp.click();
        await world.page.waitForLoadState('domcontentloaded');
    }

    async verifyLogin(){
        await expect(this.logout).toBeVisible();
    }

    async Logout(){
        await this.logout.click();
        await world.page.waitForLoadState('domcontentloaded');
    }

}

