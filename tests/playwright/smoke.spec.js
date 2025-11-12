const { test, expect } = require('@playwright/test');
const BASE = process.env.BASE_URL || 'http://localhost:5500';

test('halaman demo tampil dan tabel Grid.js terlihat', async ({ page }) => {
  await page.goto(BASE);
  await expect(page.getByRole('heading', { level: 1, name: /demo grid\.js/i })).toBeVisible();
  await expect(page.locator('.gridjs-container, .gridjs-table')).toBeVisible({ timeout: 10000 });
});
