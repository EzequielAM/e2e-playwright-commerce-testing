const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test.describe('SauceDemo - Authentication Tests (POM)', () => {

  test('Should login successfully with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);


    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');


    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  });

  test('Should display error message with invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login('invalid_user', 'wrong_password');

    // Validación usando el método asertivo de nuestro Page Object
    await loginPage.assertErrorMessage('Username and password do not match any user in this service');
  });

});
