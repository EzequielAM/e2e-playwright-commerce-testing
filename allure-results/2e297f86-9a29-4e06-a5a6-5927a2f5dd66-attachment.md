# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: shopping.spec.js >> SauceDemo - Shopping Cart End-to-End Tests >> should add product to cart and proceed to checkout
- Location: tests\shopping.spec.js:6:3

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator:  locator('[data-test="item-4-title-link"]')
Expected: "Sauce Labs Backpack DEAAAA"
Received: "Sauce Labs Backpack"
Timeout:  5000ms

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('[data-test="item-4-title-link"]')
    14 × locator resolved to <a href="#" id="item_4_title_link" data-test="item-4-title-link">…</a>
       - unexpected value "Sauce Labs Backpack"

```

```yaml
- link "Sauce Labs Backpack":
  - /url: "#"
```

# Test source

```ts
  1  | const { expect } = require('@playwright/test');
  2  | const { BasePage } = require('./BasePage'); // Importamos la clase madre
  3  | 
  4  | // Heredamos de BasePage usando 'extends'
  5  | class CartPage extends BasePage {
  6  | 
  7  |   constructor(page) {
  8  |     super(page); // 'super' inicializa la página en BasePage de forma automática
  9  | 
  10 |     // Selectores específicos de la pantalla del carrito
  11 |     this.cartItemName = page.locator('[data-test="item-4-title-link"]');
  12 |     this.checkoutButton = page.locator('[data-test="checkout"]');
  13 |   }
  14 | 
  15 |   async verifyProductInCart(productName) {
> 16 |     await expect(this.cartItemName).toHaveText(productName);
     |                                     ^ Error: expect(locator).toHaveText(expected) failed
  17 |   }
  18 | 
  19 |   async clickCheckout() {
  20 |     await this.checkoutButton.click();
  21 |   }
  22 | }
  23 | 
  24 | module.exports = { CartPage };
  25 | 
```