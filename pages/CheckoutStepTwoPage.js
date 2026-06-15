const { expect } = require('@playwright/test');
const { BasePage } = require('./BasePage');

class CheckoutStepTwoPage extends BasePage {
  constructor(page) {
    super(page);
    this.subtotalLabel = page.locator('.summary_subtotal_label');
    this.taxLabel = page.locator('.summary_tax_label');
    this.totalLabel = page.locator('.summary_total_label');
    this.finishButton = page.locator('[data-test="finish"]');
    this.completeHeader = page.locator('.complete-header');
  }

  async verifyPricesExist() {
    // Validamos que los elementos de precio se rendericen correctamente
    await expect(this.subtotalLabel).toBeVisible();
    await expect(this.totalLabel).toBeVisible();
  }

  async clickFinish() {
    await this.finishButton.click();
  }

  async verifyOrderCompleted(expectedMessage) {
    await expect(this.completeHeader).toBeVisible();
    await expect(this.completeHeader).toHaveText(expectedMessage);
  }
}

module.exports = { CheckoutStepTwoPage };
