import {Before, After, BeforeAll, AfterAll, AfterStep, BeforeStep, Status} from '@cucumber/cucumber';

import {chromium, type Browser, type BrowserContext, type Page } from '@playwright/test';
import {world} from './pageFicture';

let browser: Browser;
let context: BrowserContext;
let page: Page;

BeforeAll(async function () {
     browser = await chromium.launch({headless: false});
});

Before(async function () {
    context = await browser.newContext();
    page = await context.newPage();
    context.tracing.start({screenshots: true, snapshots: true, sources: true});
    world.page = page;
});

After(async function () {
    await page.close();
    await context.close();
});

AfterAll(async function () {
    await browser.close();
});  

AfterStep(async function ({scenario}) {
    if (scenario.result?.status === Status.FAILED) {
        const screenshot = await world.page.screenshot();
        this.attach(screenshot, 'image/png');

