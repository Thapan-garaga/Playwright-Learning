# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 01textbox.spec.ts >> Handling Text Field
- Location: tests\01textbox.spec.ts:3:5

# Error details

```
Error: page.waitForTimeout: Target page, context or browser has been closed
```

# Test source

```ts
  1  | import { test, type Locator } from '@playwright/test';
  2  | 
  3  | test("Handling Text Field", async ({page}) => {
  4  | 
  5  |     await page.goto("https://testautomationpractice.blogspot.com/");
> 6  |     await page.waitForTimeout(2000);
     |                ^ Error: page.waitForTimeout: Target page, context or browser has been closed
  7  |     await page.pause();
  8  | 
  9  |     const nameField : Locator = page.getByRole('textbox', {name: 'Enter Name'});
  10 | 
  11 |     
  12 |     await nameField.fill(('Playwright'));
  13 |     let data: string = await nameField.inputValue();
  14 |     console.log('Before clear:', data);
  15 |     await nameField.clear();
  16 |     let data2: string = await nameField.inputValue();
  17 |     console.log('After clear:', data2);
  18 |     await page.getByRole('textbox', {name: 'Enter Name'}).clear();
  19 | 
  20 | 
  21 | 
  22 | });
```