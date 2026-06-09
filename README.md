![Playwright Tests Cloud Execution](https://github.com/EzequielAM/e2e-playwright-commerce-testing/actions/workflows/playwright.yml/badge.svg)
# E2E Testing & API Automation Framework

This repository contains a robust automation testing framework built from scratch using **Playwright** and **JavaScript**, designed to validate critical user flows (UI) and service layers (API) independently.

## Tech Stack & Tools
* **Language:** JavaScript (Node.js ecosystem)
* **Testing Framework:** Playwright
* **Pattern:** Page Object Model (POM)
* **Target UI App:** SauceDemo (E-commerce)
* **Target API:** HTTPBin (REST API)
* **Reporting:** Playwright HTML Reporter

## Project Structure
The project follows architectural best practices by separating page element definitions from the actual test logic:
```text
├── pages/                 # Page Object Model (POM) files
│   ├── LoginPage.js       # Login locators and actions
│   ├── ProductsPage.js    # Product catalog and cart actions
│   └── CartPage.js        # Checkout and validation actions
├── tests/                 # Test suites
│   ├── auth.spec.js       # Authentication tests (Happy/Sad paths)
│   ├── shopping.spec.js   # E2E Shopping Cart purchase flow
│   └── api.spec.js        # Independent REST API CRUD tests
├── playwright.config.js   # Advanced multi-project configuration
└── package.json
```

## Test Strategy & Coverage
I implemented automation for both UI and API layers, optimizing execution times and resources:

UI Testing: Validates multi-browser compatibility (Chromium, Firefox, WebKit) for end-to-end user journeys using encapsulated and maintainable selectors.

API Testing: Validates full CRUD lifecycle (GET, POST, PUT, DELETE) with advanced schema assertion, timestamp checking, and regex-based response validation, running completely isolated from browser contexts.

## How to Run the Project
1 -Clone the repository:
git clone https://github.com/EzequielAM/e2e-playwright-commerce-testing.git

2-Install dependencies:
npm install

3-Run API Tests only (Isolated & fast):
npx playwright test --project=api

4-Run UI Tests on Google Chrome (Chromium):
npx playwright test --project=chromium

5-Run the entire suite across all projects:
npx playwright test

6-Open the interactive HTML Report:
npx playwright show-report
