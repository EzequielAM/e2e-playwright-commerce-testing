const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test.describe('SauceDemo - Visual Regression Testing ', () => {

  test('Validar consistencia visual de la vitrina de productos', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');
    await page.waitForURL('https://www.saucedemo.com/inventory.html');

    await expect(page).toHaveScreenshot('productos-vitrina.png', {
      fullPage: true,
      maxDiffPixels: 100,
    });
  });

});
