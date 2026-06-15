const { expect } = require('@playwright/test');
const { BasePage } = require('./BasePage');

class CheckoutStepOnePage extends BasePage {
  constructor(page) {
    super(page);
    this.firstNameInput = page.locator('[data-test="firstName"]');
    this.lastNameInput = page.locator('[data-test="lastName"]');
    this.postalCodeInput = page.locator('[data-test="postalCode"]');
    this.continueButton = page.locator('[data-test="continue"]');
    this.errorMessage = page.locator('[data-test="error"]');
  }

  async fillInformation(firstName, lastName, postalCode) {
    if (firstName) await this.firstNameInput.fill(firstName);
    if (lastName) await this.lastNameInput.fill(lastName);
    if (postalCode) await this.postalCodeInput.fill(postalCode);
    await this.continueButton.click();
  }

  async assertErrorMessage(expectedText) {
    await expect(this.errorMessage).toBeVisible();
    await expect(this.errorMessage).toContainText(expectedText);
  }
}

module.exports = { CheckoutStepOnePage };
