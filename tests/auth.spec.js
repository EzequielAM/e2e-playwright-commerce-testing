const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const usuarios = require('../data/usuarios.json');
const { allure } = require('allure-playwright');

test.describe('SauceDemo - Data Driven Authentication Tests (POM)', () => {

  usuarios.forEach((usuario, index) => {

    test(`Login test - ${usuario.tipo} [Case #${index + 1}]`, async ({ page }) => {
      allure.epic('Autenticación');
      allure.feature('Login Dinámico');
      allure.story(`Validar comportamiento de: ${usuario.tipo}`);
      allure.severity(usuario.esperaError ? 'normal' : 'critical');

      const loginPage = new LoginPage(page);
      await loginPage.navigate();
      await loginPage.login(usuario.username, usuario.password);

      if (usuario.esperaError) {
        await loginPage.assertErrorMessage(usuario.mensajeError);
      } else {
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
      }
    });

  });

});
