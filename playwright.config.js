// @ts-check
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  use: { baseURL: 'http://localhost:5500', headless: true },
  webServer: {
    command: 'cmd /c "npx serve tests/demo -l 5500"',
    url: 'http://localhost:5500',
    reuseExistingServer: true,
    timeout: 60000,
  },
});
