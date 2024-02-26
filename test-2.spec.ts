import { test, expect } from '@playwright/test';

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
