import { Page, Locator, expect } from '@playwright/test';

export class ReleaseNotesPage {
    readonly page: Page;
    readonly releaseNotesHeader: Locator;
    readonly versionNumber: Locator;

    constructor(page: Page) {
        this.page = page;
        this.releaseNotesHeader = page.getByRole('heading', { name: 'Release notes' });
        this.versionNumber = page.locator('h2:has-text("Version")');
    }

    async navigateToReleaseNotesPage () {
        await this.page.goto(process.env.RELEASE_NOTES || '');
    }

    async validateReleaseNotesHeader() {
        await expect(this.releaseNotesHeader).toBeVisible();
    }

    async numberOfVersionsHeader() {
        const count = await this.versionNumber.count();
        console.log(`Number of versions: ${count}`);
        return count;
    }
}