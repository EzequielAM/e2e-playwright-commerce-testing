// Cargar variables de entorno desde el archivo .env
require('dotenv').config();

// @ts-check
import { defineConfig, devices } from '@playwright/test';

// Definimos el path donde Playwright va a escribir y leer las cookies de sesión
const authFile = 'playwright/.auth/user.json';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['html'], // Mantenemos el reporte nativo
    ['allure-playwright', { outputFolder: 'allure-results' }] // Sumamos Allure
  ],

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    baseURL: process.env.BASE_URL_UI || 'https://www.saucedemo.com',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    ignoreHTTPSErrors: true,
  },

  /* Configure projects for major browsers and setup */
  projects: [
    // ==========================================
    // 1. PROYECTO DE SETUP: Corre antes que todo y hace el login único
    // ==========================================
    {
      name: 'setup',
      testMatch: /.*auth\.setup\.js/, // Machea con el archivo de login global
    },

    // ==========================================
    // 2. PROYECTOS DE UI: Dependen del setup y usan las cookies guardadas
    // ==========================================
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        storageState: authFile, // Consume el JSON generado en el setup
      },
      dependencies: ['setup'], // Obliga a Playwright a correr primero el setup
      testIgnore: /.*(api|auth\.setup)\.spec\.js/, // Ignora API y el propio setup
    },
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
        storageState: authFile,
      },
      dependencies: ['setup'],
      testIgnore: /.*(api|auth\.setup)\.spec\.js/,
    },
    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
        storageState: authFile,
      },
      dependencies: ['setup'],
      testIgnore: /.*(api|auth\.setup)\.spec\.js/,
    },

    // ==========================================
    // 3. PROYECTO DE API: Corre independiente sin requerir login de UI
    // ==========================================
    {
      name: 'api',
      testMatch: /.*api\.spec\.js/,
      use: {
        extraHTTPHeaders: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Accept': '*/*',
        },
      },
    },
  ],
});
