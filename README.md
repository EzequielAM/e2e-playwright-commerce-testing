![Playwright Tests Cloud Execution](https://github.com/EzequielAM/e2e-playwright-commerce-testing/actions/workflows/playwright.yml/badge.svg)

# E2E Testing & API Automation Framework 🚀

This repository contains a robust, enterprise-grade automation testing framework built from scratch using **Playwright** and **JavaScript**. It validates critical user journeys (UI) and service layers (API) completely decoupled, featuring a modern CI/CD architecture.

---

## 🛠️ Tech Stack & Tools
* **Core Engine:** Playwright (Multi-browser support)
* **Design Pattern:** Page Object Model (POM) + Data-Driven Testing (DDT)
* **CI/CD Pipeline:** GitHub Actions (Ubuntu environments)
* **Integrations:** Real-time test status alerts via **Slack Webhooks**
* **Reporting:** Playwright HTML Reporter + **Allure Report Dashboards**
* **Configuration:** Environment isolation using `dotenv` (`.env`)

---

## 📂 Project Structure
```text
├── .github/workflows/     # CI/CD Pipeline configuration (GitHub Actions)
├── data/
│   └── usuarios.json      # Data-Driven test inputs for authentication
├── pages/                 # Page Object Model (POM) architecture
│   ├── LoginPage.js
│   ├── ProductsPage.js
│   └── CartPage.js
├── tests/                 # Scalable test execution suites
│   ├── auth.spec.js       # Data-Driven Authentication tests (7 edge cases)
│   ├── shopping.spec.js   # E2E Shopping Cart purchase journey
│   └── api.spec.js        # Isolated REST API CRUD lifecycle validation
├── .env.example           # Reference file for environment variables
├── playwright.config.js   # Multi-project & advanced reporter configuration
└── package.json
```

## Test Strategy & Coverage
### UI & Data-Driven Testing (DDT)
Encapsulated locators under POM to ensure maintenance stability. The authentication suite scales dynamically via a standalone JSON file, executing 7 distinct user behavior profiles (Standard, Locked Out, Problem User, Performance Glitch, and empty fields boundary validations) in parallel across multiple viewports.

### API Isolation
Validates the full REST CRUD lifecycle (GET, POST, PUT, DELETE) with deep schema assertion, header inspection, and regex-based content checks, executing without browser overhead.

### DevOps & Observability
Every code push triggers an ephemeral Linux runner on GitHub Actions. Pipeline lifecycle events (Success/Failure) automatically broadcast rich notifications to a corporate Slack channel. Test metrics are compiled into interactive Allure Reports displaying epic, feature, and severity metadata.

## How to Run the Project
### 1 -Clone & Install:

git clone https://github.com/EzequielAM/e2e-playwright-commerce-testing.git
npm install

### 2-Environment Setup:
Create a .env file in the root directory based on the project configuration:
ENV=QA
BASE_URL_UI=[https://www.saucedemo.com](https://www.saucedemo.com)
BASE_URL_API=[https://httpbin.org](https://httpbin.org)


### 3-Execution Commands:

#### Run entire suite (All browsers + API):
npx playwright test

#### Run UI Tests on Google Chrome (Chromium) only:
npx playwright test --project=chromium

#### Run API Tests only (Isolated & fast):
npx playwright test --project=api

### 4-Generating Advanced Reports:
#### View native Playwright report:
npx playwright show-report

#### Serve Allure Dashboard (Rich metrics & analytics):
npx allure serve allure-results

Engineered with modern QA automation standards by Ezequiel Muñoz
