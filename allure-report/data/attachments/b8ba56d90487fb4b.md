# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: mytest.spec.ts >> Home Page Get Quote Testing
- Location: tests/mytest.spec.ts:97:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: net::ERR_TIMED_OUT at https://www.fahw.com/
Call log:
  - navigating to "https://www.fahw.com/", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e6]:
    - heading "This site can’t be reached" [level=1] [ref=e7]
    - paragraph [ref=e8]:
      - strong [ref=e9]: www.fahw.com
      - text: took too long to respond.
    - generic [ref=e10]:
      - paragraph [ref=e11]: "Try:"
      - list [ref=e12]:
        - listitem [ref=e13]: Checking the connection
        - listitem [ref=e14]:
          - link "Checking the proxy and the firewall" [ref=e15] [cursor=pointer]:
            - /url: "#buttons"
    - generic [ref=e16]: ERR_TIMED_OUT
  - generic [ref=e17]:
    - button "Reload" [ref=e19] [cursor=pointer]
    - button "Details" [ref=e20] [cursor=pointer]
```

# Test source

```ts
  1   | import {test, expect, Locator} from '@playwright/test';
  2   | import { createWorker, PSM } from 'tesseract.js';
  3   | 
  4   | 
  5   | test('First Test Case Creation', async({page}) => {
  6   |     
  7   |     // 1. Navigate to your target page
  8   |     await page.goto('https://www.bogdauyghurrestaurant.com/');
  9   |     await expect(page.getByAltText('Bogda Uyghur Restaurant logo, featuring a mountain as its emblem')).toBeVisible();
  10  |     await expect(page.getByRole('heading', {name: 'Bogda Uyghur Restaurant'})).toBeVisible();
  11  |     const title: string = await page.title();
  12  |     console.log(title);
  13  | 
  14  |     await page.getByRole('heading', {name: 'Gallery'}).scrollIntoViewIfNeeded();
  15  | 
  16  |     // 2. Locate the image element on the page
  17  |     const imageElement = page.getByTitle('Uyghur baked samsa pastries with sesame seeds at Bogda Uyghur Restaurant, a Central Asian Halal Restaurant in Plano');
  18  |     
  19  |     // 3. Capture the image as a buffer instead of saving a file
  20  |     const imageBuffer = await imageElement.screenshot();
  21  | 
  22  |     // 4. Initialize the Tesseract OCR worker
  23  |     const worker = await createWorker('eng'); // 'eng' for English
  24  | 
  25  |     // 5. Recognize the text inside the buffer
  26  |     const { data: { text } } = await worker.recognize(imageBuffer);
  27  |     
  28  |     console.log('Extracted Text:', text);
  29  | 
  30  |     // 6. Clean up the OCR worker
  31  |     await worker.terminate();
  32  | });
  33  | 
  34  | test('second test to validate the playwirght locators', async({page, context}) => {
  35  | 
  36  |     await page.goto('https://www.bogdauyghurrestaurant.com/');
  37  |     await expect(page.getByText('authentic uyghur halal cuisine')).toBeVisible();
  38  |     await page.getByRole('link', {name: 'Contact Us'}).click();
  39  |     await expect(page.getByRole('heading', {name: 'Contact Us'})).toBeVisible();
  40  |     await page.getByRole('link', {name: 'Home'}).click();
  41  | 
  42  |     const [childPage] = await Promise.all([
  43  |         context.waitForEvent('page'),
  44  |         await page.locator('#l-more').first().click()
  45  |     ]);
  46  |     await expect(childPage.getByRole('heading', {name: 'Bogda Uyghur Restaurant '})).toBeVisible();
  47  |     expect.soft(childPage.getByText('bogda uyghur restaurant')).toBeDefined();
  48  |     await childPage.getByText('Start Order').click();
  49  | })
  50  | 
  51  | test('American Home Warranty Testing', async({page, context}) => {
  52  | 
  53  |     await page.goto('https://go.fahw.com/');
  54  |     await expect(page.getByRole('link', {name: /Get\sA\squote/i}).first()).toBeVisible();
  55  |     const onlineOrderElms: Locator = page.getByText('American');
  56  |     console.log(await onlineOrderElms.count());
  57  |     console.log(await onlineOrderElms.allTextContents());
  58  |     const americanElms: Locator[] = await page.getByText('American').all();
  59  |     console.log(americanElms.length);
  60  |     for (const elm of americanElms) {
  61  |         console.log('****** ' + await elm.textContent());
  62  |     }
  63  | })
  64  | 
  65  | test('American Home Warranty CSS Locator Testing', async({page, context}) => {
  66  | 
  67  |     await page.goto('https://www.fahw.com/');
  68  |     await expect(page.locator("button[data-ga-element='Quote CTA']")).toBeVisible();
  69  |     expect.soft(await page.locator("li.check:has-text('Luxury Appliances')").count()).toBe(1);
  70  |     expect.soft(page.locator("li.check>strong>*:first-child")).toBeDefined();
  71  |     expect.soft(await page.locator("a[data-ga-element^='Heating']").count()).toBe(2);
  72  | 
  73  |     await page.locator("button[aria-label='Open Main Menu']").click();
  74  |     await page.getByRole('link',  {name: 'Pricing'}).click();
  75  | 
  76  |     await page.locator("input[name='zip']").fill('75024');
  77  |     await page.getByRole('button', {name: 'Find Out'}).click();
  78  | 
  79  |     await page.locator("a[data-ga-container='whats covered for my zip']").click();
  80  | 
  81  |     await expect(page.locator("input#isBuyingOrSelling")).toBeVisible();
  82  |     await page.locator("input#address").click();
  83  |     await page.locator("input#address").fill('3903 Dubois Dr');
  84  |     await page.locator("li[role='menuitem']").first().click();
  85  |     await page.locator("input[name='zipCode']").fill('75093');
  86  |     await page.getByRole('button', {name: 'Continue'}).dblclick();
  87  | 
  88  |     await page.locator("input[name='firstName']").fill('AA');
  89  |     await page.locator("input[name='lastName']").fill('DD');
  90  |     await page.locator("input[name='emailAddress']").fill('AA.DD@gmail.com');
  91  |     await page.locator("input[name='phoneNumber']").fill('7509375093');
  92  |     await page.getByRole('button', {name: 'Next'}).click();
  93  | 
  94  |     await expect(page.getByText("please call 888.875.0533.")).toBeVisible();
  95  | });
  96  | 
  97  | test('Home Page Get Quote Testing', async({page}) => {
  98  | 
> 99  |     await page.goto('https://www.fahw.com/');
      |                ^ Error: page.goto: net::ERR_TIMED_OUT at https://www.fahw.com/
  100 |     await expect(page.locator("button[data-ga-element='Quote CTA']")).toBeVisible();
  101 | 
  102 |     await page.locator("//h3[text()='Essential Plan']//following-sibling::div//a").click();
  103 |    
  104 | });
```