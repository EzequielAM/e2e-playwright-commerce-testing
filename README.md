# E2E Testing & API Automation Framework 

This repository contains a robust automation testing framework built from scratch using **Playwright** and **JavaScript**, designed to validate critical user flows and API endpoints.

## Tech Stack & Tools
* **Language:** JavaScript (Node.js ecosystem)
* **Testing Framework:** Playwright
* **Pattern:** Page Object Model (POM)
* **CI/CD:** GitHub Actions (Optional but gives you a +10)
* **Reporting:** Playwright HTML Reporter / Allure Report

## Test Strategy & Coverage
I implemented automation for both UI and API layers, focusing on Smoke and Regression testing:
* **UI Testing:** Authentication flows, E2E Shopping Cart purchase, and Responsive/Usability assertions.
* **API Testing:** Validation of status codes, JSON payloads, and response times for authentication and product endpoints.

## How to Run the Project
1. Clone the repository: `git clone https://github.com/EzequielAM/e2e-playwright-commerce-testing.git`
2. Install dependencies: `npm install`
3. Run all tests: `npx playwright test`
4. View HTML Report: `npx playwright show-report`
