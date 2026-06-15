const { expect } = require('@playwright/test');
const { BasePage } = require('./BasePage'); // Importamos la clase madre

// Heredamos de BasePage usando 'extends'
class CartPage extends BasePage {

  constructor(page) {
    super(page); // 'super' inicializa la página en BasePage de forma automática

    // Selectores específicos de la pantalla del carrito
    this.cartItemName = page.locator('[data-test="item-4-title-link"]');
    this.checkoutButton = page.locator('[data-test="checkout"]');
  }

  async verifyProductInCart(productName) {
    await expect(this.cartItemName).toHaveText(productName);
  }

  async clickCheckout() {
    await this.checkoutButton.click();
  }
}

module.exports = { CartPage };
