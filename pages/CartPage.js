const {expect} = require('@playwright/test');
class CartPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
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
module.exports = {CartPage};
