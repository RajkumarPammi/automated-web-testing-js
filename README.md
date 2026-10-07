Automated Web Testing Framework (Selenium & JS)
📌 Overview
This repository contains an automated testing framework built with JavaScript and Selenium WebDriver. The goal of this project is to validate core UI workflows (such as login and inventory loading) on sample e-commerce applications (e.g., SauceDemo).
This project also demonstrates Continuous Integration (CI) by utilizing GitHub Actions to automatically trigger the test suite upon every push to the main branch.
🛠️ Tech Stack
Language: JavaScript (Node.js)
Automation Tool: Selenium WebDriver
CI/CD: GitHub Actions
Browser: Google Chrome (Headless mode for CI pipeline)
🚀 Key Features
Automated Login Validation: Automates credential input and verifies successful navigation.
Explicit Waits: Implements synchronization handling (until.elementLocated) to prevent flaky tests caused by page load delays.
Headless Execution: Configured ChromeOptions to run headlessly, enabling seamless integration with Linux-based CI servers.
📂 Project Structure
loginTest.js - The main executable test script containing locators and assertions.
.github/workflows/test.yml - The YAML configuration file for the GitHub Actions CI pipeline.
package.json - Node.js dependencies (Selenium WebDriver).
🧠 Lessons Learned
During this project, I resolved synchronization issues by moving from implicit to explicit waits, and successfully debugged CI pipeline failures by configuring headless browser execution for the GitHub Actions Ubuntu runner.
