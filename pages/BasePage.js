const { expect } = require('@playwright/test');

class BasePage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
    }

    // Método común para navegar usando rutas relativas gracias a tu baseURL
    async navigateTo(path) {
        await this.page.goto(path);
    }

    // Método universal para verificar URLs con expresiones regulares
    async verifyURL(urlPattern) {
        await expect(this.page).toHaveURL(urlPattern);
    }

    // Un método pro para esperar que la pantalla esté completamente quieta (sin animaciones)
    async waitForNetworkIdle() {
        await this.page.waitForLoadState('networkidle');
    }
}

module.exports = { BasePage };
