# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: mocking.spec.js >> Pruebas Avanzadas de API Mocking >> Simular caída del servidor (Error 500) en un recurso estático
- Location: tests\mocking.spec.js:33:5

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('html')
Expected substring: "Internal Server Error (Simulado por QA)"
Received string:    "Open MenuAll ItemsAboutLogoutReset App StateClose MenuSwag LabsProductsName (A to Z)Name (A to Z)Name (Z to A)Price (low to high)Price (high to low)Sauce Labs Backpackcarry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.$29.99Add to cartSauce Labs Bike LightA red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.$9.99Add to cartSauce Labs Bolt T-ShirtGet your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.$15.99Add to cartSauce Labs Fleece JacketIt's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.$49.99Add to cartSauce Labs OnesieRib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.$7.99Add to cartTest.allTheThings() T-Shirt (Red)This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.$15.99Add to cartTwitterFacebookLinkedIn© 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy"
Timeout: 5000ms

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('html')
    13 × locator resolved to <html lang="en">…</html>
       - unexpected value "Open MenuAll ItemsAboutLogoutReset App StateClose MenuSwag LabsProductsName (A to Z)Name (A to Z)Name (Z to A)Price (low to high)Price (high to low)Sauce Labs Backpackcarry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.$29.99Add to cartSauce Labs Bike LightA red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.$9.99Add to cartSauce Labs Bolt T-ShirtGet your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.$15.99Add to cartSauce Labs Fleece JacketIt's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.$49.99Add to cartSauce Labs OnesieRib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.$7.99Add to cartTest.allTheThings() T-Shirt (Red)This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.$15.99Add to cartTwitterFacebookLinkedIn© 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy"

```

```yaml
- document:
  - button "Open Menu"
  - img "Open Menu"
  - text: Swag Labs Products Name (A to Z)
  - combobox:
    - option "Name (A to Z)" [selected]
    - option "Name (Z to A)"
    - option "Price (low to high)"
    - option "Price (high to low)"
  - link "Sauce Labs Backpack":
    - /url: "#"
    - img "Sauce Labs Backpack"
  - link "Sauce Labs Backpack":
    - /url: "#"
  - text: carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection. $29.99
  - button "Add to cart"
  - link "Sauce Labs Bike Light":
    - /url: "#"
    - img "Sauce Labs Bike Light"
  - link "Sauce Labs Bike Light":
    - /url: "#"
  - text: A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included. $9.99
  - button "Add to cart"
  - link "Sauce Labs Bolt T-Shirt":
    - /url: "#"
    - img "Sauce Labs Bolt T-Shirt"
  - link "Sauce Labs Bolt T-Shirt":
    - /url: "#"
  - text: Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt. $15.99
  - button "Add to cart"
  - link "Sauce Labs Fleece Jacket":
    - /url: "#"
    - img "Sauce Labs Fleece Jacket"
  - link "Sauce Labs Fleece Jacket":
    - /url: "#"
  - text: It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office. $49.99
  - button "Add to cart"
  - link "Sauce Labs Onesie":
    - /url: "#"
    - img "Sauce Labs Onesie"
  - link "Sauce Labs Onesie":
    - /url: "#"
  - text: Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel. $7.99
  - button "Add to cart"
  - link "Test.allTheThings() T-Shirt (Red)":
    - /url: "#"
    - img "Test.allTheThings() T-Shirt (Red)"
  - link "Test.allTheThings() T-Shirt (Red)":
    - /url: "#"
  - text: This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton. $15.99
  - button "Add to cart"
  - contentinfo:
    - list:
      - listitem:
        - link "Twitter":
          - /url: https://twitter.com/saucelabs
      - listitem:
        - link "Facebook":
          - /url: https://www.facebook.com/saucelabs
      - listitem:
        - link "LinkedIn":
          - /url: https://www.linkedin.com/company/sauce-labs/
    - text: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | 
  3  | test.describe('Pruebas Avanzadas de API Mocking', () => {
  4  | 
  5  |     test('Debería interceptar la red y cambiar la imagen de la mochila', async ({ page }) => {
  6  | 
  7  |         // 1. Interceptamos el archivo de imagen real de la mochila cuando la web intente cargarlo
  8  |         await page.route('**/sauce-backpack-1200x1500.jpg', async (route) => {
  9  | 
  10 |             // Secuestramos la petición y le devolvemos un placeholder de internet totalmente diferente
  11 |             await route.fulfill({
  12 |                 status: 200,
  13 |                 contentType: 'image/jpeg',
  14 |                 url: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=150'
  15 |             });
  16 |         });
  17 | 
  18 |         // 2. Ejecutamos el login tradicional
  19 |         await page.goto('https://www.saucedemo.com/');
  20 |         await page.locator('#user-name').fill('standard_user');
  21 |         await page.locator('#password').fill('secret_sauce');
  22 |         await page.locator('#login-button').click();
  23 | 
  24 |         // 3. Validamos que entramos correctamente al inventario
  25 |         await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  26 | 
  27 |         // 4. Verificamos que la imagen del primer producto sea visible en la interfaz
  28 |         // (En la pantalla real o en el reporte visual vas a notar que la foto cambió)
  29 |         const firstProductImage = page.locator('.inventory_item_img img').first();
  30 |         await expect(firstProductImage).toBeVisible();
  31 |     });
  32 | 
  33 |     test('Simular caída del servidor (Error 500) en un recurso estático', async ({ page }) => {
  34 | 
  35 |         // Interceptamos la petición del HTML del inventario para simular que el servidor se rompe al redirigir
  36 |         await page.route('**/inventory.html', async (route) => {
  37 |             await route.fulfill({
  38 |                 status: 500,
  39 |                 contentType: 'text/html',
  40 |                 body: '<h1>Internal Server Error (Simulado por QA)</h1>'
  41 |             });
  42 |         });
  43 | 
  44 |         // Hacemos el flujo de Login
  45 |         await page.goto('https://www.saucedemo.com/');
  46 |         await page.locator('#user-name').fill('standard_user');
  47 |         await page.locator('#password').fill('secret_sauce');
  48 |         await page.locator('#login-button').click();
  49 | 
  50 |         // Validamos que el navegador efectivamente recibió el error y renderizó nuestro texto de bloqueo
> 51 |         await expect(page.locator('html')).toContainText('Internal Server Error (Simulado por QA)');
     |                                            ^ Error: expect(locator).toContainText(expected) failed
  52 |     });
  53 | });
  54 | 
```