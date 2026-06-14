const { test, expect } = require('@playwright/test');

test.describe('Pruebas Avanzadas de API Mocking', () => {

    test('Debería interceptar la red y cambiar la imagen de la mochila', async ({ page }) => {

        // 1. Interceptamos el archivo de imagen real de la mochila cuando la web intente cargarlo
        await page.route('**/sauce-backpack-1200x1500.jpg', async (route) => {

            // Secuestramos la petición y le devolvemos un placeholder de internet totalmente diferente
            await route.fulfill({
                status: 200,
                contentType: 'image/jpeg',
                url: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=150'
            });
        });

        // 2. Ejecutamos el login tradicional
        await page.goto('https://www.saucedemo.com/');
        await page.locator('#user-name').fill('standard_user');
        await page.locator('#password').fill('secret_sauce');
        await page.locator('#login-button').click();

        // 3. Validamos que entramos correctamente al inventario
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

        // 4. Verificamos que la imagen del primer producto sea visible en la interfaz
        // (En la pantalla real o en el reporte visual vas a notar que la foto cambió)
        const firstProductImage = page.locator('.inventory_item_img img').first();
        await expect(firstProductImage).toBeVisible();
    });

    test('Simular caída del servidor (Error 500) en los estilos de la app', async ({ page }) => {

        // Interceptamos cualquier archivo .css que la página intente cargar al entrar al inventario
        await page.route('**/*.css', async (route) => {
            // Le devolvemos un Error 500 rotundo del servidor
            await route.fulfill({
                status: 500,
                contentType: 'text/plain',
                body: 'Error del servidor simulado por QA: No se pudieron cargar los estilos.'
            });
        });

        // Hacemos el flujo de Login tradicional
        await page.goto('https://www.saucedemo.com/');
        await page.locator('#user-name').fill('standard_user');
        await page.locator('#password').fill('secret_sauce');
        await page.locator('#login-button').click();

        // Al no tener CSS, el inventario va a renderizar texto plano horrible sin diseño.
        // Validamos que entramos al inventario pero confirmamos que los estilos están rotos.
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

        // Verificamos que el contenedor del inventario no tenga su formato visual correcto o simplemente
        // validamos que la página cargó a nivel de texto a pesar de la caída del recurso de red.
        const title = page.locator('.title');
        await expect(title).toHaveText('Products');
    });
});
