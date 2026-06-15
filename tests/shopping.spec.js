const { test, expect } = require("@playwright/test");
const { ProductsPage } = require("../pages/ProductsPage");
const { CartPage } = require("../pages/CartPage");

test.describe("SauceDemo - Shopping Cart End-to-End Tests", () => {
  test("should add product to cart and proceed to checkout", async ({ page }) => {
    // Inicializamos solo los Page Objects necesarios para el flujo de compra
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);

    // Paso 1: Ir directo al inventario (Aprovechando la sesión compartida del Setup)
    await page.goto("/inventory.html");
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");

    // Paso 2: Agregar producto al carrito
    await productsPage.addToCart();
    await productsPage.verifyCartCount("1");
    await productsPage.goToCart();
    await expect(page).toHaveURL("https://www.saucedemo.com/cart.html");

    // Paso 3: Verificar producto en el carrito y proceder al checkout
    await cartPage.verifyProductInCart("Sauce Labs Backpack");
    await cartPage.clickCheckout();
    await expect(page).toHaveURL("https://www.saucedemo.com/checkout-step-one.html");
  });
});
