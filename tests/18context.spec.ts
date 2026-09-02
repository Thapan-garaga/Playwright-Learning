import {test, expect, chromium, Browser, BrowserContext, Page} from '@playwright/test';

test("Browser Settings", async ( ) => {

    const browser = await chromium.launch();
    const context = await browser.newContext(
        {
            // viewport: {width: 1500, height: 680},
            // ignoreHTTPSErrors: true,
            // proxy: {

            //     server: 'http://myproxy.com:3128',
            //     username: 'username',
            //     password: 'Password',
            //     bypass: 'bypass'

            // }
        }


    );
    
    await context.addCookies(

        [
            {
                name: 'rahulshettyacademy_session',
                value: 'mohan_raj',
                domain: 'rahulshettyacademy',
                path: '/'

            }

        ]

    );

    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    await page.locator('#userEmail').fill('splaywright@gmail.com');
    await page.locator('#userPassword').fill('Gomasa@1988');
    await page.locator('#login').click();
    await page.pause();

    const cookies = await context.cookies();

    for(const cookie of cookies)
    {
        console.log(cookie);
    }
    await page.waitForTimeout(50000);

    page.close();



});
