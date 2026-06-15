const { test, expect } = require('@playwright/test');
const { ProductsPage } = require('../pages/ProductsPage');
const { CartPage } = require('../pages/CartPage');
const { CheckoutStepOnePage } = require('../pages/CheckoutStepOnePage');
const { CheckoutStepTwoPage } = require('../pages/CheckoutStepTwoPage'); // Nuevo

test.describe('SauceDemo - Flujos Avanzados y Negativos de Checkout (POM)', () => {

  let productsPage;
  let cartPage;
  let checkoutStepOnePage;
  let checkoutStepTwoPage; // Nuevo

  test.beforeEach(async ({ page }) => {
    productsPage = new ProductsPage(page);
    cartPage = new CartPage(page);
    checkoutStepOnePage = new CheckoutStepOnePage(page);
    checkoutStepTwoPage = new CheckoutStepTwoPage(page); // Nuevo

    await page.goto('/inventory.html');
    await productsPage.addToCart();
    await productsPage.goToCart();
    await cartPage.clickCheckout();
  });

  test('Error - Debería fallar el checkout si el Nombre está vacío', async () => {
    await checkoutStepOnePage.fillInformation('', 'Muñoz', '1754');
    await checkoutStepOnePage.assertErrorMessage('Error: First Name is required');
  });

  test('Error - Debería fallar el checkout si el Código Postal está vacío', async () => {
    await checkoutStepOnePage.fillInformation('Ezequiel', 'Muñoz', '');
    await checkoutStepOnePage.assertErrorMessage('Error: Postal Code is required');
  });

  test('Éxito - Debería completar el flujo de compra de punta a punta de forma exitosa', async () => {
    // Paso 1: Completamos los datos iniciales
    await checkoutStepOnePage.fillInformation('Ezequiel', 'Muñoz', '1754');

    // Paso 2: Validamos que estamos en el resumen de compra y que los precios están visibles
    await checkoutStepTwoPage.verifyURL(/.*checkout-step-two.html/);
    await checkoutStepTwoPage.verifyPricesExist();

    // Paso 3: Finalizamos la orden
    await checkoutStepTwoPage.clickFinish();

    // Paso 4: Validamos el éxito del end-to-end con el mensaje de confirmación
    await checkoutStepTwoPage.verifyOrderCompleted('Thank you for your order!');
  });

});
