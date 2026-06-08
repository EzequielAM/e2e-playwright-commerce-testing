const {test, expect} = require("@Playwright/test");
const {ProductsPage} = require("../pages/ProductsPage");
const {CartPage} = require("../pages/CartPage");
const {LoginPage} = require("../pages/LoginPage");

test.describe("SauceDemo - Shopping Cart End-to-End Tests", () => {
  test("should add product to cart and proceed to checkout", async ({page}) => {
    // Initialize page objects
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);

    // Step 1: Log in to the application
    await loginPage.navigate();
    await loginPage.login("standard_user", "secret_sauce");
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");

    // Step 2: Add a product to the cart
    await productsPage.addToCart();
    await productsPage.verifyCartCount("1");
    await productsPage.goToCart();
    await expect(page).toHaveURL("https://www.saucedemo.com/cart.html");

    // Step 3: Verify the product is in the cart
    await cartPage.verifyProductInCart("Sauce Labs Backpack");
    await cartPage.clickCheckout();
    await expect(page).toHaveURL("https://www.saucedemo.com/checkout-step-one.html");
  });
});
