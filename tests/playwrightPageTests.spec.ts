import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { StartedPage } from '../pages/startedPage';
import { ReleaseNotesPage } from '../pages/ReleaseNotesPage';
import { configData } from '../ConfigData/constant';

let homePage: HomePage;
let startedPage: StartedPage;
let releaseNotesPage: ReleaseNotesPage;

test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    startedPage = new StartedPage(page);
    releaseNotesPage = new ReleaseNotesPage(page);

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

test('Release Notes Page Navigation With Direct URL', async() => {
    await releaseNotesPage.navigateToReleaseNotesPage();
    await releaseNotesPage.numberOfVersionsHeader();
});

test('navigate by link text test', async () => {
    await homePage.clickLinkByText(configData.getStarted_link);
    await homePage.validateHomePageHeader();
})