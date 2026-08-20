# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: mytest.spec.ts >> First Test Case Creation
- Location: tests/mytest.spec.ts:5:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://www.bogdauyghurrestaurant.com/", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - banner [ref=e3]:
    - link "Skip to main content" [ref=e4] [cursor=pointer]:
      - /url: "#et-main-area"
    - link "Go to accessibility statement" [ref=e5] [cursor=pointer]:
      - /url: /accessibility-statement
    - generic [ref=e11]:
      - link "Bogda Uyghur Restaurant logo, featuring a mountain as its emblem" [ref=e14] [cursor=pointer]:
        - /url: /
        - img "Bogda Uyghur Restaurant logo, featuring a mountain as its emblem" [ref=e15]
      - generic [ref=e16]:
        - navigation [ref=e18]:
          - list [ref=e19]:
            - listitem [ref=e20]:
              - link "Home" [ref=e21] [cursor=pointer]:
                - /url: https://www.bogdauyghurrestaurant.com/
            - listitem [ref=e22]:
              - link "Online Order on order.mealkeyway.com, redirecting to a third-party website (opens in a new tab)" [ref=e23] [cursor=pointer]:
                - /url: https://order.mealkeyway.com/customer/release/index?mid=74424c373363647069676b4954395a6d314f585471673d3d#/main
                - text: Online Order
            - listitem [ref=e24]:
              - link "Contact Us" [ref=e25] [cursor=pointer]:
                - /url: https://www.bogdauyghurrestaurant.com/contact-us/
        - text: a
  - main [ref=e26]:
    - generic [ref=e31]:
      - generic [ref=e32]:
        - 'img "Assorted Central Asian spread: plov, dumplings, bread, and vegetable dishes in hand-painted ceramic ware." [ref=e34]'
        - generic [ref=e36]:
          - heading "Bogda Uyghur Restaurant" [level=1] [ref=e39]
          - heading "Welcome! Come, taste, and enjoy!" [level=2] [ref=e42]
          - link "Online Order on order.mealkeyway.com, redirecting to a third-party website (opens in a new tab)" [ref=e44] [cursor=pointer]:
            - /url: https://order.mealkeyway.com/customer/release/index?mid=74424c373363647069676b4954395a6d314f585471673d3d#/main
            - text: Online Order 5
      - generic [ref=e46]:
        - img "Uyghur baked samsa pastries with sesame seeds at Bogda Uyghur Restaurant, a Central Asian Halal Restaurant in Plano" [ref=e50]
        - generic [ref=e51]:
          - heading "About This Authentic Central Asian Halal Restaurant" [level=2] [ref=e54]
          - generic [ref=e56]:
            - paragraph [ref=e57]: "Bogda Uyghur Restaurant is a halal Central Asian restaurant located at 221 W Parker Rd #525, Plano, TX 75023, bringing the authentic taste of Uyghur and Silk Road cuisine to Texas."
            - paragraph [ref=e58]: We are dedicated to crafting bold, flavorful halal dishes inspired by traditional Central Asian and Silk Road recipes. Using fresh ingredients and had made noodles on the spot, we create health aromatic meals that celebrate the rich culinary heritage of Uyghur culture.
            - paragraph [ref=e59]: Our menu features iconic specialties like Big Plate Chicken, tender Uyghur lamb kababs, savory hand-pulled laghman noodles, flavorful stir-fried lamb, handcrafted manta buns, and classic Uyghur Polo rice dishes—all prepared with halal ingredients and bold spices.
            - paragraph [ref=e60]: Come and experience the vibrant, authentic flavors of the Silk Road at Bogda Uyghur Restaurant—your go-to spot for halal Uyghur cuisine in Plano.).
          - link "Online Order on order.mealkeyway.com, redirecting to a third-party website (opens in a new tab)" [ref=e62] [cursor=pointer]:
            - /url: https://order.mealkeyway.com/customer/release/index?mid=74424c373363647069676b4954395a6d314f585471673d3d#/main
            - text: Online Order 5
      - heading "Gallery" [level=2] [ref=e68]
      - generic [ref=e74]:
        - img "Uyghur lamb and vegetable stew with noodles at Bogda Uyghur Restaurant, a Central Asian Halal Restaurant in Plano" [ref=e77]
        - img "Whole roasted lamb leg with herbs at Bogda Uyghur Restaurant, a Central Asian Halal Restaurant in Plano" [ref=e80]
        - img "Uyghur plov rice with lamb and raisins at Bogda Uyghur Restaurant, a Central Asian Halal Restaurant in Plano" [ref=e83]
        - img "Grilled lamb kebab skewers with spices at Bogda Uyghur Restaurant, a Central Asian Halal Restaurant in Plano" [ref=e86]
      - generic [ref=e88]:
        - generic [ref=e89]:
          - heading "Authentic Uyghur Halal Cuisine" [level=2] [ref=e92]
          - paragraph [ref=e95]: Authentic Halal Uyghur Flavors, Silk Road Culinary Heritage, Taste the Rich Heritage of the Silk Road
          - link "Online Order Now on order.mealkeyway.com, redirecting to a third-party website (opens in a new tab)" [ref=e97] [cursor=pointer]:
            - /url: https://order.mealkeyway.com/customer/release/index?mid=74424c373363647069676b4954395a6d314f585471673d3d#/main
            - text: Online Order Now！ 5
        - img "Bogda Uyghur Restaurant exterior sign at Bogda Uyghur Restaurant, a Central Asian Halal Restaurant in Plano" [ref=e101]
        - img "Cozy restaurant dining interior with mosaic lamps at Bogda Uyghur Restaurant, a Central Asian Halal Restaurant in Plano" [ref=e105]
      - generic [ref=e106]:
        - heading "Google Review" [level=2] [ref=e111]
        - generic [ref=e112]:
          - generic [ref=e115]:
            - paragraph [ref=e116]: ⭐⭐⭐⭐⭐
            - paragraph [ref=e117]: “We visited a Uyghur restaurant, and it was an amazing experience! From the first moment, the smell of spices and freshly cooked food made us hungry. The dishes were colorful, rich, and full of flavor. We left happy, full, and already dreaming about coming back again!”
          - generic [ref=e120]:
            - paragraph [ref=e121]: ⭐⭐⭐⭐⭐
            - paragraph [ref=e122]: “A beautiful family gathering with the most authentic Uyghur flavors! The Qorma chop was my husband’s favorite, and the spicy rice noodle was mine—absolutely delicious! The kebabs and everything else were perfect, and the kids had a blast. We felt at home with every bite—highly recommend for an amazing meal!”
          - generic [ref=e125]:
            - paragraph [ref=e126]: ⭐⭐⭐⭐⭐
            - paragraph [ref=e127]: “We really enjoyed the authentic Uyghur food in Bogda Uyghur restaurant. Delicious food with great service and nice environment, highly recommend!! The Lamb Kawap, Bogda Laghman and qorma chop are the must try!!👍👍👍”
      - heading "Contact Us" [level=2] [ref=e133]
      - generic [ref=e135]:
        - generic [ref=e136]:
          - generic [ref=e138]:
            - heading "Phone:" [level=3] [ref=e139]
            - paragraph [ref=e140]:
              - 'link "Phone Number: 214-501-3839" [ref=e141] [cursor=pointer]':
                - /url: tel:2145013839
                - text: 214-501-3839
          - generic [ref=e143]:
            - heading "Hours:" [level=3] [ref=e144]
            - paragraph [ref=e145]: "Mon: 11 AM - 2 PM | 5 PM - 9 PM Tue: Closed Wed - Thu: 11 AM - 2 PM | 5 PM - 9 PM Fri - Sat: 11 AM - 9:30 PM Sun: 11 AM - 9 PM"
          - generic [ref=e147]:
            - heading "Address:" [level=3] [ref=e148]
            - paragraph [ref=e149]:
              - 'link "221 W Parker Rd #525, Plano, TX 75023, redirecting to a third-party website (opens in a new tab)" [ref=e150] [cursor=pointer]':
                - /url: https://maps.app.goo.gl/fLZFEZPDyPPPLFGd7
                - text: "221 W Parker Rd #525, Plano, TX 75023"
        - 'link "Location, 221 W Parker Rd #525, Plano, TX 75023, redirecting to a third-party website (opens in a new tab)" [ref=e153] [cursor=pointer]':
          - /url: https://maps.app.goo.gl/fLZFEZPDyPPPLFGd7
          - 'img "Location, 221 W Parker Rd #525, Plano, TX 75023, redirecting to a third-party website (opens in a new tab)" [ref=e155]'
  - contentinfo [ref=e156]:
    - generic [ref=e159]:
      - paragraph [ref=e164]:
        - text: Copyright © 2026 Bogda Uyghur Restaurant. All rights reserved. Powered by
        - link "MenuSifu, redirecting to a third-party website (opens in a new tab)" [ref=e166] [cursor=pointer]:
          - /url: https://www.menusifu.com
          - text: MenuSifu
        - text: .
        - link "Accessibility Statement" [ref=e168] [cursor=pointer]:
          - /url: /accessibility-statement
        - text: "|"
        - link "Report a web accessibility issue, redirecting to a third-party website (opens in a new tab)" [ref=e170] [cursor=pointer]:
          - /url: https://forms.gle/eYyaX1D4W16tMRR16
          - text: Report a web accessibility issue
      - img "Audited and certified for accessibility and usability by disabled testers." [ref=e174]
  - text: "2"
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
> 8   |     await page.goto('https://www.bogdauyghurrestaurant.com/');
      |                ^ Error: page.goto: Test timeout of 30000ms exceeded.
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
  99  |     await page.goto('https://www.fahw.com/');
  100 |     await expect(page.locator("button[data-ga-element='Quote CTA']")).toBeVisible();
  101 | 
  102 |     await page.locator("//h3[text()='Essential Plan']//following-sibling::div//a").click();
  103 |    
  104 | });
```