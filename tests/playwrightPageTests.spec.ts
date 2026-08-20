import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { StartedPage } from '../pages/startedPage';

let homePage: HomePage;
let startedPage: StartedPage;

test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    startedPage = new StartedPage(page);
    await homePage.navigateToHomePage();
});

test('homepage test', async () => {
    await homePage.validateHomePageHeader();
    await homePage.clickGetStartedButton();
    await homePage.validateInstallationHeader();
    await startedPage.clickGetStartedLinks();
});

test('what is next links', async () => {
    await homePage.clickGetStartedButton();
    await startedPage.validateInstallationHeader();
    await startedPage.clickWhatIsNextLinks();
});