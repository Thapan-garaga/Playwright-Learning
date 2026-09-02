import {Given, When, Then} from '@cucumber/cucumber';
import {expect} from '@playwright/test';
import PageObjectManager from '../pages/PageObjectManager';

let pageObjectManager: PageObjectManager;

Given('I am on the login page', {timeout: 10000}, async function (this: any) {
    pageObjectManager = new PageObjectManager(this.page);
    await pageObjectManager.loginpage.goto(pageObjectManager.testData.url);
});

When('I enter valid username and password', async function () {
    await pageObjectManager.loginpage.login(pageObjectManager.testData.username, pageObjectManager.testData.password);
    
});

Then('I should be logged in successfully', async function () {
    expect.soft(pageObjectManager.loginpage.logout).toBeVisible();
    await pageObjectManager.loginpage.Logout();
});