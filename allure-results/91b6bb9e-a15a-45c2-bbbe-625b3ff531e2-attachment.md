# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: mocking.spec.js >> Pruebas de API Mocking en Saucedemo
- Location: tests\mocking.spec.js:3:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.textContent: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('.error-message-container')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e6]:
        - generic [ref=e7]:
          - button "Open Menu" [ref=e8] [cursor=pointer]
          - img "Open Menu" [ref=e9]
        - generic [ref=e11]: Swag Labs
      - generic [ref=e14]:
        - generic [ref=e15]: Products
        - generic [ref=e17] [cursor=pointer]:
          - generic [ref=e18]: Name (A to Z)
          - combobox [ref=e19]:
            - option "Name (A to Z)" [selected]
            - option "Name (Z to A)"
            - option "Price (low to high)"
            - option "Price (high to low)"
    - generic [ref=e23]:
      - generic [ref=e24]:
        - link "Sauce Labs Backpack" [ref=e26] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Backpack" [ref=e27]
        - generic [ref=e28]:
          - generic [ref=e29]:
            - link "Sauce Labs Backpack" [ref=e30] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e31]: Sauce Labs Backpack
            - generic [ref=e32]: carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.
          - generic [ref=e33]:
            - generic [ref=e34]: $29.99
            - button "Add to cart" [ref=e35] [cursor=pointer]
      - generic [ref=e36]:
        - link "Sauce Labs Bike Light" [ref=e38] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Bike Light" [ref=e39]
        - generic [ref=e40]:
          - generic [ref=e41]:
            - link "Sauce Labs Bike Light" [ref=e42] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e43]: Sauce Labs Bike Light
            - generic [ref=e44]: A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.
          - generic [ref=e45]:
            - generic [ref=e46]: $9.99
            - button "Add to cart" [ref=e47] [cursor=pointer]
      - generic [ref=e48]:
        - link "Sauce Labs Bolt T-Shirt" [ref=e50] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Bolt T-Shirt" [ref=e51]
        - generic [ref=e52]:
          - generic [ref=e53]:
            - link "Sauce Labs Bolt T-Shirt" [ref=e54] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e55]: Sauce Labs Bolt T-Shirt
            - generic [ref=e56]: Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.
          - generic [ref=e57]:
            - generic [ref=e58]: $15.99
            - button "Add to cart" [ref=e59] [cursor=pointer]
      - generic [ref=e60]:
        - link "Sauce Labs Fleece Jacket" [ref=e62] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Fleece Jacket" [ref=e63]
        - generic [ref=e64]:
          - generic [ref=e65]:
            - link "Sauce Labs Fleece Jacket" [ref=e66] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e67]: Sauce Labs Fleece Jacket
            - generic [ref=e68]: It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.
          - generic [ref=e69]:
            - generic [ref=e70]: $49.99
            - button "Add to cart" [ref=e71] [cursor=pointer]
      - generic [ref=e72]:
        - link "Sauce Labs Onesie" [ref=e74] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Onesie" [ref=e75]
        - generic [ref=e76]:
          - generic [ref=e77]:
            - link "Sauce Labs Onesie" [ref=e78] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e79]: Sauce Labs Onesie
            - generic [ref=e80]: Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.
          - generic [ref=e81]:
            - generic [ref=e82]: $7.99
            - button "Add to cart" [ref=e83] [cursor=pointer]
      - generic [ref=e84]:
        - link "Test.allTheThings() T-Shirt (Red)" [ref=e86] [cursor=pointer]:
          - /url: "#"
          - img "Test.allTheThings() T-Shirt (Red)" [ref=e87]
        - generic [ref=e88]:
          - generic [ref=e89]:
            - link "Test.allTheThings() T-Shirt (Red)" [ref=e90] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e91]: Test.allTheThings() T-Shirt (Red)
            - generic [ref=e92]: This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.
          - generic [ref=e93]:
            - generic [ref=e94]: $15.99
            - button "Add to cart" [ref=e95] [cursor=pointer]
  - contentinfo [ref=e96]:
    - list [ref=e97]:
      - listitem [ref=e98]:
        - link "Twitter" [ref=e99] [cursor=pointer]:
          - /url: https://twitter.com/saucelabs
      - listitem [ref=e100]:
        - link "Facebook" [ref=e101] [cursor=pointer]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e102]:
        - link "LinkedIn" [ref=e103] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e104]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | 
  3  | test('Pruebas de API Mocking en Saucedemo', async ({page}) => {
  4  | 
  5  |     // interceptamos la peticion get de inventory.html y respondemos con un json personalizado
  6  |     await page.route('**/inventory.html', async route => {
  7  |         const jsonResponse = {
  8  |             "items": [
  9  |                 {
  10 |                     "id": 1,
  11 |                     "name": "Producto Mockeado",
  12 |                     "price": 9.99,
  13 |                     "description": "Este es un producto mockeado para pruebas.",
  14 |                     "image": "https://via.placeholder.com/150"
  15 |                 }
  16 |             ]
  17 |         };
  18 |         route.fulfill({
  19 |             status: 200,
  20 |             contentType: 'application/json',
  21 |             body: JSON.stringify(jsonResponse)
  22 |         });
  23 |     });
  24 | 
  25 |     // interceptamos una peticion api fethch y respondemos con un json personalizado
  26 |     await page.route('**/api/products', async route => {
  27 |         const jsonResponse = {
  28 |             "products": [
  29 |                 {
  30 |                     "id": 1,
  31 |                     "name": "Producto Mockeado",
  32 |                     "price": 999.99,
  33 |                     "description": "Este es un producto mockeado para pruebas.",
  34 |                     "image": "./img/sauce-backpack-1200x1500.jpg"
  35 |                 }
  36 |             ]
  37 |         };
  38 |         await route.fulfill({
  39 |             status: 200,
  40 |             contentType: 'application/json',
  41 |             body: JSON.stringify(jsonResponse)
  42 |         });
  43 |     });
  44 | 
  45 |     // Como Swag Labs (Saucedemo) maneja el inventario directamente en el frontend por ser un sitio de práctica cerrado,
  46 |     // otra forma avanzada de mockear en estos entornos es modificar el estado o interceptar los archivos estáticos.
  47 | 
  48 |     // Vamos a probar interceptando el flujo de login para simular un error de servidor (Error 500)
  49 |     // cuando intente pegarle a cualquier servicio, para ver si la UX se rompe:
  50 |     await page.route('**/*', async (route) => {
  51 |       const url = route.request().url();
  52 |       if (url.includes('/api/')) {
  53 |         await route.fulfill({
  54 |           status: 500,
  55 |           contentType: 'application/json',
  56 |           body: JSON.stringify({ error: 'Error del servidor simulado' }),
  57 |         });
  58 |       } else {
  59 |         await route.continue();
  60 |       }
  61 |     });
  62 | 
  63 |     // ejecutamos el flujo comun usando los usuarios de el auth
  64 |     await page.goto('https://www.saucedemo.com/');
  65 |     await page.locator('#user-name').fill('standard_user');
  66 |     await page.locator('#password').fill('secret_sauce');
  67 |     await page.locator('#login-button').click();
  68 | 
  69 |     // esperamos a que el error 500 se refleje en la UI, por ejemplo, mostrando un mensaje de error
> 70 |     const errorMessage = await page.locator('.error-message-container').textContent();
     |                                                                         ^ Error: locator.textContent: Test timeout of 30000ms exceeded.
  71 |     expect(errorMessage).toContain('Error del servidor simulado');
  72 | });
  73 | 
```