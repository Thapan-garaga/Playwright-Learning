# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 13screenshot.spec.ts >> screenshot
- Location: tests\13screenshot.spec.ts:3:5

# Error details

```
Error: expect(Buffer).toMatchSnapshot(expected) failed

  Expected an image 1280px by 4028px, received 951px by 185px. 134968 pixels (ratio 0.03 of all image pixels) are different.

```

# Test source

```ts
  1  | import {test, expect, type Locator} from "@playwright/test";
  2  | 
  3  | test("screenshot", async ({page}) => {
  4  | 
  5  |     await page.goto("https://testautomationpractice.blogspot.com/");
  6  |     await page.waitForLoadState("domcontentloaded");
  7  |     await page.pause();
  8  | 
  9  |     const title = page.locator("div#header-inner");
  10 | 
  11 |     // await title.screenshot();
  12 |     // await title.screenshot({path: './screenshots/title1.jpg'}); 
  13 |     // await page.screenshot({path: './screenshots/title2.png'});
  14 |     // await page.screenshot({path: './screenshots/title3.jpg', fullPage: true});
  15 |     expect.soft(await title.screenshot({path: 'title2.jpg'}))
> 16 |     .toMatchSnapshot({path: 'title1.jpg'});
     |      ^ Error: expect(Buffer).toMatchSnapshot(expected) failed
  17 |     
  18 |     await page.close();
  19 | 
  20 | 
  21 | });
```