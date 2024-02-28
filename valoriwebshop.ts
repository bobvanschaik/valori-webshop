import { test, expect } from '@playwright/test';
import { login-page } from './playwright-dev-page';

test('Buy Adventure Mug', async ({ page }) => {
  await page.goto('https://valoriwebshop.nl/en/');
  await page.getByRole('link', { name: 'Accessories', exact: true }).click();
  await page.getByRole('link', { name: 'Mug The adventure begins' }).first().click();
  await page.getByRole('button', { name: ' Add to cart' }).click();
  await page.getByRole('link', { name: ' Proceed to checkout' }).click();
  await page.getByRole('link', { name: 'Proceed to checkout' }).click();
  const title = await page.title();
  expect(title).toBe('Valori Testautomation Webshop');
});

test('Find Mug By Exact Name', async ({ page }) => {
  await page.goto('https://valoriwebshop.nl/en/');
  await page.getByText('Mug The best is yet to come').click();
  await page.locator('#wrapper').getByRole('link', { name: 'Accessories', exact: true }).click();
});

test('Use Filter to find locator', async ({ page }) => {
await page.goto('https://valoriwebshop.nl/en/');
await page
    .getByRole('listitem')
    .filter({ hasText: 'Product 2' })
    .getByRole('button', { name: 'Add to cart' })
    .click();
  });

  test('Account Login', async ({ page }) => {
    // await login-page.navigateTo();
    await page.goto('https://valoriwebshop.nl/en/');
    await page.getByRole('link', { name: ' Sign in' }).click();
    await page.getByLabel('Email').click();
    await page.getByLabel('Email').fill('tmxjj4+2cvclasf5vv2c@guerrillamail.org');
    await page.getByLabel('Email').press('Tab');
    await page.getByLabel('Password input').click();
    await page.getByLabel('Password input').fill('Y72*R+MsG-yzj68');
    await page.getByRole('button', { name: 'Sign in' }).click();
  });  
