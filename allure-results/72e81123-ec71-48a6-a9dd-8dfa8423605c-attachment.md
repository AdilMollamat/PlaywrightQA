# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: mytest.spec.ts >> American Home Warranty CSS Locator Testing
- Location: tests/mytest.spec.ts:65:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://www.fahw.com/", waiting until "load"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e4]:
      - navigation [ref=e7]:
        - list [ref=e8]:
          - listitem [ref=e9]:
            - link "Blog" [ref=e10] [cursor=pointer]:
              - /url: /blog
          - listitem [ref=e11]:
            - link "Real Estate Plans" [ref=e12] [cursor=pointer]:
              - /url: /real-estate-plans
          - listitem [ref=e13]:
            - link "Sample Coverage" [ref=e14] [cursor=pointer]:
              - /url: /homeowner#whats-covered
      - banner [ref=e15]:
        - generic [ref=e17]:
          - link "First American Home Warranty" [ref=e18] [cursor=pointer]:
            - /url: /
            - generic: First American Home Warranty
            - img
          - list [ref=e19]:
            - listitem [ref=e20]:
              - link "Request Service" [ref=e21] [cursor=pointer]:
                - /url: /account/login
            - listitem [ref=e22]:
              - link "Sign In" [ref=e23] [cursor=pointer]:
                - /url: /account/login
            - listitem [ref=e24]:
              - generic [ref=e25]:
                - img [ref=e26]
                - link "888.875.0533" [ref=e28] [cursor=pointer]:
                  - /url: tel:8888750533
            - listitem [ref=e29]:
              - link "Get A Quote" [ref=e31] [cursor=pointer]:
                - /url: /quote1
            - listitem [ref=e32]:
              - button "Open Main Menu" [ref=e33] [cursor=pointer]
    - generic [ref=e34]:
      - generic [ref=e35]:
        - generic [ref=e40]:
          - generic [ref=e44]:
            - heading "First American Home Warranty" [level=1] [ref=e46]
            - heading "Coverage for the Inevitable" [level=2] [ref=e49]
            - generic [ref=e51]: When home systems and appliances inevitably break, a home warranty can help where your home insurance can't.
            - generic [ref=e53]:
              - generic [ref=e54]:
                - textbox [ref=e55]
                - generic: Enter Your ZIP Code
              - button "Plan Benefits" [ref=e56] [cursor=pointer]
            - list [ref=e57]:
              - listitem [ref=e58]:
                - generic [ref=e59]: No age limits on home systems
              - listitem [ref=e60]:
                - generic [ref=e61]: No inspections needed
              - listitem [ref=e62]:
                - generic [ref=e63]: No limit on service calls
          - generic [ref=e67]:
            - link "Trustpilot logo" [ref=e69] [cursor=pointer]:
              - /url: https://www.trustpilot.com/review/go.fahw.com
              - img "Trustpilot logo" [ref=e70]
            - link "Consumer Affairs Authorized Partner logo" [ref=e72] [cursor=pointer]:
              - /url: https://www.consumeraffairs.com/insurance/first_american_home_buyers_protection.html
              - img "Consumer Affairs Authorized Partner logo" [ref=e73]
            - link "Consumer Advocate logo" [ref=e75] [cursor=pointer]:
              - /url: https://www.consumersadvocate.org/home-warranties/c/first-american-home-buyers-protection
              - img "Consumer Advocate logo" [ref=e76]
            - link "First American Home Warranty BBB Business Review" [ref=e78] [cursor=pointer]:
              - /url: https://www.bbb.org/us/ca/canoga-park/profile/home-warranty-plans/first-american-home-warranty-1216-18779/#sealclick
              - img "First American Home Warranty BBB Business Review" [ref=e79]
            - link "National Home Service Contract Association Logo" [ref=e81] [cursor=pointer]:
              - /url: https://homeservicecontract.org/about-nhsca/
              - img "National Home Service Contract Association Logo" [ref=e82]
        - generic [ref=e85]:
          - generic [ref=e86]:
            - heading "First American is the Plan to Protect All Your Plans" [level=2] [ref=e88]
            - paragraph [ref=e90]: First American has been helping homeowners for over 40 years. We can help protect your budget by covering repairs on your most important home systems and appliances.
            - link "Compare Plans" [ref=e92] [cursor=pointer]:
              - /url: /homeowner/pricing-and-plans
          - generic [ref=e93]:
            - generic [ref=e95]:
              - heading "Starter Plan" [level=3] [ref=e96]
              - paragraph [ref=e97]: Basic Coverage for Home Systems and Appliances
              - list [ref=e100]:
                - listitem [ref=e101]: Plumbing System
                - listitem [ref=e102]: Electrical and Heating Systems
                - listitem [ref=e103]: Dishwasher and Refrigerator
                - listitem [ref=e104]: Garbage Disposal
                - listitem [ref=e105]: Oven and Cooktop
                - listitem [ref=e106]: Microwave Oven
              - link "Get Your Quote" [ref=e108] [cursor=pointer]:
                - /url: /quote2
            - generic [ref=e110]:
              - generic [ref=e111]: Most Popular
              - heading "Essential Plan" [level=3] [ref=e112]
              - paragraph [ref=e113]: "Our #1 Plan: The Comprehensive Home Warranty That Homeowners Trust"
              - list [ref=e116]:
                - listitem [ref=e117]: Everything in Starter
                - listitem [ref=e118]:
                  - strong [ref=e119]: Clothes Washer and Dryer
                - listitem [ref=e120]:
                  - strong [ref=e121]: Water Heater
                - listitem [ref=e122]:
                  - strong [ref=e123]: Air Conditioning
                - listitem [ref=e124]:
                  - strong [ref=e125]: Garage Door Opener
              - link "Get Your Quote" [ref=e127] [cursor=pointer]:
                - /url: /quote2
            - generic [ref=e129]:
              - heading "Premium Plan" [level=3] [ref=e130]
              - paragraph [ref=e131]: Our Most Complete Plan with Enhanced Home Protection
              - list [ref=e134]:
                - listitem [ref=e135]: Everything in Starter and Essential
                - listitem [ref=e136]:
                  - strong [ref=e137]: Luxury Appliances
                - listitem [ref=e138]:
                  - strong [ref=e139]: HVAC Tune-Ups
                - listitem [ref=e140]:
                  - strong [ref=e141]: Roof Leaks
                - listitem [ref=e142]:
                  - strong [ref=e143]: Garage Door Systems
                - listitem [ref=e144]:
                  - strong [ref=e145]: Additional Coverage and Enhancements
              - link "Get Your Quote" [ref=e147] [cursor=pointer]:
                - /url: /quote2
        - generic [ref=e148]:
          - generic [ref=e152]:
            - heading "\"Home breakdowns are inevitable. But the expense, that's optional.\"" [level=2] [ref=e153]:
              - text: "\"Home breakdowns are"
              - strong [ref=e154]: inevitable
              - text: .
              - text: But the expense, that's
              - strong [ref=e155]: optional
              - text: ."
            - heading "-Mr. Inevitable" [level=2] [ref=e156]
          - generic [ref=e158]:
            - heading "Coverage That Fits Your Home" [level=2] [ref=e159]
            - generic [ref=e160]:
              - button "HVAC" [ref=e161] [cursor=pointer]:
                - generic: HVAC
              - button "Appliances" [ref=e162] [cursor=pointer]:
                - generic: Appliances
              - button "Plumbing" [ref=e163] [cursor=pointer]:
                - generic: Plumbing
              - button "Electrical" [ref=e164] [cursor=pointer]:
                - generic: Electrical
              - button "Add-Ons" [ref=e165] [cursor=pointer]:
                - generic: Add-Ons
          - generic [ref=e167]:
            - generic [ref=e168]:
              - heading "Heating, Ventilation, and Air Conditioning (HVAC) Coverage" [level=3] [ref=e169]
              - generic [ref=e170]:
                - generic [ref=e172]: When your HVAC system breaks down it can cost thousands to repair or replace it. A home warranty helps protect your budget from unexpected, expensive bills for your home’s heating, air conditioning, heat pumps, ductwork, thermostats, and more.
                - generic [ref=e174]:
                  - link "Air Conditioning Air Conditioning" [ref=e175] [cursor=pointer]:
                    - /url: /coverage/hvac/air-conditioning-system
                    - heading "Air Conditioning" [level=4] [ref=e176]:
                      - text: Air Conditioning
                      - img [ref=e177]
                    - img "Air Conditioning" [ref=e179]
                  - link "Heating System Heating System" [ref=e180] [cursor=pointer]:
                    - /url: /coverage/hvac/heating
                    - heading "Heating System" [level=4] [ref=e181]:
                      - text: Heating System
                      - img [ref=e182]
                    - img "Heating System" [ref=e184]
                  - link "Ductwork Ductwork" [ref=e185] [cursor=pointer]:
                    - /url: /coverage/hvac/ductwork
                    - heading "Ductwork" [level=4] [ref=e186]:
                      - text: Ductwork
                      - img [ref=e187]
                    - img "Ductwork" [ref=e189]
            - link "Learn More" [ref=e191] [cursor=pointer]:
              - /url: /coverage
        - generic [ref=e193]:
          - heading "This is what it can cost you without a home warranty" [level=2] [ref=e195]
          - generic [ref=e196]:
            - link "Air Conditioner $8,300 to $12,500" [ref=e197] [cursor=pointer]:
              - /url: /coverage/hvac/air-conditioning-system
              - generic [ref=e198]:
                - heading "Air Conditioner" [level=3] [ref=e200]
                - img [ref=e202]
                - generic [ref=e203]:
                  - paragraph
                  - paragraph [ref=e204]: $8,300 to $12,500
            - link "Heating System $3,500 to $7,500" [ref=e205] [cursor=pointer]:
              - /url: /coverage/hvac/heating
              - generic [ref=e206]:
                - heading "Heating System" [level=3] [ref=e208]
                - img [ref=e210]
                - generic [ref=e211]:
                  - paragraph
                  - paragraph [ref=e212]: $3,500 to $7,500
            - link "Plumbing System $125 to $800" [ref=e213] [cursor=pointer]:
              - /url: /coverage/plumbing
              - generic [ref=e214]:
                - heading "Plumbing System" [level=3] [ref=e216]
                - img [ref=e218]
                - generic [ref=e219]:
                  - paragraph
                  - paragraph [ref=e220]: $125 to $800
            - link "Electrical System $280 to $2,500" [ref=e221] [cursor=pointer]:
              - /url: /coverage/systems/electrical-system
              - generic [ref=e222]:
                - heading "Electrical System" [level=3] [ref=e224]
                - img [ref=e226]
                - generic [ref=e227]:
                  - paragraph
                  - paragraph [ref=e228]: $280 to $2,500
            - link "Oven/Range $600 to $3,000" [ref=e229] [cursor=pointer]:
              - /url: /coverage/appliances
              - generic [ref=e230]:
                - heading "Oven/Range" [level=3] [ref=e232]
                - img [ref=e234]
                - generic [ref=e235]:
                  - paragraph
                  - paragraph [ref=e236]: $600 to $3,000
            - link "Water Heater $600 to $5,600" [ref=e237] [cursor=pointer]:
              - /url: /coverage/plumbing/water-heater
              - generic [ref=e238]:
                - heading "Water Heater" [level=3] [ref=e240]
                - img [ref=e242]
                - generic [ref=e243]:
                  - paragraph
                  - paragraph [ref=e244]: $600 to $5,600
          - paragraph [ref=e247]: Things break when you least expect, and the cost of repairing or replacing your home systems and appliances can devastate your budget. Avoid huge, inconvenient expenses with a home warranty.*
        - generic [ref=e249]:
          - generic [ref=e250]:
            - generic [ref=e251]:
              - heading "Home Insurance = Disaster" [level=2] [ref=e252]:
                - strong [ref=e253]: Home Insurance = Disaster
              - heading "Home Warranty = Inevitable" [level=2] [ref=e254]:
                - strong [ref=e255]: Home Warranty = Inevitable
            - generic [ref=e256]:
              - paragraph [ref=e257]: Home insurance and home warranties protect your home differently. With both, you're ready for whatever life brings.
              - paragraph [ref=e258]: Home insurance is for unexpected disasters that might happen like catastrophic damage or loss from fires, storms, flood, or theft.
              - paragraph [ref=e259]: A home warranty is for the wear and tear that will inevitably cause your home systems and appliances to fail, like your refrigerator, oven, dishwasher, electrical, plumbing, HVAC system, and more.
              - paragraph [ref=e260]: Every home system and appliance fails. There's absolutely no avoiding it. But when the day comes, First American has you covered.
            - link "Get Your Coverage Now" [ref=e261] [cursor=pointer]:
              - /url: /quote2
          - generic [ref=e263]:
            - generic [ref=e264]:
              - generic [ref=e265]: What's Covered
              - generic [ref=e266]: Home Warranty
              - generic [ref=e267]: Home Insurance
            - generic [ref=e268]:
              - generic [ref=e269]: Air Conditioning
              - img [ref=e271]
            - generic [ref=e273]:
              - generic [ref=e274]: Plumbing
              - img [ref=e276]
            - generic [ref=e278]:
              - generic [ref=e279]: Washer/Dryer
              - img [ref=e281]
            - generic [ref=e283]:
              - generic [ref=e284]: Refrigerator
              - img [ref=e286]
            - generic [ref=e288]:
              - generic [ref=e289]: Water Damage
              - img [ref=e291]
            - generic [ref=e293]:
              - generic [ref=e294]: Storm Damage
              - img [ref=e296]
            - generic [ref=e298]:
              - generic [ref=e299]: Fire Damage
              - img [ref=e301]
            - generic [ref=e303]:
              - generic [ref=e304]: Theft & Vandalism
              - img [ref=e306]
        - generic [ref=e310]:
          - generic [ref=e311]:
            - heading "Home Warranty FAQs" [level=2] [ref=e312]
            - link "View All FAQs" [ref=e313] [cursor=pointer]:
              - /url: /faq
          - generic [ref=e314]:
            - button "What is a home warranty?" [ref=e316] [cursor=pointer]:
              - text: What is a home warranty?
              - img [ref=e317]
            - button "Are home warranties worth it?" [ref=e320] [cursor=pointer]:
              - text: Are home warranties worth it?
              - img [ref=e321]
            - button "What does a home warranty cover?" [ref=e324] [cursor=pointer]:
              - text: What does a home warranty cover?
              - img [ref=e325]
            - button "How much is a home warranty?" [ref=e328] [cursor=pointer]:
              - text: How much is a home warranty?
              - img [ref=e329]
            - button "Is a home warranty the same as home insurance?" [ref=e332] [cursor=pointer]:
              - text: Is a home warranty the same as home insurance?
              - img [ref=e333]
      - generic [ref=e336]:
        - heading "Home breakdowns are inevitable. But the expense, that's optional." [level=2] [ref=e339]:
          - generic [ref=e340]:
            - strong [ref=e341]: Home breakdowns are inevitable.
            - text: But the expense, that's optional.
        - generic [ref=e342]:
          - heading "Get a free home warranty quote in minutes." [level=3] [ref=e344]
          - generic [ref=e345]:
            - generic [ref=e346]:
              - textbox [ref=e347]
              - generic: Enter Zip Code
            - button "Start Quote" [ref=e348] [cursor=pointer]
          - generic [ref=e349]:
            - generic [ref=e350]: Or call us at
            - link "888.875.0533" [ref=e351] [cursor=pointer]:
              - /url: tel:8888750533
    - contentinfo [ref=e352]:
      - generic [ref=e354]:
        - paragraph [ref=e356]:
          - text: "*"
          - generic [ref=e357]:
            - text: Cost data is from research and project costs reported by
            - link "Link HomeGuide" [ref=e358] [cursor=pointer]:
              - /url: https://homeguide.com/costs
              - text: HomeGuide
            - text: members. Items listed may be optional or not available on some home warranty plans; please review the sample contract for specific coverage, terms and limitations.
        - button "Home Warranty Plans by State" [ref=e359] [cursor=pointer]:
          - generic [ref=e360]: Home Warranty Plans by State
        - generic [ref=e362]:
          - generic [ref=e363]:
            - paragraph [ref=e364]: Services
            - list [ref=e365]:
              - listitem [ref=e366]:
                - link "Home Warranty" [ref=e367] [cursor=pointer]:
                  - /url: /homeowner
              - listitem [ref=e368]:
                - link "Warranty Coverage" [ref=e369] [cursor=pointer]:
                  - /url: /coverage
              - listitem [ref=e370]:
                - link "Real Estate" [ref=e371] [cursor=pointer]:
                  - /url: /real-estate-plans
              - listitem [ref=e372]:
                - link "Service Providers" [ref=e373] [cursor=pointer]:
                  - /url: /service-provider
          - generic [ref=e374]:
            - paragraph [ref=e375]: Resources
            - list [ref=e376]:
              - listitem [ref=e377]:
                - link "Blog" [ref=e378] [cursor=pointer]:
                  - /url: /blog
              - listitem [ref=e379]:
                - link "FAQ" [ref=e380] [cursor=pointer]:
                  - /url: /faq
              - listitem [ref=e381]:
                - link "Appliance Guides" [ref=e382] [cursor=pointer]:
                  - /url: https://homewarranty.firstam.com/appliance-guides
          - generic [ref=e383]:
            - paragraph [ref=e384]: About Us
            - list [ref=e385]:
              - listitem [ref=e386]:
                - link "Contact" [ref=e387] [cursor=pointer]:
                  - /url: /contact-us
              - listitem [ref=e388]:
                - link "Accessibility" [ref=e389] [cursor=pointer]:
                  - /url: /accessibility
              - listitem [ref=e390]:
                - link "Terms of Use" [ref=e391] [cursor=pointer]:
                  - /url: /legal
              - listitem [ref=e392]:
                - link "Privacy" [ref=e393] [cursor=pointer]:
                  - /url: /privacy
        - button "Do Not Sell or Share My Personal Information" [ref=e395] [cursor=pointer]
        - generic [ref=e396]: © 2026 First American Home Warranty Corporation and its licensed subsidiaries. All rights reserved.
  - dialog "Cookie notice banner" [ref=e397]:
    - generic [ref=e398]: Privacy Notice
    - generic [ref=e399]:
      - text: This website uses cookies and similar technologies to manage your sessions, manage content, assist in our advertising and marketing efforts, and improve your website experience. To learn more please see our
      - link "privacy notice" [ref=e400] [cursor=pointer]:
        - /url: https://homewarranty.firstam.com/privacy
      - text: . By dismissing this notice, we will continue to utilize these cookies, however, you may
      - link "opt out of the sale or sharing of your personal information" [ref=e401] [cursor=pointer]:
        - /url: "#cookie-preferences"
        - text: opt out of the sale or sharing of your personal information (opens in a new tab/window)
      - text: for targeted advertising.
    - button "<svg viewBox=\"0 0 14 12\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" class=\"evidon-banner-closeimage\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" style=\"position:absolute; top:0; left:0;\" aria-label=\"close dialog icon\"><g stroke=\"none\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"square\"><g transform=\"translate(-1410.000000, -643.000000)\" stroke=\"#ffffff\" stroke-width=\"2\"><g transform=\"translate(1411.000000, 643.000000)\"><path d=\"M0.5,0.5 L11.5679722,11.5679722\" stroke=\"#ffffff\"></path><path d=\"M0.5,0.5 L11.5679722,11.5679722\" transform=\"translate(6.000000, 6.000000) scale(-1, 1) translate(-6.000000, -6.000000) \" stroke=\"#ffffff\"></path></g></g></g></svg>" [ref=e402] [cursor=pointer]:
      - img "close dialog icon" [ref=e403]
  - iframe [ref=e409]:
    
  - iframe [ref=e411]:
    
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
> 67  |     await page.goto('https://www.fahw.com/');
      |                ^ Error: page.goto: Test timeout of 30000ms exceeded.
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