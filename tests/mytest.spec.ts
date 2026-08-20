import {test, expect, Locator} from '@playwright/test';
import { createWorker, PSM } from 'tesseract.js';


test('First Test Case Creation', async({page}) => {
    
    // 1. Navigate to your target page
    await page.goto('https://www.bogdauyghurrestaurant.com/');
    await expect(page.getByAltText('Bogda Uyghur Restaurant logo, featuring a mountain as its emblem')).toBeVisible();
    await expect(page.getByRole('heading', {name: 'Bogda Uyghur Restaurant'})).toBeVisible();
    const title: string = await page.title();
    console.log(title);

    await page.getByRole('heading', {name: 'Gallery'}).scrollIntoViewIfNeeded();

    // 2. Locate the image element on the page
    const imageElement = page.getByTitle('Uyghur baked samsa pastries with sesame seeds at Bogda Uyghur Restaurant, a Central Asian Halal Restaurant in Plano');
    
    // 3. Capture the image as a buffer instead of saving a file
    const imageBuffer = await imageElement.screenshot();

    // 4. Initialize the Tesseract OCR worker
    const worker = await createWorker('eng'); // 'eng' for English

    // 5. Recognize the text inside the buffer
    const { data: { text } } = await worker.recognize(imageBuffer);
    
    console.log('Extracted Text:', text);

    // 6. Clean up the OCR worker
    await worker.terminate();
});

test('second test to validate the playwirght locators', async({page, context}) => {

    await page.goto('https://www.bogdauyghurrestaurant.com/');
    await expect(page.getByText('authentic uyghur halal cuisine')).toBeVisible();
    await page.getByRole('link', {name: 'Contact Us'}).click();
    await expect(page.getByRole('heading', {name: 'Contact Us'})).toBeVisible();
    await page.getByRole('link', {name: 'Home'}).click();

    const [childPage] = await Promise.all([
        context.waitForEvent('page'),
        await page.locator('#l-more').first().click()
    ]);
    await expect(childPage.getByRole('heading', {name: 'Bogda Uyghur Restaurant '})).toBeVisible();
    expect.soft(childPage.getByText('bogda uyghur restaurant')).toBeDefined();
    await childPage.getByText('Start Order').click();
})

test('American Home Warranty Testing', async({page, context}) => {

    await page.goto('https://go.fahw.com/');
    await expect(page.getByRole('link', {name: /Get\sA\squote/i}).first()).toBeVisible();
    const onlineOrderElms: Locator = page.getByText('American');
    console.log(await onlineOrderElms.count());
    console.log(await onlineOrderElms.allTextContents());
    const americanElms: Locator[] = await page.getByText('American').all();
    console.log(americanElms.length);
    for (const elm of americanElms) {
        console.log('****** ' + await elm.textContent());
    }
})

test('American Home Warranty CSS Locator Testing', async({page, context}) => {

    await page.goto('https://www.fahw.com/');
    await expect(page.locator("button[data-ga-element='Quote CTA']")).toBeVisible();
    expect.soft(await page.locator("li.check:has-text('Luxury Appliances')").count()).toBe(1);
    expect.soft(page.locator("li.check>strong>*:first-child")).toBeDefined();
    expect.soft(await page.locator("a[data-ga-element^='Heating']").count()).toBe(2);

    await page.locator("button[aria-label='Open Main Menu']").click();
    await page.getByRole('link',  {name: 'Pricing'}).click();

    await page.locator("input[name='zip']").fill('75024');
    await page.getByRole('button', {name: 'Find Out'}).click();

    await page.locator("a[data-ga-container='whats covered for my zip']").click();

    await expect(page.locator("input#isBuyingOrSelling")).toBeVisible();
    await page.locator("input#address").click();
    await page.locator("input#address").fill('3903 Dubois Dr');
    await page.locator("li[role='menuitem']").first().click();
    await page.locator("input[name='zipCode']").fill('75093');
    await page.getByRole('button', {name: 'Continue'}).dblclick();

    await page.locator("input[name='firstName']").fill('AA');
    await page.locator("input[name='lastName']").fill('DD');
    await page.locator("input[name='emailAddress']").fill('AA.DD@gmail.com');
    await page.locator("input[name='phoneNumber']").fill('7509375093');
    await page.getByRole('button', {name: 'Next'}).click();

    await expect(page.getByText("please call 888.875.0533.")).toBeVisible();
});

test('Home Page Get Quote Testing', async({page}) => {

    await page.goto('https://www.fahw.com/');
    await expect(page.locator("button[data-ga-element='Quote CTA']")).toBeVisible();

    await page.locator("//h3[text()='Essential Plan']//following-sibling::div//a").click();
   
});