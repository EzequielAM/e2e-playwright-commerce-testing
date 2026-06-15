const { expect } = require('@playwright/test');
const { BasePage } = require('./BasePage'); // Importamos la clase madre

// Usamos 'extends' para heredar todas las funciones de BasePage
class LoginPage extends BasePage {

    constructor(page) {
        super(page); // 'super' pasa la 'page' directamente al constructor de BasePage
        // Definimos los selectores específicos de esta pantalla
        this.usernameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login-button');
        this.errorMessage = page.locator('[data-test="error"]');
    }

    async navigate() {
        // Usamos el método heredado de BasePage
        await this.navigateTo('/');
    }

    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async assertErrorMessage(expectedText) {
        await expect(this.errorMessage).toBeVisible();
        await expect(this.errorMessage).toContainText(expectedText);
    }
}

module.exports = { LoginPage };
