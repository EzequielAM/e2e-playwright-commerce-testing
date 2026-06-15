const { test, expect } = require('@playwright/test');

test.describe('Pruebas Avanzadas de API Mocking', () => {

    test('Debería interceptar la red y cambiar la imagen de la mochila', async ({ page }) => {
        // 1. Interceptamos el archivo de imagen real antes de que se dibuje la pantalla
        await page.route('**/sauce-backpack-1200x1500.jpg', async (route) => {
            await route.fulfill({
                status: 200,
                contentType: 'image/jpeg',
                url: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=150'
            });
        });

        // 2. Ejecutamos el flujo completo de inicio
        await page.goto('https://www.saucedemo.com/');
        await page.locator('#user-name').fill('standard_user');
        await page.locator('#password').fill('secret_sauce');
        await page.locator('#login-button').click();

        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

        const firstProductImage = page.locator('.inventory_item_img img').first();
        await expect(firstProductImage).toBeVisible();
    });

    test('Simular caída del servidor (Error 500) en los estilos de la app', async ({ page }) => {
        await page.route('**/*.css', async (route) => {
            await route.fulfill({
                status: 500,
                contentType: 'text/plain',
                body: 'Error del servidor simulado por QA: No se pudieron cargar los estilos.'
            });
        });

        await page.goto('https://www.saucedemo.com/');
        await page.locator('#user-name').fill('standard_user');
        await page.locator('#password').fill('secret_sauce');
        await page.locator('#login-button').click();

        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

        const title = page.locator('.title');
        await expect(title).toHaveText('Products');
    });
});
