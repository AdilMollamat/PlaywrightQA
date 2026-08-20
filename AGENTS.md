# AGENTS.md

## Project summary
This repository is a small Playwright test project using TypeScript. The main entry points are [package.json](package.json), [playwright.config.ts](playwright.config.ts), and the [tests](tests) folder.

## Working conventions
- Keep new or updated tests in [tests](tests).
- Use `import { test, expect } from '@playwright/test';` in test files.
- Prefer simple, readable Playwright tests with clear test names.
- Avoid leaving temporary debug output, broken URLs, or failing test code in place.
- Preserve the existing browser setup in [playwright.config.ts](playwright.config.ts): Chromium is configured for a maximized window and the browser is not headless.

## Verification
- Run tests with `npx playwright test` or a targeted command such as `npx playwright test --project=chromium`.
- If a change affects a specific spec file, validate that file directly before broadening the scope.

## Special instruction
If a request says “disable AI” or similar, treat it as a request to avoid introducing AI/LLM-related code, dependencies, or automation into this project. Keep changes focused on Playwright testing behavior and the existing test setup.
