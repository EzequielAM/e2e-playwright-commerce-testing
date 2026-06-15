const { expect } = require('@playwright/test');
const { BasePage } = require('./BasePage');

class ProductsPage extends BasePage {

    constructor(page) {
        super(page);
        this.bikeLightAddToCartBtn = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
        this.backpackAddToCartBtn = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.cartBadge = page.locator('.shopping_cart_badge');
        this.cartLink = page.locator('.shopping_cart_link');
    }

    async addToCart() {
        // Agrega la mochila por defecto como tenías en tu flujo
        await this.backpackAddToCartBtn.click();
    }

    async verifyCartCount(expectedCount) {
        await expect(this.cartBadge).toHaveText(expectedCount);
    }

    async goToCart() {
        await this.cartLink.click();
    }
}

module.exports = { ProductsPage };
