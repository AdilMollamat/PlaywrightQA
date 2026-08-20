import { Page, Locator, expect } from '@playwright/test';

export class StartedPage {
    readonly page: Page;
    readonly installationHeader: Locator;
    readonly getStartedLink: Locator;
    readonly howToInstallLink: Locator;
    readonly whatIsPlaywrightLink: Locator;
    readonly runTestsLink: Locator;
    readonly openReportLink: Locator;
    readonly usingWebFirstLink: Locator;
    readonly runSingleMultipleTestsLink: Locator;
    readonly generateCodegenLink: Locator;
    readonly traceTheTestsLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.installationHeader = page.getByRole('heading', { name: 'Installation' });
        this.getStartedLink = page.getByRole('link', { name: 'Get Started' });
        this.howToInstallLink = page.getByRole('link', { name: 'How to install Playwright' }).first();
        this.whatIsPlaywrightLink = page.getByRole('link', { name: 'What\'s installed' }).first();
        this.runTestsLink = page.getByRole('link', { name: 'How to run the example test' }).first();
        this.openReportLink = page.getByRole('link', { name: 'How to open the HTML test report' }).first();
        this.usingWebFirstLink = page.getByRole('link', { name: 'Write tests using web-first assertions, fixtures and locators' }).first();
        this.runSingleMultipleTestsLink = page.getByRole('link', { name: 'Run single or multiple tests; headed mode' }).first();
        this.generateCodegenLink = page.getByRole('link', { name: 'Generate tests with Codegen' }).first();
        this.traceTheTestsLink = page.getByRole('link', { name: 'View a trace of your tests' }).first();
    }

    async validateInstallationHeader() {
        await expect(this.installationHeader).toBeVisible();
    }

    async clickGetStartedButton() {
        await this.getStartedLink.click();
    }

    async clickHowToInstallLink() {
        await this.howToInstallLink.click();
    }

    async clickGetStartedLinks() {
        await this.howToInstallLink.click();
        await this.whatIsPlaywrightLink.click();
        await this.runTestsLink.click();
        await this.openReportLink.click();
    }

    async clickWhatIsNextLinks() {
        await this.usingWebFirstLink.click();
        await this.page.goBack();
        await this.runSingleMultipleTestsLink.click();
        await this.page.goBack();
        await this.generateCodegenLink.click();
        await this.page.goBack();
        await this.traceTheTestsLink.click();
    }
}