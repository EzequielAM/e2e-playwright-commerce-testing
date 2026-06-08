const {expect} = require('@playwright/test');

class ProductsPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.pageTitle = page.locator('.title');
    this.backpackAddToCartButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.shoppingCartBadge = page.locator('[data-test="shopping-cart-badge"]');
    this.shoppingCartLink = page.locator('[data-test="shopping-cart-link"]');
  }
  async addToCart() {
    await this.backpackAddToCartButton.click();
  }
  async verifyCartCount(count) {
    await expect(this.shoppingCartBadge).toHaveText(count);
  }
  async goToCart() {
    await this.shoppingCartLink.click();
  }
}

module.exports = {ProductsPage};
