import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.getByRole('textbox', { name: 'Enter Name' }).click();
  await page.getByRole('textbox', { name: 'Enter Name' }).fill('Playwright');
  await page.getByRole('textbox', { name: 'Enter EMail' }).click();
  await page.getByRole('textbox', { name: 'Enter EMail' }).fill('splaywright@gmail.com');
  await page.getByRole('textbox', { name: 'Enter Phone' }).click();
  await page.getByRole('textbox', { name: 'Enter Phone' }).fill('8897836779');
  await page.getByRole('textbox', { name: 'Enter Phone' }).press('Tab');
  await page.getByRole('textbox', { name: 'Address:' }).click();
  await page.getByRole('textbox', { name: 'Address:' }).fill('narayana reddy colony');
  await page.getByRole('radio', { name: 'Male', exact: true }).check();
  await page.getByRole('checkbox', { name: 'Monday' }).check();
  await page.locator('#datepicker').click();
  await page.getByRole('link', { name: '12' }).click();
  await page.locator('#txtDate').click();
  await page.getByRole('link', { name: '5', exact: true }).click();
  await page.locator('#post-body-1307673142697428135').getByRole('button', { name: 'Submit' }).click();
  await page.getByPlaceholder('Start Date').fill('2026-08-29');
  await page.getByPlaceholder('End Date').fill('2026-08-23');
  await page.locator('#post-body-1307673142697428135').getByRole('button', { name: 'Submit' }).click();
  await page.locator('#droppable').click();
  await page.locator('#draggable').click();
});