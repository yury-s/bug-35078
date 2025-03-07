import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByRole('link', { name: 'Store' }).click();
  await page.waitForTimeout(1000);
  await page.locator('[data-test="nav-links"]').getByRole('link', { name: 'Earbuds' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'Tablets' }).click();
  await page.waitForTimeout(1000);
});