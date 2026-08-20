# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: mytest.spec.ts >> American Home Warranty Testing
- Location: tests/mytest.spec.ts:51:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://go.fahw.com/", waiting until "load"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic:
      - img "First American Home Warranty" [ref=e6]
      - heading "First American Home Warranty Reviews" [level=2] [ref=e8]:
        - strong [ref=e9]: First American Home Warranty Reviews
      - link [ref=e12] [cursor=pointer]:
        - /url: "#lp-pom-block-198"
      - heading "What is a home warranty?" [level=2] [ref=e14]
      - paragraph [ref=e16]: Did you know it is recommended that homeowners budget 1% of their home value each year for repairs and replacements? Homeowners insurance does not typically cover for mechanical failures, so a home warranty can help bridge the gap. We've been a home warranty leader for over 30 years. We've got you covered.
      - generic [ref=e17]:
        - generic:
          - heading "Flexible payment options" [level=3] [ref=e19]
          - heading "If we can't repair it, we'll replace it.*" [level=3] [ref=e21]
          - heading "Network of pre-screened, qualified technicians" [level=3] [ref=e23]
          - heading "Request service 24 hours a day, 365 days a year" [level=3] [ref=e25]
          - heading "Experience and stability you can trust" [level=3] [ref=e27]
      - generic [ref=e28]:
        - iframe [ref=e31]:
          - generic "YouTube Video Player" [ref=f1e3]
        - generic [ref=e32]:
          - paragraph [ref=e33]: "\"I have somebody who is qualified and professional to come into the home and take care of it.\""
          - paragraph [ref=e34]:
            - generic [ref=e37]:
              - strong [ref=e39]: Lisa & Rodney Mitchell
              - generic:
                - strong:
                  - generic:
                    - strong
            - emphasis [ref=e41]: Customers since 2009
      - generic [ref=e44]:
        - iframe [ref=e47]:
          - generic "YouTube Video Player" [ref=f2e3]
        - generic [ref=e50]:
          - paragraph [ref=e51]: Every time they've come out, I've been happy. Everything they've fixed has stayed fixed."
          - paragraph [ref=e52]:
            - generic [ref=e55]:
              - strong [ref=e57]: Brian Yablon
              - generic:
                - strong
            - emphasis [ref=e59]: Customers since 2004
      - generic [ref=e60]:
        - iframe [ref=e63]:
          - generic "YouTube Video Player" [ref=f3e3]
        - generic [ref=e66]:
          - paragraph [ref=e67]: "\"Based on the value you get, and the savings that we've enjoyed...you'd have to be nuts not to have one.\""
          - paragraph [ref=e68]:
            - generic [ref=e71]:
              - strong [ref=e74]: Toni & Jeff Zwerling
              - generic:
                - generic:
                  - strong
            - emphasis [ref=e76]: Customers since 2001
      - generic [ref=e77]:
        - heading "Protect your budget with a home warranty" [level=1] [ref=e80]:
          - generic [ref=e81]: Protect your budget with a home warranty
        - paragraph [ref=e83]: With a home warranty from First American, you don't have to worry about unexpected repair or replacement bills. You can focus on what matters most.
      - generic [ref=e84]:
        - generic [ref=e86]:
          - paragraph [ref=e87]:
            - generic [ref=e88]:
              - text: Last year,
              - strong [ref=e89]: nearly 66%
              - text: of our home warranty customers filed at least one claim.
          - paragraph [ref=e90]:
            - generic [ref=e95]:
              - text: As a result, we saved homeowners more than
              - strong [ref=e96]: $169 MILLION DOLLARS
              - text: in covered repairs and replacements.
          - paragraph [ref=e97]:
            - generic [ref=e98]:
              - text: Based on actual invoices paid by First American Home Warranty in 2017.
              - link "Check it out" [ref=e99] [cursor=pointer]:
                - /url: https://homewarranty.firstam.com/homeowner/budget-protection
              - text: .
        - heading "Home warranties can save you money" [level=2] [ref=e101]
      - paragraph [ref=e111]: "*Please review the sample contract for specific coverage, terms, and limitations."
      - generic [ref=e112]:
        - paragraph [ref=e113]: "*Please read your contract for specific coverage and limitations. In some instances, Homeowner and First American may agree to payment of cash in lieu of repair or replacement. Payment will be made based on First American's negotiated rates with its suppliers, which may be less than retail."
        - paragraph:
          - generic:
            - link:
              - /url: http://www.firstam.com/privacy-policy/
      - link "Get a Quote" [ref=e115] [cursor=pointer]:
        - /url: https://homewarranty.firstam.com/
      - link "Get a Quote Today" [ref=e117] [cursor=pointer]:
        - /url: https://homewarranty.firstam.com/
      - generic [ref=e118]:
        - generic [ref=e119]: © 2026 First American Home Warranty Corporation and its licensed subsidiaries. All rights reserved.
        - generic [ref=e120]:
          - link "Terms of Use" [ref=e121] [cursor=pointer]:
            - /url: https://homewarranty.firstam.com/legal
          - text: •
          - link "Privacy" [ref=e122] [cursor=pointer]:
            - /url: https://homewarranty.firstam.com/privacy
          - text: •
          - link "Accessibility" [ref=e123] [cursor=pointer]:
            - /url: https://homewarranty.firstam.com/accessibility
        - link "Do Not Sell or Share My Information" [ref=e125] [cursor=pointer]:
          - /url: "#"
          - text: Do Not Sell or Share My Personal Information
  - dialog "Cookie notice banner" [ref=e150]:
    - generic [ref=e151]: Privacy Notice
    - generic [ref=e152]:
      - text: This website uses cookies and similar technologies to manage your sessions, manage content, assist in our advertising and marketing efforts, and improve your website experience. To learn more please see our
      - link "privacy notice" [ref=e153] [cursor=pointer]:
        - /url: https://homewarranty.firstam.com/privacy
      - text: . By dismissing this notice, we will continue to utilize these cookies, however, you may
      - link "opt out of the sale or sharing of your personal information" [ref=e154] [cursor=pointer]:
        - /url: "#cookie-preferences"
        - text: opt out of the sale or sharing of your personal information (opens in a new tab/window)
      - text: for targeted advertising.
    - button "<svg viewBox=\"0 0 14 12\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" class=\"evidon-banner-closeimage\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" style=\"position:absolute; top:0; left:0;\" aria-label=\"close dialog icon\"><g stroke=\"none\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"square\"><g transform=\"translate(-1410.000000, -643.000000)\" stroke=\"#ffffff\" stroke-width=\"2\"><g transform=\"translate(1411.000000, 643.000000)\"><path d=\"M0.5,0.5 L11.5679722,11.5679722\" stroke=\"#ffffff\"></path><path d=\"M0.5,0.5 L11.5679722,11.5679722\" transform=\"translate(6.000000, 6.000000) scale(-1, 1) translate(-6.000000, -6.000000) \" stroke=\"#ffffff\"></path></g></g></g></svg>" [ref=e155] [cursor=pointer]:
      - img "close dialog icon" [ref=e156]
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
> 53  |     await page.goto('https://go.fahw.com/');
      |                ^ Error: page.goto: Test timeout of 30000ms exceeded.
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
  99  |     await page.goto('https://www.fahw.com/');
  100 |     await expect(page.locator("button[data-ga-element='Quote CTA']")).toBeVisible();
  101 | 
  102 |     await page.locator("//h3[text()='Essential Plan']//following-sibling::div//a").click();
  103 |    
  104 | });
```