const { test, expect } = require('@playwright/test');

test.describe('SauceDemo - Visual Regression Testing', () => {

  test('Validar consistencia visual de la vitrina de productos', async ({ page }) => {
    // Entramos directamente al inventario con la sesión inyectada
    await page.goto('/inventory.html');
    await page.waitForURL('https://www.saucedemo.com/inventory.html');

    // Realiza la comparación de píxeles contra la captura de referencia master
    await expect(page).toHaveScreenshot('productos-vitrina.png', {
      fullPage: true,
      maxDiffPixels: 100,
    });
  });

});
