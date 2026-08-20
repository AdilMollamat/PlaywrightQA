# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: playwrightPageTests.spec.ts >> homepage test
- Location: tests/playwrightPageTests.spec.ts:14:5

# Error details

```
Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://prod.example.com/
Call log:
  - navigating to "https://prod.example.com/", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e6]:
    - heading "This site can’t be reached" [level=1] [ref=e7]
    - paragraph [ref=e8]: Check if there is a typo in prod.example.com.
    - generic [ref=e9]: DNS_PROBE_FINISHED_NXDOMAIN
  - button "Reload" [ref=e12] [cursor=pointer]
```

# Test source

```ts
  1  | import {Page, expect, Locator} from '@playwright/test'
  2  | 
  3  | export class HomePage {
  4  |     readonly page: Page;
  5  |     readonly getStartedButton: Locator;
  6  |     readonly homePageHeader: Locator;
  7  |     readonly installationHeader: Locator;
  8  | 
  9  |     constructor(page: Page) {
  10 |         this.page = page;
  11 |         this.getStartedButton = page.getByRole('link', { name: 'Get started' });
  12 |         this.homePageHeader = page.locator('h1:has-text("Playwright")');
  13 |         this.installationHeader = page.locator('h1:has-text("Installation")');
  14 |     }
  15 | 
  16 |     async navigateToHomePage() {
> 17 |         await this.page.goto('/');
     |                         ^ Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://prod.example.com/
  18 |     }
  19 | 
  20 |     async validateHomePageHeader() {
  21 |         await expect(this.homePageHeader).toBeVisible();
  22 |     }
  23 | 
  24 |     async clickGetStartedButton() {
  25 |         await this.getStartedButton.click();
  26 |     }
  27 | 
  28 |     async validateInstallationHeader() {
  29 |         await expect(this.installationHeader).toBeVisible();
  30 |     }
  31 | 
  32 | }
  33 | 
```