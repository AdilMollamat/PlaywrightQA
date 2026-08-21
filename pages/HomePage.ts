import {Page, expect, Locator} from '@playwright/test'

export class HomePage {
    readonly page: Page;
    readonly getStartedButton: Locator;
    readonly homePageHeader: Locator;
    readonly installationHeader: Locator;

    constructor(page: Page) {
        this.page = page;
        this.getStartedButton = page.getByRole('link', { name: 'Get started' });
        this.homePageHeader = page.locator('h1:has-text("Playwright")');
        this.installationHeader = page.locator('h1:has-text("Installation")');
    }

    async navigateToHomePage() {
        await this.page.goto('/');
    }

    async validateHomePageHeader() {
        await expect(this.homePageHeader).toBeVisible();
    }

    async clickGetStartedButton() {
        await this.getStartedButton.click();
    }

    async validateInstallationHeader() {
        await expect(this.installationHeader).toBeVisible();
    }

    async clickLinkByText (linkTxt: string) {
        await this.page.getByRole('link', { name: linkTxt }).click();
    }

}
