import { test, expect } from '@playwright/test'


test("Title1", async ({page}) => {
await page.goto("https://testautomationpractice.blogspot.com/");
// await expect.soft(page).toHaveTitle('Automation Testing ');
page.getByRole('textbox', {name: 'Enter Name'});
page.getByRole('button', {name: 'Submit'});
page.getByRole('listbox', {name: 'Colors', exact: true});

// await page.close();
page.getByText('Automation Testing Practice', {exact: true});
page.getByLabel('Email Address', {exact: true});
page.getByTitle('Home Page Link', {exact: true});
page.getByPlaceholder('First Name', {exact: true});
page.getByAltText('Logo Image', {exact: true});
page.getByTestId('edit-profile-btn');
await page.close();

});
