import { test as setup, expect } from '@playwright/test';

const authFile = 'playwright/.auth/user.json';

setup('Autenticación del usuario y almacenamiento de estado', async ({ page }) => {
  // Navega al login
  await page.goto('/'); // Va directamente a la baseURL de tu config

  // Realiza el login por única vez
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();

  // Asegura que entró al inventario antes de guardar la sesión
  await expect(page).toHaveURL(/.*inventory.html/);

  // Guarda las cookies y el local storage en la carpeta oculta de almacenamiento
  await page.context().storageState({ path: authFile });
});
