// English guides — 20 articles
// Editorial rule: no invented prices, transit times or reviews. Codes are labelled unverified.
export default [
  {
    slug: 'reduce-china-shipping-cost-promo-codes',
    lang: 'en',
    pillar: 'cost',
    title: 'How I Reduced My China Shipping Cost Without Changing My Shopping Habits',
    h1: 'How I reduced my China shipping cost without changing my shopping habits',
    desc: 'A practical look at destination-specific forwarding promo codes such as AUONLY, USONLY and JPONLY, and how to check whether they actually apply before paying.',
    lead: 'I kept buying the same things from Taobao and 1688. The only thing I changed was how I checked the shipping step — and that turned out to be where the money was hiding.',
    takeaways: [
      'The product price was rarely the problem; the international shipping step was.',
      'Some forwarding services publish destination-specific promo codes that are easy to miss.',
      'A code only counts if the checkout total actually changes before you pay.',
      'Codes are publisher-supplied and unverified here — always test them yourself.'
    ],
    sections: [
      {
        h: 'The annoying part was never the product price',
        p: [
          'I have been buying things from China for a while — Taobao, 1688, the usual. The product prices were usually reasonable. The annoying part was always the international shipping cost.',
          'A small order could look like a bargain until the forwarding and shipping fees were added. At that point, some purchases simply did not feel worth it anymore. I did not want to stop buying the things I actually needed; I wanted the shipping step to stop eating the savings.'
        ]
      },
      {
        h: 'What changed: I started comparing the shipping step',
        p: [
          'Recently I started comparing different shipping options instead of accepting the first quote. That is when I noticed something easy to miss: some forwarding services occasionally have regional promo codes.',
          'They are not always obvious. Sometimes they only work for specific destination countries, and sometimes the code field is buried near the end of checkout. If you are shipping to places like Australia, the US, Canada, Japan, Singapore, Thailand or Russia, there may be destination-specific codes available during promotions.'
        ]
      },
      {
        h: 'The codes I found while organising my notes',
        p: [
          'A few examples I found while organising my notes. I am listing them exactly as I recorded them, not as a guarantee that they are active today.'
        ],
        table: {
          caption: 'Destination-specific codes from my notes (unverified)',
          head: ['Destination', 'Code'],
          rows: [
            ['Australia', 'AUONLY'],
            ['United States', 'USONLY'],
            ['Canada', 'CAONLY'],
            ['Japan', 'JPONLY'],
            ['Singapore', 'SG5BSE'],
            ['Thailand', 'THONLY'],
            ['Russia', 'RUONLY']
          ]
        },
        note: { type: 'warn', text: 'I am not sure how long these will stay active. Check whether they actually apply before submitting payment. A code that worked last month may be dead today.' }
      },
      {
        h: 'How I check a code without wasting an order',
        p: [
          'My routine is simple and it has saved me from a few fake “deals”:',
        ],
        ol: [
          'Build the shipment first: parcels, route, packing options. Let the checkout calculate the real total.',
          'Find the promo-code field. If there is no field at all, the current route or account probably does not support codes.',
          'Enter the code that matches the destination country — not a neighbouring country’s code.',
          'Press apply and look at the total. A message saying “entered” is not the same as a discount.',
          'Screenshot the total before and after. If the amount did not move, the code did not apply.',
          'Only then pay. Most services will not let you add a code after the order is locked.'
        ],
        note: { type: 'tip', text: 'If a code fails, check destination, route, minimum spend, account eligibility and whether it is mutually exclusive with another offer. Do not keep submitting orders just to test codes.' }
      },
      {
        h: 'Why I made a reference page',
        p: [
          'I kept forgetting which code belonged to which country, so I made a small reference page for myself. It lists the seven destinations and the code I recorded for each one, with a copy button and a reminder to verify at checkout.',
          'I am sharing it here in case anyone else is also importing random stuff from China: https://cainiao-coupons.biggemedtech.com/',
          'It is an independent guide, not an official Cainiao channel. The codes and the advertised discount are publisher-supplied and have not been independently verified. Treat it as a starting point, not a promise.'
        ]
      },
      {
        h: 'What is actually worth the shipping cost',
        p: [
          'The code helps, but it does not rescue a bad shipping decision. The items that survive the math for me are usually light, hard to buy locally, and not fragile: stationery, small organisers, phone accessories, clothing basics, craft supplies.',
          'Heavy or bulky items can still make sense, but only after comparing volumetric weight and the local price. A discount on an expensive shipping method is still an expensive shipping method.'
        ]
      },
      {
        h: 'The habit I did not change',
        p: [
          'I still buy the same categories from the same platforms. I just refuse to pay the first shipping quote without checking the destination code, the billing weight and the route restrictions.',
          'That is the whole trick: not shopping less, but checking the last step more carefully.'
        ]
      }
    ],
    faq: [
      { q: 'Do these promo codes definitely work?', a: 'No. They are publisher-supplied and have not been independently verified. Availability, minimum spend, route eligibility and expiry are set by the checkout page.' },
      { q: 'Where do I enter a Cainiao shipping promo code?', a: 'Look for a promo code or coupon field during international shipping checkout. If no field appears, the current route, region or account may not support codes.' },
      { q: 'Can I combine a code with other discounts?', a: 'Not guaranteed. Stacking rules, caps and exclusions depend on the current offer terms. Check the total before paying.' },
      { q: 'Is this an official Cainiao site?', a: 'No. It is an independent information guide with no verified official affiliation. Use Cainiao’s own domain for transactions.' }
    ],
    related: ['cainiao-promo-codes-explained', 'verify-destination-promo-code', 'consolidation-vs-direct-shipping'],
    cta: { h: 'Check the code for your destination', p: 'Seven destinations, one-click copy, and a verification checklist for checkout.' }
  },
  {
    slug: 'cainiao-promo-codes-explained',
    lang: 'en',
    pillar: 'cost',
    title: 'Cainiao Promo Codes Explained: AUONLY, USONLY, CAONLY and More',
    h1: 'Cainiao promo codes explained, destination by destination',
    desc: 'What destination-specific Cainiao shipping codes like AUONLY, USONLY, CAONLY, JPONLY, SG5BSE, THONLY and RUONLY mean, and how to test them at checkout.',
    lead: 'These codes are not universal coupons. Each one is tied to a destination, and that is the first reason a code “does not work”.',
    takeaways: [
      'The suffix usually signals the destination: AU, US, CA, JP, SG, TH, RU.',
      'A destination match is necessary but not sufficient — route, account and minimum spend also matter.',
      'The only proof a code works is a lower total before payment.'
    ],
    sections: [
      {
        h: 'What the codes have in common',
        p: [
          'The seven codes in this guide follow a simple pattern: a destination prefix plus a short suffix. AUONLY for Australia, USONLY for the United States, CAONLY for Canada, JPONLY for Japan, SG5BSE for Singapore, THONLY for Thailand, RUONLY for Russia.',
          'That pattern is useful for remembering which code belongs where, but it is not proof that the code is live. Promotions expire, get capped, or apply only to certain shipping routes.'
        ]
      },
      {
        h: 'The full list',
        p: ['Copy the code that matches the delivery country, then verify it at checkout.'],
        table: {
          caption: 'Destination-specific codes (publisher-supplied, unverified)',
          head: ['Destination', 'Code', 'What to check first'],
          rows: [
            ['Australia', 'AUONLY', 'Route, GST handling, quarantine items'],
            ['United States', 'USONLY', 'Customs channel, address format, route'],
            ['Canada', 'CAONLY', 'Postal vs courier clearance, duties'],
            ['Japan', 'JPONLY', 'Address details, food/cosmetics limits'],
            ['Singapore', 'SG5BSE', 'GST handling, 6-digit postcode'],
            ['Thailand', 'THONLY', 'Import tax, restricted categories'],
            ['Russia', 'RUONLY', 'Current route availability, payment']
          ]
        }
      },
      {
        h: 'Why “invalid code” is usually not a bug',
        p: [
          'The five most common reasons: the destination does not match, the selected route is excluded, the order is below a minimum spend, the account is not eligible, or the promotion has ended.',
          'There is also a quieter failure: the code is accepted but the discount is zero because another offer already replaced it. Always compare the total, not the status message.'
        ]
      },
      {
        h: 'How to test without risking money',
        p: [
          'Build the shipment, note the total, apply the code, and compare. If the total does not change, remove the code and check the offer terms. Do not pay first and ask later — most services will not retro-apply a code.',
          'For a step-by-step version, see the verification checklist in this guide.'
        ]
      },
      {
        h: 'What the codes do not cover',
        p: [
          'A promo code discounts the shipping fee, not the product price, duties, taxes or optional services. It also does not make a prohibited item legal to import.',
          'If the shipping method is expensive because of volumetric weight, a percentage discount may still leave a high total. Fix the weight first, then apply the code.'
        ]
      }
    ],
    faq: [
      { q: 'Are these official Cainiao codes?', a: 'They are publisher-supplied and have not been verified against public official offer terms. This site is independent and not an official Cainiao channel.' },
      { q: 'Can I use AUONLY for the US?', a: 'No. The code is destination-specific. Using a mismatched code usually returns an invalid-code message.' },
      { q: 'Do the codes expire?', a: 'Almost certainly, though the exact dates are unknown. Test at checkout before paying.' },
      { q: 'Do codes stack with other coupons?', a: 'Not guaranteed. Check the offer terms and the final total.' }
    ],
    related: ['reduce-china-shipping-cost-promo-codes', 'verify-destination-promo-code', 'volumetric-weight-explained'],
    cta: { h: 'Copy the code for your country', p: 'Then run the five-step checkout check before you pay.' }
  },
  {
    slug: 'verify-destination-promo-code',
    lang: 'en',
    pillar: 'cost',
    title: 'How to Verify a Destination Promo Code Before You Pay',
    h1: 'A five-minute checklist for verifying a shipping promo code',
    desc: 'A repeatable checklist to test destination-specific shipping promo codes: route, minimum spend, account eligibility, stacking and the final total.',
    lead: 'Most “promo code not working” problems are not technical. They are a mismatch between the code and the shipment. This checklist finds the mismatch before you pay.',
    takeaways: [
      'Match the code to the destination and the selected route.',
      'Check minimum spend, account eligibility and stacking rules.',
      'The discount must appear in the total, not just in a status message.'
    ],
    sections: [
      {
        h: 'Before you start',
        p: [
          'Have the shipment built: parcels selected, route chosen, packing options added. A code tested on an incomplete order can behave differently from one tested on the final order.',
          'Take a screenshot of the total before applying anything. You will need it for comparison.'
        ]
      },
      {
        h: 'The checklist',
        p: ['Work through these in order. Stop at the first mismatch.'],
        ol: [
          '**Destination:** does the code match the delivery country? AUONLY for Australia, USONLY for the US, and so on.',
          '**Route:** is the selected shipping method included in the promotion? Some codes exclude express, sea freight or sensitive-goods routes.',
          '**Minimum spend:** does the shipping fee meet the threshold? A code can be valid but unusable below the minimum.',
          '**Account:** is the promotion limited to new users, verified accounts or specific regions?',
          '**Stacking:** is another discount already applied? Some offers are mutually exclusive.',
          '**Time and quota:** has the promotion ended or hit its usage cap?',
          '**Total:** did the amount actually drop? If not, the code did not apply.'
        ]
      },
      {
        h: 'What “applied” should look like',
        p: [
          'A working code usually adds a discount line to the fee breakdown and reduces the amount due. A message that says “code entered” or “coupon selected” is not enough.',
          'If the total changes by an amount you did not expect, check whether the discount is capped or calculated on the base shipping fee only.'
        ]
      },
      {
        h: 'If the code fails',
        p: [
          'Do not create multiple orders to keep testing. Remove the code, confirm the route and total, and try a different time or a different eligible route. If it still fails, assume it is not available to you right now.',
          'Never move to a private chat or an off-platform payment page because someone offers a “better code”. That is a common scam pattern.'
        ],
        note: { type: 'warn', text: 'No legitimate promo code requires your password, SMS code or a payment to a personal account.' }
      },
      {
        h: 'Record what worked',
        p: [
          'Keep a note of the date, destination, route, code and the total before and after. Over a few orders, you will see which codes are actually live and which routes give you the best all-in price.',
          'That record is more valuable than any static coupon list, including this one.'
        ]
      }
    ],
    faq: [
      { q: 'Why does a code work for my friend but not me?', a: 'Eligibility can depend on destination, route, account status, region or quota. A code is not transferable proof.' },
      { q: 'Can I apply a code after paying?', a: 'Usually no. Most checkouts lock the amount after payment. Test before you pay.' },
      { q: 'Is a screenshot of a discount enough proof?', a: 'No. Screenshots can be edited. Only the checkout total on your own order matters.' }
    ],
    related: ['cainiao-promo-codes-explained', 'reduce-china-shipping-cost-promo-codes', 'consolidation-vs-direct-shipping']
  },
  {
    slug: 'china-consolidation-shipping-guide',
    lang: 'en',
    pillar: 'tutorial',
    title: 'China Consolidation Shipping: A Beginner’s Guide',
    h1: 'Consolidation shipping from China, step by step',
    desc: 'How consolidation shipping works: warehouse address, parcel pre-registration, combining parcels, billing weight, customs and delivery, with a first-order checklist.',
    lead: 'Consolidation is not a cheaper courier. It is a way to turn several small parcels into one international shipment — and to control the weight you pay for.',
    takeaways: [
      'Ship parcels to a warehouse first, then combine them into one international shipment.',
      'Billing weight is the greater of actual and volumetric weight.',
      'The first order should be low-value, non-sensitive and not urgent.'
    ],
    sections: [
      {
        h: 'What consolidation actually does',
        p: [
          'You buy from one or more Chinese platforms. Instead of asking every seller to ship internationally, you send everything to a warehouse. The warehouse receives, weighs and stores each parcel. You then choose which parcels to combine and which route to use.',
          'The benefit is not magic. It is fewer repeat “first weight” charges, fewer separate customs events, and the option to remove packaging before the international leg.'
        ]
      },
      {
        h: 'The six steps',
        p: ['This is the sequence that matters. Doing it out of order causes most first-timer problems.'],
        ol: [
          '**Register and check routes.** Confirm your destination, available shipping methods and prohibited items before buying anything.',
          '**Get the warehouse address.** It includes a member or parcel code. Save it as an address in the shopping platform.',
          '**Order and pre-register.** After the seller ships, add the domestic tracking number to the warehouse system.',
          '**Verify on arrival.** Check quantity, weight, dimensions and condition. Raise discrepancies before combining.',
          '**Combine and pay.** Choose parcels, route and services such as reinforcement or insurance. Confirm the billing weight.',
          '**Clear customs and receive.** Provide documents if asked, then inspect the outer box before signing.'
        ]
      },
      {
        h: 'Billing weight in one paragraph',
        p: [
          'Carriers compare actual weight with volumetric weight (length × width × height ÷ a divisor). The larger number is billed. Soft, bulky items are usually charged by volume, which is why removing shoe boxes and compressing textiles can save more than hunting for a coupon.',
          'The divisor and rounding rules vary by route. Use the number on your route page, not a formula from another carrier.'
        ]
      },
      {
        h: 'What to combine and what to split',
        p: [
          'Combine parcels that share a destination, a route and a similar urgency. Split out oversized items, sensitive goods and high-value products that need their own insurance and tracking.',
          'Combining is not always cheaper. If the combined box increases volumetric weight or triggers an oversize fee, two shipments may cost less.'
        ]
      },
      {
        h: 'First-order checklist',
        p: [
          'Low value, non-sensitive, not fragile, not urgent. Two or three parcels are enough. Run the full flow once, record every fee, then scale up.',
          'If you are still choosing between direct shipping and consolidation, compare the total cost rather than the per-kilo rate.'
        ]
      }
    ],
    faq: [
      { q: 'Is consolidation always cheaper?', a: 'No. It reduces repeat first-weight charges, but volumetric weight, oversize fees and handling charges can make a single shipment more expensive.' },
      { q: 'Do I need to pre-register every parcel?', a: 'Yes, in practice. Unregistered parcels are slower to match and may incur manual handling fees.' },
      { q: 'How long does consolidation take?', a: 'It depends on warehouse processing, route, flights or vessel schedules, and customs. Treat any specific day count as an estimate, not a promise.' }
    ],
    related: ['volumetric-weight-explained', 'consolidation-vs-direct-shipping', 'prohibited-items-china-shipping'],
    cta: { h: 'Check the destination code before you ship', p: 'A code can reduce the shipping fee, but only if it applies to your route.' }
  },
  {
    slug: 'volumetric-weight-explained',
    lang: 'en',
    pillar: 'cost',
    title: 'Volumetric Weight Explained: Why Light Parcels Cost More',
    h1: 'Volumetric weight: the number that decides your shipping bill',
    desc: 'How volumetric weight works, how to measure a box, why divisors differ by route, and five ways to lower billing weight without damaging your goods.',
    lead: 'A 3 kg pillow can be billed as 9 kg. Not because the scale is wrong, but because the box takes up space that could carry denser cargo.',
    takeaways: [
      'Volumetric weight = length × width × height ÷ the carrier’s divisor.',
      'Billing weight is the greater of actual and volumetric weight.',
      'A smaller box usually saves more than a discount code.'
    ],
    sections: [
      {
        h: 'The formula',
        p: [
          'Measure the outer box in centimetres, including tape and reinforcement. Multiply length × width × height, then divide by the carrier’s divisor. The result is volumetric weight in kilograms.',
          'Common divisors are 5000, 6000 and 8000, but the exact number depends on the route. Air freight usually uses a smaller divisor because space is expensive; sea freight may use a larger one or bill by cubic metre.'
        ]
      },
      {
        h: 'Why the divisor matters so much',
        p: [
          'A smaller divisor produces a larger volumetric weight. The same box can be billed very differently on two routes, even if the per-kilo rate looks similar.',
          'This is why comparing “price per kg” across routes is misleading. Compare the all-in total for the same box and the same service level.'
        ]
      },
      {
        h: 'Is your parcel “light and bulky”?',
        p: ['Use this quick test:'],
        ol: [
          'Measure the outer box and calculate the volume.',
          'Divide by the route divisor to get volumetric weight.',
          'Compare with actual weight.',
          'If volumetric weight is more than 1.5× actual weight, treat it as light and bulky.',
          'Prioritise a smaller box, compression or a different route.'
        ]
      },
      {
        h: 'Five ways to lower billing weight',
        p: ['In rough order of impact:'],
        ul: [
          '**Use a smaller box.** Ask the warehouse to fit the box to the goods.',
          '**Compress soft goods.** Vacuum bags for clothing, bedding and plush toys.',
          '**Remove shoe boxes and gift boxes** when they add no protection.',
          '**Flat-pack furniture.** Knock-down pieces take far less volume.',
          '**Reduce excess filler.** Enough protection, not a balloon of bubble wrap.'
        ]
      },
      {
        h: 'When not to compress',
        p: [
          'Fragile, precision or high-value items need buffer space. Saving a few dollars on volumetric weight is a bad trade if it increases breakage.',
          'For valuable goods, pay for insurance and keep the packaging evidence. For a deeper cost model, see the landed-cost guide.'
        ]
      }
    ],
    faq: [
      { q: 'Is volumetric weight always used?', a: 'Most international routes use it, but divisors and rounding differ. A few routes bill by cubic metre instead.' },
      { q: 'Can I measure the box myself?', a: 'Yes. Measure the outer dimensions after packing. Your estimate helps you decide whether to resize before paying.' },
      { q: 'Why did my parcel get heavier after packing?', a: 'Reinforcement, filler and a larger box all add weight and volume. Ask for the packed dimensions before payment.' }
    ],
    related: ['packing-hacks-volumetric-weight', 'landed-cost-calculation', 'china-consolidation-shipping-guide']
  },
  {
    slug: 'taobao-shipping-to-us',
    lang: 'en',
    pillar: 'reverse',
    title: 'Taobao Shipping to the US: Direct, Consolidation and Customs',
    h1: 'Shipping Taobao orders to the United States',
    desc: 'A practical guide to getting Taobao orders to the US: direct shipping vs consolidation, address format, billing weight, customs checks and delivery.',
    lead: 'The US is a large, address-sensitive market with customs rules that change. The shipping method matters, but so does the way you fill in the address.',
    takeaways: [
      'Use direct shipping for a single item; consolidate multiple sellers.',
      'Write the state abbreviation, ZIP code and apartment number correctly.',
      'Check current CBP rules before relying on any “tax-free” threshold.'
    ],
    sections: [
      {
        h: 'Direct or consolidated?',
        p: [
          'If you are buying one small item from a seller that supports international delivery, direct shipping is simpler. If you are buying from several sellers, consolidation usually reduces repeated first-weight charges.',
          'Consolidation also lets you remove packaging and choose a route based on volumetric weight. That can matter more than the per-kilo price.'
        ]
      },
      {
        h: 'Address format',
        p: [
          'US addresses need the street number, street name, apartment or unit, city, state abbreviation and ZIP code. Include a phone number that can receive calls.',
          'Do not translate the address into Chinese and do not omit the unit number. A missing apartment number is one of the most common delivery failures.'
        ]
      },
      {
        h: 'Billing weight and route choice',
        p: [
          'Air routes are usually better for small, urgent or high-value parcels. Sea freight can suit furniture and bulky goods, but the total includes port, pallet and delivery charges.',
          'Compare the all-in cost using the packed dimensions. A cheap per-kilo rate with a harsh volumetric divisor can be the more expensive option.'
        ]
      },
      {
        h: 'Customs',
        p: [
          'US low-value import rules have changed repeatedly in recent years, and different channels are treated differently. Do not rely on an old “de minimis” number you read online.',
          'Check the CBP website or ask the carrier for the current clearance and duty process for your route. Declare the real value and keep receipts.'
        ],
        note: { type: 'warn', text: 'This guide does not state a fixed duty-free amount. Rules change; verify with CBP and your carrier before shipping.' }
      },
      {
        h: 'Delivery',
        p: [
          'Final delivery may be handled by USPS, UPS, FedEx or a regional carrier. Keep the tracking number and monitor the handoff. If you are away, use a pickup point rather than authorising drop-off for high-value parcels.',
          'Inspect the outer box before signing. Photograph damage immediately.'
        ]
      }
    ],
    faq: [
      { q: 'Can Taobao ship directly to the US?', a: 'Some sellers and items support direct or official shipping. If not, send the order to a consolidation warehouse and forward it.' },
      { q: 'Do I have to pay US duty?', a: 'Not always, but it depends on the goods, value, channel and current rules. Check CBP and the carrier rather than assuming.' },
      { q: 'How should I write a US address?', a: 'Street, unit, city, state abbreviation, ZIP and a reachable phone number. Do not omit the apartment number.' }
    ],
    related: ['customs-duties-basics', 'consolidation-vs-direct-shipping', 'landed-cost-calculation'],
    code: 'USONLY'
  },
  {
    slug: 'taobao-shipping-to-australia',
    lang: 'en',
    pillar: 'reverse',
    title: 'Taobao Shipping to Australia: Quarantine, GST and Delivery',
    h1: 'Shipping Taobao orders to Australia',
    desc: 'How to ship Taobao orders to Australia: consolidation, GST handling, biosecurity quarantine, address format and remote-area delivery.',
    lead: 'Australia is not just a long shipping lane. Biosecurity rules can stop a parcel that looks completely ordinary, especially food, wood and plant-based goods.',
    takeaways: [
      'Check biosecurity rules before buying food, wood, bamboo or seed products.',
      'Low-value imports may still involve GST; confirm who collects it.',
      'Use the state abbreviation and four-digit postcode, and check remote-area surcharges.'
    ],
    sections: [
      {
        h: 'Route options',
        p: [
          'Air freight and express routes suit small, urgent or high-value parcels. Sea freight suits furniture, bulky equipment and larger orders, but the total includes port, pallet and delivery costs.',
          'Consolidation helps when you buy from several sellers. Remove unnecessary packaging before measuring volumetric weight.'
        ]
      },
      {
        h: 'Biosecurity is the real gate',
        p: [
          'Food, tea, wood, bamboo, seeds, soil and animal products may be inspected, treated or destroyed. Declare the material and purpose accurately. “Craft” or “household goods” is not a useful description.',
          'If quarantine asks for documents, respond through the official channel. Do not pay a random person who claims to “clear” the parcel.'
        ]
      },
      {
        h: 'GST and duties',
        p: [
          'Australia applies GST to many imported goods, including some low-value items, and the collection method depends on the platform or carrier. Duty depends on the product and value.',
          'This guide does not state fixed thresholds. Check the ATO and ABF, or ask the carrier how GST and duty are handled on your route.'
        ]
      },
      {
        h: 'Address and delivery',
        p: [
          'Include the street number, suburb, state abbreviation and four-digit postcode. Apartment and unit numbers must be included.',
          'Remote areas can attract a surcharge or a longer delivery window. Check the postcode with the carrier before paying.'
        ]
      },
      {
        h: 'What to buy, what to skip',
        p: [
          'Clothing, stationery, small home goods and tools usually travel well. Food, wooden furniture and anything containing seeds need extra checks.',
          'For high-value goods, insure the parcel and keep the packaging until you have inspected everything.'
        ]
      }
    ],
    faq: [
      { q: 'Can I ship food to Australia?', a: 'Some food is allowed, but biosecurity rules are strict. Declare it accurately and check the current requirements before buying.' },
      { q: 'Is GST charged on low-value imports?', a: 'Low-value goods can involve GST, depending on the seller, platform and carrier arrangements. Check the ATO and your carrier.' },
      { q: 'How do I check a remote postcode?', a: 'Use the carrier’s postcode tool or ask support. Remote surcharges are common outside major cities.' }
    ],
    related: ['customs-duties-basics', 'prohibited-items-china-shipping', 'taobao-shipping-to-us'],
    code: 'AUONLY'
  },
  {
    slug: 'taobao-shipping-to-canada',
    lang: 'en',
    pillar: 'reverse',
    title: 'Taobao Shipping to Canada: Postal vs Courier Clearance',
    h1: 'Shipping Taobao orders to Canada',
    desc: 'Taobao to Canada shipping guide: consolidation, postal vs courier customs clearance, duties and GST/HST, address format and delivery.',
    lead: 'In Canada, the clearance channel can change the final price. Postal and courier shipments are not handled the same way, and the difference often shows up as a service fee.',
    takeaways: [
      'Ask which clearance channel the route uses before comparing prices.',
      'Duties, GST/HST and brokerage fees can all appear on the same parcel.',
      'Use the province abbreviation and the letter-number postcode format.'
    ],
    sections: [
      {
        h: 'Consolidation basics',
        p: [
          'Send multiple Taobao orders to one warehouse, then combine them into a single international shipment. This reduces repeated first-weight charges and lets you remove excess packaging.',
          'Check the packed dimensions before paying. Canadian routes can be sensitive to volumetric weight, especially for bulky, light goods.'
        ]
      },
      {
        h: 'Postal vs courier',
        p: [
          'Postal routes are often handled by Canada Post and the customs process is more passive. Courier routes usually have a dedicated clearance team, more proactive communication and potentially a brokerage or advancement fee.',
          'A cheaper freight quote can become the more expensive option once the clearance fee is added. Ask for the all-in estimate.'
        ],
        table: {
          caption: 'Typical differences (confirm with your carrier)',
          head: ['Factor', 'Postal', 'Courier'],
          rows: [
            ['Clearance', 'Postal/customs process', 'Carrier clearance team'],
            ['Communication', 'May be passive', 'Usually proactive'],
            ['Fees', 'Often simpler', 'Possible brokerage/advance fee'],
            ['Speed', 'Variable', 'More predictable'],
            ['Best for', 'Ordinary personal parcels', 'Urgent/high-value goods']
          ]
        }
      },
      {
        h: 'Duties and taxes',
        p: [
          'A parcel may attract duty, GST/HST and a clearance service fee. Whether it does depends on the goods, value, origin and channel.',
          'This guide does not give a fixed exemption amount. Check CBSA and the carrier’s written policy for your route.'
        ]
      },
      {
        h: 'Address format',
        p: [
          'Include the unit number, street address, city, province abbreviation and postcode. Canadian postcodes alternate letters and numbers, for example A1A 1A1.',
          'Verify the postcode with Canada Post before shipping. A wrong postcode can delay sorting or cause a return.'
        ]
      },
      {
        h: 'Practical tips',
        p: [
          'For ordinary personal parcels, a postal route can be simpler. For urgent or high-value goods, a courier route with tracking and insurance may be worth the fee.',
          'Keep receipts and inspect the box before signing.'
        ]
      }
    ],
    faq: [
      { q: 'Is postal shipping to Canada cheaper?', a: 'Not necessarily. The freight may be lower, but compare the total including duties, taxes and any clearance fee.' },
      { q: 'What is a brokerage fee?', a: 'A fee some couriers charge for clearing a parcel through customs. Ask whether it is included before paying.' },
      { q: 'How do I write a Canadian postcode?', a: 'Use the letter-number format such as A1A 1A1. Verify it with Canada Post.' }
    ],
    related: ['customs-duties-basics', 'taobao-shipping-to-us', 'prohibited-items-china-shipping'],
    code: 'CAONLY'
  },
  {
    slug: 'taobao-shipping-to-japan',
    lang: 'en',
    pillar: 'reverse',
    title: 'Taobao Shipping to Japan: Address, Customs and Food Rules',
    h1: 'Shipping Taobao orders to Japan',
    desc: 'Taobao to Japan shipping guide: consolidation, precise address format, customs and consumption tax, food/cosmetics restrictions and delivery.',
    lead: 'Japan rewards accuracy. A complete address and an honest declaration will do more for your delivery time than a faster route.',
    takeaways: [
      'Include the building name and room number, not just the street number.',
      'Food, medicines and cosmetics have separate import rules.',
      'Declare a realistic value and keep the purchase receipt.'
    ],
    sections: [
      {
        h: 'Consolidation and route choice',
        p: [
          'Air routes suit clothing, small electronics, anime goods and other light parcels. Sea freight suits furniture and bulky items but takes longer.',
          'Combine parcels from multiple sellers, then check the packed dimensions. Japanese homes are often compact, so measure doorways before buying large furniture.'
        ]
      },
      {
        h: 'Address format',
        p: [
          'Write the postcode, prefecture, city/ward, block number, building name and room number. The building name and room number are not optional.',
          'Use a phone number that can receive calls. Some carriers schedule delivery in advance.'
        ]
      },
      {
        h: 'Customs and tax',
        p: [
          'Personal imports may involve customs duty and consumption tax, depending on the goods, value and quantity. Food, medicines and cosmetics have additional rules.',
          'Repeated quantities of the same item can be treated as commercial imports. Keep receipts and be ready to explain personal use.'
        ]
      },
      {
        h: 'Restricted categories',
        p: [
          'Meat, dairy, some health products, medicines and certain cosmetics are restricted. Check the Ministry of Health, Labour and Welfare and the animal quarantine service before buying.',
          'Do not describe a restricted item as a “gift” to avoid checks. A mismatch between declaration and contents is worse than paying tax.'
        ]
      },
      {
        h: 'Delivery',
        p: [
          'Final delivery is usually handled by a local carrier such as Sagawa, Yamato or Japan Post. Keep the local tracking number.',
          'If you are not home, use a delivery locker or reschedule rather than authorising unattended drop-off for valuable parcels.'
        ]
      }
    ],
    faq: [
      { q: 'Do I need the building name for a Japanese address?', a: 'Yes. Without the building name and room number, the carrier may not be able to deliver.' },
      { q: 'Can I ship supplements to Japan?', a: 'Some are allowed, but ingredients and quantities are restricted. Check the health authority rules first.' },
      { q: 'Will I pay consumption tax?', a: 'It depends on the goods, value and current rules. Check Japan Customs and the carrier’s notice.' }
    ],
    related: ['customs-duties-basics', 'prohibited-items-china-shipping', 'taobao-shipping-to-singapore'],
    code: 'JPONLY'
  },
  {
    slug: 'taobao-shipping-to-singapore',
    lang: 'en',
    pillar: 'reverse',
    title: 'Taobao Shipping to Singapore: Fast Routes, GST and Addresses',
    h1: 'Shipping Taobao orders to Singapore',
    desc: 'Taobao to Singapore shipping guide: air vs sea freight, GST handling, 6-digit postcodes, restricted goods and delivery options.',
    lead: 'Singapore is close, compact and well connected. The main risks are GST handling, restricted categories and an incomplete address.',
    takeaways: [
      'Air freight is usually the practical choice for small parcels.',
      'Check who collects GST before comparing prices.',
      'Use the six-digit postcode and include the unit number.'
    ],
    sections: [
      {
        h: 'Air or sea',
        p: [
          'Air freight suits clothing, accessories, small electronics and most personal orders. Sea freight can suit furniture and bulk goods, but the savings depend on volume and handling fees.',
          'Consolidation reduces repeated first-weight charges. Remove packaging before measuring volumetric weight.'
        ]
      },
      {
        h: 'GST',
        p: [
          'Singapore charges GST on imported goods, and low-value goods are also in scope. The collection method depends on the seller, platform and carrier.',
          'Ask the carrier whether GST is included, collected on delivery, or handled by the seller. A “cheap” quote that excludes GST is not the final price.'
        ]
      },
      {
        h: 'Restricted goods',
        p: [
          'Chewing gum, tobacco, certain food products, medicines and controlled items have restrictions. Branded counterfeit goods are high risk.',
          'Check the Singapore Customs prohibited and controlled goods lists before buying.'
        ]
      },
      {
        h: 'Address and delivery',
        p: [
          'The postcode is six digits. Include the block, street, unit number and a reachable phone number. For condominiums, confirm whether the concierge accepts parcels.',
          'Delivery is usually fast within Singapore, but the international leg and clearance still add time.'
        ]
      },
      {
        h: 'Cost checklist',
        p: [
          'Compare freight, GST, handling and delivery together. For small parcels, the fixed fees can dominate the per-kilo rate.',
          'Use the destination code SG5BSE only if it applies to your route and is accepted at checkout.'
        ]
      }
    ],
    faq: [
      { q: 'Is GST included in shipping quotes?', a: 'Not always. Ask the carrier whether GST is included, collected on delivery or handled separately.' },
      { q: 'Can I ship food to Singapore?', a: 'Some food is allowed, but meat, seafood and dairy have restrictions. Check the Singapore Food Agency rules.' },
      { q: 'How many digits is a Singapore postcode?', a: 'Six digits. Include the unit number as well.' }
    ],
    related: ['customs-duties-basics', 'taobao-shipping-to-thailand', 'prohibited-items-china-shipping'],
    code: 'SG5BSE'
  },
  {
    slug: 'taobao-shipping-to-thailand',
    lang: 'en',
    pillar: 'reverse',
    title: 'Taobao Shipping to Thailand: Tax, Routes and Delivery',
    h1: 'Shipping Taobao orders to Thailand',
    desc: 'Taobao to Thailand shipping guide: air and sea routes, import tax and VAT, restricted goods, address format and remote delivery.',
    lead: 'Thailand has competitive shipping options, but the cheapest quote is not always the lowest total. Tax, clearance and remote delivery can change the math.',
    takeaways: [
      'Air freight for small parcels, sea freight for bulky goods.',
      'Import duty and VAT depend on the category and declared value.',
      'Confirm the address format and whether remote delivery is covered.'
    ],
    sections: [
      {
        h: 'Route options',
        p: [
          'Air and express routes are practical for clothing, cosmetics, small appliances and accessories. Sea freight is better for furniture and bulk orders.',
          'Consolidation helps with multiple sellers. Check the packed dimensions before paying.'
        ]
      },
      {
        h: 'Tax and clearance',
        p: [
          'Imports may attract customs duty, VAT and a clearance service fee. The rate depends on the product category and value.',
          'Declare the real value. Under-declaring can lead to reassessment, fines or return. Keep the order and payment records.'
        ]
      },
      {
        h: 'Restricted goods',
        p: [
          'Food, medicines, cosmetics, electronics and branded goods may need permits or meet labelling rules. Some categories are prohibited outright.',
          'Check Thai Customs and the relevant regulator before buying.'
        ]
      },
      {
        h: 'Address and delivery',
        p: [
          'Thai addresses usually run from the house number and street to sub-district, district, province and postcode. Follow the format your carrier requires.',
          'Outside major cities, delivery may be slower or require pickup. Confirm before choosing the cheapest route.'
        ]
      },
      {
        h: 'Is it worth it?',
        p: [
          'Compare the landed cost with the local price, including tax and delivery. Small, light, hard-to-find items usually work; heavy commodities often do not.',
          'Use THONLY only if it applies to your destination and route.'
        ]
      }
    ],
    faq: [
      { q: 'Do I pay import tax in Thailand?', a: 'Possibly. Duty and VAT depend on the category and value. Check Thai Customs and the carrier.' },
      { q: 'Can I ship cosmetics to Thailand?', a: 'Some cosmetics are allowed, but ingredients and labelling may be regulated. Confirm before buying.' },
      { q: 'Is sea freight cheaper?', a: 'Per unit it can be, but minimum charges and handling fees may make small sea shipments uneconomical.' }
    ],
    related: ['customs-duties-basics', 'taobao-shipping-to-singapore', 'prohibited-items-china-shipping'],
    code: 'THONLY'
  },
  {
    slug: 'taobao-shipping-to-russia',
    lang: 'en',
    pillar: 'reverse',
    title: 'Taobao Shipping to Russia: Routes, Payment and Compliance',
    h1: 'Shipping Taobao orders to Russia',
    desc: 'Taobao to Russia shipping guide: rail and road routes, payment constraints, customs, address format and the need to confirm current availability.',
    lead: 'Routes, payment channels and clearance for Russia can change quickly. Confirm what is available today before you commit to a large order.',
    takeaways: [
      'Rail and road are common for bulky goods; air is for small urgent parcels.',
      'Payment and route availability can change with external conditions.',
      'Use the full address, including the federal subject and six-digit postcode.'
    ],
    sections: [
      {
        h: 'Check availability first',
        p: [
          'International sanctions and banking restrictions can affect carriers, payment methods and routes. A route that worked last year may be suspended now.',
          'Ask the carrier for current availability in writing before buying. Do not rely on a static price list.'
        ]
      },
      {
        h: 'Route types',
        p: [
          'Rail and road routes are common for larger shipments and bulk goods. Air freight suits small, urgent or high-value parcels. Consolidation can reduce repeated first-weight charges.',
          'Transit times are long and variable. Plan for delays rather than promising a date.'
        ]
      },
      {
        h: 'Customs and compliance',
        p: [
          'Russian imports require declaration, and some categories need certification or permits. Branded goods, electronics and food carry higher risk.',
          'Check Russian customs rules and the carrier’s requirements. Declare the real value and keep receipts.'
        ]
      },
      {
        h: 'Payment',
        p: [
          'Cross-border payment may be restricted by banks or sanctions. Confirm the payment method, refund path and exchange rate before ordering.',
          'Never pay a personal account outside the platform’s official flow.'
        ]
      },
      {
        h: 'Address format',
        p: [
          'Include the federal subject, city, street, house number, apartment number and six-digit postcode. The recipient name should match the identification document.',
          'Remote delivery may switch to pickup. Confirm the collection window.'
        ]
      }
    ],
    faq: [
      { q: 'Can I still ship to Russia?', a: 'It depends on the carrier and current restrictions. Confirm availability and payment before buying.' },
      { q: 'Is rail cheaper than air?', a: 'Usually for bulky goods, but transit is longer. Compare the all-in cost and your deadline.' },
      { q: 'What address details are required?', a: 'Federal subject, city, street, house, apartment and six-digit postcode, plus a name matching the ID.' }
    ],
    related: ['customs-duties-basics', 'consolidation-vs-direct-shipping', 'prohibited-items-china-shipping'],
    code: 'RUONLY'
  },
  {
    slug: '1688-sourcing-small-business',
    lang: 'en',
    pillar: 'reverse',
    title: '1688 Sourcing for Small Businesses: Samples, MOQs and Shipping',
    h1: 'Sourcing from 1688 without over-ordering',
    desc: 'A small-business guide to 1688: sample orders, minimum order quantities, mixed batches, quality checks, payment and consolidation shipping.',
    lead: '1688 is a wholesale marketplace, not a retail store. The low prices come with MOQs, longer lead times and weaker buyer protection.',
    takeaways: [
      'Buy a sample before a bulk order, and a small batch before a container.',
      'Confirm MOQ, mixed-batch rules, lead time and defect policy in writing.',
      'Volumetric weight and packaging often decide whether the margin survives.'
    ],
    sections: [
      {
        h: 'How 1688 differs from Taobao',
        p: [
          'Taobao is retail-oriented: richer product pages, stronger buyer protection, smaller quantities. 1688 is wholesale-oriented: lower prices, minimum order quantities and terms that assume a business buyer.',
          'Individuals can often order, but you should expect sample fees, MOQs and limited returns.'
        ]
      },
      {
        h: 'The sampling sequence',
        p: ['Use this order to filter suppliers before committing money:'],
        ol: [
          'Check operating history, repeat-buyer rate, reviews and qualifications.',
          'Order a sample and inspect materials, colour, packaging and workmanship.',
          'Place a small batch to test lead time, defect rate and carton strength.',
          'Confirm restock lead time, mixed-batch rules and after-sales responsibility.',
          'Negotiate bulk pricing, payment terms and shipping only after the batch passes.'
        ]
      },
      {
        h: 'MOQ and mixed batches',
        p: [
          'MOQ may apply per style, per colour or per order value. Mixed batches can reduce pressure on a single SKU but add sorting and packing cost.',
          'Ask whether mixed colours and sizes are allowed, whether there is a surcharge, and how out-of-stock items are handled.'
        ]
      },
      {
        h: 'Quality evidence',
        p: [
          'Photograph and measure the sample. Set an acceptance standard in writing. Before bulk dispatch, ask for photos or video of the production batch.',
          'A warehouse arrival photo only shows the outer carton. It is not a quality inspection. For high-risk goods, use a third-party inspection or a warehouse inspection service.'
        ]
      },
      {
        h: 'Shipping and landed cost',
        p: [
          'Cartons, pallets and filler all affect volumetric weight. Ask the supplier to reduce packaging where safe, and compare air, rail and sea options.',
          'Build a landed-cost model that includes freight, duty, tax, handling, defects and returns. A low unit price can disappear after shipping.'
        ]
      }
    ],
    faq: [
      { q: 'Can I buy one item from 1688?', a: 'Some listings allow it, many do not. Ask for a sample order and expect a higher unit price.' },
      { q: 'Does 1688 accept returns?', a: 'Wholesale orders often exclude no-reason returns. Quality issues are negotiable. Confirm terms before ordering.' },
      { q: 'How do I check a supplier?', a: 'Operating history, repeat-buyer rate, review content, qualifications and sample quality. Do not rely on sales volume alone.' }
    ],
    related: ['landed-cost-calculation', 'china-consolidation-shipping-guide', 'best-things-to-buy-from-china']
  },
  {
    slug: 'consolidation-vs-direct-shipping',
    lang: 'en',
    pillar: 'compare',
    title: 'Consolidation vs Direct Shipping: Which Is Cheaper?',
    h1: 'Consolidation or direct shipping? Compare the total, not the rate',
    desc: 'A side-by-side comparison of consolidation and direct shipping from China: first-weight charges, volumetric weight, handling, customs and after-sales.',
    lead: 'Direct shipping wins on simplicity. Consolidation wins on flexibility. Which one is cheaper depends on how many parcels you have and how much space they waste.',
    takeaways: [
      'One small parcel: direct is often simpler and competitive.',
      'Several sellers: consolidation usually reduces repeat first-weight charges.',
      'Add handling, storage and volumetric weight before declaring a winner.'
    ],
    sections: [
      {
        h: 'How the costs differ',
        p: [
          'Direct shipping prices each order separately, so the first-weight charge repeats. Consolidation pays the first weight once but adds warehouse handling, possible storage and repacking.',
          'Consolidation also lets you remove packaging and compress goods, which can reduce volumetric weight. That is often the bigger saving.'
        ],
        table: {
          caption: 'When each option tends to win',
          head: ['Order shape', 'Direct', 'Consolidation'],
          rows: [
            ['One small item', 'Usually simpler', 'Fixed fees may not pay off'],
            ['3–5 sellers', 'Repeated first weight', 'Usually cheaper'],
            ['Bulky light goods', 'No repacking', 'Compression can help'],
            ['Urgent item', 'More predictable', 'Warehouse queue adds time'],
            ['Mixed sensitive goods', 'Limited options', 'Can split by route']
          ]
        }
      },
      {
        h: 'The hidden costs of consolidation',
        p: [
          'Warehouse handling, repacking, reinforcement, storage after the free period and insurance all add up. A consolidation quote that looks cheaper per kilo can lose after these fees.',
          'Ask for the all-in total for your exact parcel set, not a headline rate.'
        ]
      },
      {
        h: 'The hidden costs of direct',
        p: [
          'Direct shipping may not allow repacking, so you pay for the seller’s packaging. It may also limit route choice and after-sales options.',
          'For a single low-value item, those limitations often do not matter.'
        ]
      },
      {
        h: 'A simple decision rule',
        p: [
          'If the total packed volume is small and you have one or two parcels, compare direct first. If you have several sellers, fragile items that need reinforcement, or goods that can be compressed, price a consolidation.',
          'Then compare the two all-in totals at the same service level.'
        ]
      },
      {
        h: 'After-sales',
        p: [
          'Direct shipping keeps the responsibility chain shorter. Consolidation involves the seller, warehouse and international carrier, so evidence matters more.',
          'Photograph the outer box and open the parcel on video for high-value goods.'
        ]
      }
    ],
    faq: [
      { q: 'Is consolidation always cheaper?', a: 'No. It depends on parcel count, volumetric weight, handling fees and route. Compare all-in totals.' },
      { q: 'Can direct shipping remove packaging?', a: 'Usually not. Repacking is a warehouse service, so it requires consolidation.' },
      { q: 'Which is faster?', a: 'Direct can be more predictable for a single parcel. Consolidation adds warehouse processing time.' }
    ],
    related: ['china-consolidation-shipping-guide', 'volumetric-weight-explained', 'landed-cost-calculation']
  },
  {
    slug: 'landed-cost-calculation',
    lang: 'en',
    pillar: 'cost',
    title: 'How to Calculate Landed Cost for China Purchases',
    h1: 'Landed cost: the only number that tells you if it was worth it',
    desc: 'A landed-cost template for China purchases: product price, domestic freight, international shipping, volumetric weight, duty, tax and returns risk.',
    lead: 'The product page shows the cheapest number in the whole transaction. Landed cost shows the real one.',
    takeaways: [
      'Landed cost = product + domestic freight + international freight + duty/tax + services + risk.',
      'Estimate international freight from billing weight, not actual weight.',
      'If landed cost is close to the local price, the purchase is probably not worth the risk.'
    ],
    sections: [
      {
        h: 'The seven-line model',
        p: ['A spreadsheet with these rows is enough for most personal and small-business purchases.'],
        table: {
          caption: 'Landed-cost worksheet',
          head: ['Line', 'How to estimate', 'Watch out for'],
          rows: [
            ['Product price', 'Amount actually paid', 'Coupons already applied'],
            ['Domestic freight', 'Seller to warehouse', '“Free shipping” may exclude remote areas'],
            ['International freight', 'Billing weight × rate + first weight', 'Volumetric divisor and rounding'],
            ['Duty and tax', 'Destination rules', 'Do not assume zero'],
            ['Services', 'Repacking, insurance, reinforcement', 'Easy to forget'],
            ['Storage/handling', 'Consolidation and overdue fees', 'Free period is limited'],
            ['Returns risk', 'Value × probability', 'Cross-border returns are expensive']
          ]
        }
      },
      {
        h: 'A worked example',
        p: [
          'Suppose the product costs USD 45, domestic shipping is free, international freight is estimated at USD 40 for a 5 kg billing weight, reinforcement is USD 5, and duty/tax is reserved at USD 15. Landed cost is about USD 105.',
          'If the local price is USD 120, the saving is small relative to the risk. If the local price is USD 180, the purchase has a clear margin.'
        ],
        note: { type: 'tip', text: 'The numbers above illustrate the structure only. They are not a quote from any carrier. Recalculate with your route’s real rates.' }
      },
      {
        h: 'Use billing weight, not the scale weight',
        p: [
          'Measure the packed box and calculate volumetric weight. Use the larger of actual and volumetric weight. A box that is 30% smaller can change the freight line dramatically.',
          'For bulky goods, ask the warehouse for packed dimensions before payment.'
        ]
      },
      {
        h: 'Add the risk line',
        p: [
          'Not every purchase goes wrong, but the expected cost of the ones that do belongs in the model. Fragile, poor-fit, counterfeit-prone and warranty-dependent goods carry a higher risk.',
          'For high-value goods, add insurance and confirm what it covers.'
        ]
      },
      {
        h: 'When to walk away',
        p: [
          'If landed cost is within 10–15% of the local price, the case for importing is weak unless the item is unavailable locally. If the item is fragile, bulky or has no local warranty, the threshold should be even higher.',
          'A discount code changes the freight line. It does not change the product, duty or risk lines.'
        ]
      }
    ],
    faq: [
      { q: 'Should I include tax in landed cost?', a: 'Yes. If tax may apply, reserve an estimate. Excluding it makes the comparison misleading.' },
      { q: 'How do I estimate freight before buying?', a: 'Use the packed dimensions and weight, the route’s volumetric divisor and the current rate. Ask the carrier for an estimate.' },
      { q: 'Is a promo code part of landed cost?', a: 'It reduces the freight line if it actually applies. Include the discounted amount, not the advertised percentage.' }
    ],
    related: ['volumetric-weight-explained', 'consolidation-vs-direct-shipping', '1688-sourcing-small-business']
  },
  {
    slug: 'customs-duties-basics',
    lang: 'en',
    pillar: 'reverse',
    title: 'Customs and Duties for China Parcels: What to Check',
    h1: 'Customs and duties: what to check before your parcel lands',
    desc: 'A practical customs checklist for parcels from China: declaration value, receipts, duty and tax, clearance documents and avoiding scams.',
    lead: 'Customs is not a single rule you can memorise. It is a set of questions about the goods, the value, the channel and the destination.',
    takeaways: [
      'Declare the real value and keep the receipt.',
      'Rules differ by country and by postal vs courier channel.',
      'Only pay fees through official channels — never a personal account.'
    ],
    sections: [
      {
        h: 'The four questions customs asks',
        p: ['Most clearance decisions come down to these:'],
        ul: [
          '**What is it?** Product category, material and purpose.',
          '**How much is it worth?** Declared value and supporting evidence.',
          '**Is it allowed?** Prohibited, restricted or requiring a permit.',
          '**Which channel?** Postal, courier, express or freight.'
        ]
      },
      {
        h: 'Declaration value',
        p: [
          'Use the amount you actually paid. Under-declaring can trigger reassessment, fines or return; over-declaring increases tax unnecessarily.',
          'List multiple items separately. “Gift” or “sample” is not a substitute for a real description.'
        ]
      },
      {
        h: 'Documents you may need',
        p: [
          'Identification, a tax number, an invoice or order screenshot, a payment record, a product link and a description of use. Requirements vary by country and channel.',
          'If a carrier asks for authorisation to clear on your behalf, use its official template and portal.'
        ]
      },
      {
        h: 'Duty and tax',
        p: [
          'Duty depends on the product classification and origin. Tax depends on the destination’s rules. Some routes include tax, some collect on delivery, and some leave it to the recipient.',
          'Ask the carrier three questions: is tax included, what happens if it is not, and who pays the clearance fee?'
        ],
        note: { type: 'warn', text: 'This guide does not state fixed exemption amounts for any country. Rules change; check the official customs site for your destination.' }
      },
      {
        h: 'Scam patterns',
        p: [
          'A message asking you to pay a “clearance fee” to a personal account, a request for your SMS code, or a link to a non-official payment page. Stop and verify through the carrier’s official app or website.',
          'Legitimate clearance may require payment, but it goes through an official channel and produces a receipt.'
        ]
      }
    ],
    faq: [
      { q: 'Can I avoid duty by under-declaring?', a: 'No. It is risky and can lead to reassessment, fines or return. Declare the real value.' },
      { q: 'Who pays the duty?', a: 'It depends on the route and terms. Some quotes include tax; others collect from the recipient. Confirm before shipping.' },
      { q: 'What if my parcel is held?', a: 'Read the notice, provide the requested documents through the official channel, and keep copies. Do not pay a personal account.' }
    ],
    related: ['prohibited-items-china-shipping', 'taobao-shipping-to-us', 'landed-cost-calculation']
  },
  {
    slug: 'prohibited-items-china-shipping',
    lang: 'en',
    pillar: 'reverse',
    title: 'Prohibited and Restricted Items When Shipping from China',
    h1: 'What you cannot ship from China (and what needs a special route)',
    desc: 'A practical list of prohibited and restricted items for China forwarding: batteries, liquids, food, medicines, branded goods and controlled items.',
    lead: 'The list is not universal. The same item can be allowed on one route and refused on another, and destination rules can change.',
    takeaways: [
      'Check both the route and the destination country.',
      'Batteries, liquids, food, medicines and counterfeit goods are high risk.',
      '“Sensitive route” is a category, not a guarantee.',
      'Never misdeclare an item to get it through.'
    ],
    sections: [
      {
        h: 'High-risk categories',
        p: ['These are the categories most likely to need a special route or be refused.'],
        table: {
          caption: 'Common restrictions',
          head: ['Category', 'Why it is restricted', 'What to do'],
          rows: [
            ['Lithium batteries / power banks', 'Aviation dangerous goods', 'Confirm watt-hour limits and packaging'],
            ['Liquids / aerosols / alcohol', 'Flammable or leak risk', 'Check volume and ingredient limits'],
            ['Food / meat / dairy', 'Biosecurity and import permits', 'Check destination quarantine rules'],
            ['Medicines / supplements', 'Controlled ingredients', 'Check health authority rules'],
            ['Branded counterfeit goods', 'Intellectual property', 'Do not buy or ship'],
            ['Knives / lasers / radio devices', 'Controlled items', 'Check local law and carrier rules'],
            ['Seeds / soil / plants', 'Biosecurity', 'Most countries require permits']
          ]
        }
      },
      {
        h: 'Why the list changes',
        p: [
          'Airline dangerous-goods rules, destination customs policy and carrier certifications all change. A route that accepted an item last year may refuse it now.',
          'Check the route page at the time of shipping, not a saved list.'
        ]
      },
      {
        h: 'How to ask the right question',
        p: [
          'Do not ask “can you ship cosmetics?” Ask with the product link, ingredients, volume, battery type and destination. A specific question gets a specific answer.',
          'Keep the written reply. If two support agents disagree, the route’s written rules should win.'
        ]
      },
      {
        h: 'What happens if you get it wrong',
        p: [
          'The shipment can be returned, delayed, seized or fined. If the item is mixed with ordinary goods, the whole shipment can be affected.',
          'Ship sensitive goods separately and insure only after confirming the category is covered.'
        ]
      },
      {
        h: 'Alternatives',
        p: [
          'Use a route certified for that category, buy locally, or skip the item. Misdeclaration is not an alternative.',
          'For destination-specific rules, check the customs guide for your country.'
        ]
      }
    ],
    faq: [
      { q: 'Can I ship a power bank?', a: 'Some sensitive routes accept them with watt-hour and packaging limits. Many standard air routes do not. Confirm before buying.' },
      { q: 'Are supplements allowed?', a: 'It depends on the ingredients, quantity and destination. Check the local health authority and carrier.' },
      { q: 'What if the seller says it can ship?', a: 'The seller handles the domestic leg. International rules are set by the carrier and destination customs.' }
    ],
    related: ['customs-duties-basics', 'china-consolidation-shipping-guide', 'best-things-to-buy-from-china']
  },
  {
    slug: 'packing-hacks-volumetric-weight',
    lang: 'en',
    pillar: 'cost',
    title: 'Packing Hacks That Actually Lower Volumetric Weight',
    h1: 'Packing changes that lower the shipping bill',
    desc: 'Practical packing techniques to reduce volumetric weight: right-sizing boxes, compressing textiles, removing shoe boxes and flat-packing furniture.',
    lead: 'Most shipping savings come from the box, not the coupon. These are the changes that reliably move the billing weight.',
    takeaways: [
      'Right-size the box before adding filler.',
      'Compress soft goods and remove packaging that adds no protection.',
      'Do not compress fragile or high-value goods just to save space.'
    ],
    sections: [
      {
        h: 'Start with the box, not the contents',
        p: [
          'A box that is 20% too large in every dimension can be far more than 20% too expensive once volumetric weight is applied. Ask the warehouse to fit the box to the goods.',
          'Measure the packed box, not the product. Tape, reinforcement and filler all count.'
        ]
      },
      {
        h: 'The highest-impact changes',
        p: ['In rough order:'],
        ol: [
          'Use a smaller carton that still protects the goods.',
          'Compress clothing, bedding and plush toys with vacuum bags.',
          'Remove shoe boxes and gift boxes when they add no protection.',
          'Flat-pack knock-down furniture.',
          'Reduce excess bubble wrap and air pillows.',
          'Split oversized items into two smaller cartons if the total volume falls.'
        ]
      },
      {
        h: 'What not to compress',
        p: [
          'Glass, ceramics, instruments, precision equipment and anything with a fragile finish need buffer space. A slightly higher freight bill is cheaper than a broken item and a claim.',
          'For high-value goods, keep the original packaging and pay for insurance.'
        ]
      },
      {
        h: 'How to brief the warehouse',
        p: [
          'Be specific: “remove shoe boxes”, “vacuum-compress clothing”, “keep the gift box”, “add corner protection”, “do not fold the poster”. Vague instructions produce vague results.',
          'Ask for a photo of the packed box and the final dimensions before payment.'
        ]
      },
      {
        h: 'Measure the saving',
        p: [
          'Calculate volumetric weight before and after the change using the route divisor. If the box size did not change, the saving is probably zero.',
          'A smaller box usually beats a discount code because it reduces the billable quantity itself.'
        ]
      }
    ],
    faq: [
      { q: 'Does removing shoe boxes always help?', a: 'Only if it lets the warehouse use a smaller carton. If the outer box stays the same, the volumetric weight may not change.' },
      { q: 'Can I vacuum-pack everything?', a: 'No. Fragile and high-value items need protection. Compress only soft, non-fragile goods.' },
      { q: 'How do I know the final dimensions?', a: 'Ask the warehouse for a photo and measurement before payment. Keep the record in case of a billing dispute.' }
    ],
    related: ['volumetric-weight-explained', 'landed-cost-calculation', 'china-consolidation-shipping-guide']
  },
  {
    slug: 'best-things-to-buy-from-china',
    lang: 'en',
    pillar: 'reverse',
    title: 'What Is Actually Worth Buying from China and Shipping Abroad',
    h1: 'What is actually worth the shipping cost',
    desc: 'A category-by-category guide to what is worth importing from China: price gap, weight, fragility, compliance and local availability.',
    lead: 'The best imports are not the cheapest items. They are the items where the price gap survives shipping, customs and the risk of not being able to return them.',
    takeaways: [
      'Look for a large price gap, low weight and low compliance risk.',
      'Heavy, fragile and warranty-dependent goods rarely survive the math.',
      'Check local availability first — sometimes the gap is smaller than it looks.'
    ],
    sections: [
      {
        h: 'The selection formula',
        p: [
          'Worth importing ≈ price gap × usage frequency ÷ (weight + volumetric weight + compliance risk + return risk).',
          'A high price gap can still lose if the item is bulky, fragile or hard to return. A small gap can win if the item is light, useful and unavailable locally.'
        ]
      },
      {
        h: 'Categories that usually work',
        p: ['These tend to have a favourable weight-to-value ratio and manageable risk.'],
        table: {
          caption: 'Import-friendly categories',
          head: ['Category', 'Why it works', 'Watch out for'],
          rows: [
            ['Stationery and craft supplies', 'Light, large price gap', 'Liquids and tools'],
            ['Phone and desk accessories', 'Small, high margin', 'Batteries'],
            ['Clothing basics', 'Light, wide choice', 'Sizing and returns'],
            ['Home organisers', 'Good price gap', 'Volumetric weight'],
            ['Pet accessories', 'Light, varied', 'Small parts'],
            ['Cycling and camping small gear', 'Good value', 'Batteries, safety'],
            ['Kitchen gadgets', 'Wide choice', 'Voltage and plugs']
          ]
        }
      },
      {
        h: 'Categories that often fail',
        p: [
          'Large furniture, mattresses, heavy appliances, fragile ceramics, prescription medicines, food with strict quarantine rules and anything that depends on a local warranty.',
          'They can still be worth it, but only with a full landed-cost calculation and a clear plan for returns.'
        ]
      },
      {
        h: 'Compliance is part of the price',
        p: [
          'Electrical voltage, plug type, labelling, safety certification and import permits can turn a bargain into a problem.',
          'Check the destination rules before buying, not after the parcel arrives.'
        ]
      },
      {
        h: 'A simple test',
        p: [
          'Write down the local price, the landed cost and the return cost. If the saving is less than the cost of one failure, the purchase is a gamble rather than a saving.',
          'Then decide whether you are comfortable with that gamble.'
        ]
      }
    ],
    faq: [
      { q: 'Is it worth buying furniture from China?', a: 'Sometimes, but only after calculating volumetric weight, delivery, assembly and return risk. Compare with local options first.' },
      { q: 'What has the best margin?', a: 'Light, high-price-gap, low-compliance-risk categories such as stationery, accessories and small home goods.' },
      { q: 'How do I check compliance?', a: 'Check the destination’s import rules for the specific product category, including voltage, labelling and certification.' }
    ],
    related: ['landed-cost-calculation', '1688-sourcing-small-business', 'prohibited-items-china-shipping']
  },
  {
    slug: 'china-shopping-sale-calendar',
    lang: 'en',
    pillar: 'reverse',
    title: 'China Shopping Sale Calendar: 11.11, 618 and Spring Festival',
    h1: 'The China sale calendar, and how to ship around it',
    desc: 'A practical calendar of Chinese shopping events — 11.11, 618, Spring Festival — plus shipping cut-offs, warehouse congestion and pre-order timing.',
    lead: 'Sale prices are only half the story. The other half is whether the parcel can leave China before the logistics network gets congested.',
    takeaways: [
      'Order early enough to clear the warehouse before peak congestion.',
      'Pre-sale items ship later, so they miss the early consolidation window.',
      'Do not buy filler just to hit a discount threshold.'
    ],
    sections: [
      {
        h: 'The main events',
        p: [
          '11.11 (Singles’ Day) in November is the largest promotion. 618 in June is the mid-year event. Spring Festival, usually in January or February, is not a shopping festival but a logistics disruption: factories and couriers slow down or stop.',
          'There are also smaller events around New Year, Women’s Day, May Day and Back-to-School. Discounts vary by category.'
        ]
      },
      {
        h: 'Why shipping timing matters',
        p: [
          'After a major sale, warehouses receive a surge of parcels. Processing, consolidation and outbound handover slow down. Air and sea capacity also tightens.',
          'If you need something by a date, work backwards: delivery + customs + international transit + warehouse processing + domestic delivery + seller dispatch. Add a buffer for peak season.'
        ]
      },
      {
        h: 'Pre-sale traps',
        p: [
          'Pre-sale items often require a deposit and ship later than in-stock items. If you consolidate everything, one pre-sale parcel can hold up the rest.',
          'Ship in-stock items first and consolidate the pre-sale items separately.'
        ]
      },
      {
        h: 'Discount traps',
        p: [
          'Some sellers raise prices before the event and then discount back to roughly the original level. Record the price in advance or use a price-history tool.',
          'A threshold discount is not a saving if it makes you buy things you did not need.'
        ]
      },
      {
        h: 'A practical plan',
        p: [
          'Make a list before the sale. Set a budget that includes shipping, tax and services. Buy in-stock essentials early, use the sale for planned items, and avoid promising delivery dates you cannot control.',
          'If a code is available for your destination, test it at checkout — but do not let it justify an otherwise bad shipping decision.'
        ]
      }
    ],
    faq: [
      { q: 'When is the cheapest time to buy from China?', a: 'Major sales can offer good prices, but category and seller matter more than the date. Compare historical prices.' },
      { q: 'How early should I ship before Spring Festival?', a: 'Several weeks earlier than usual. Factories, couriers and warehouses may all reduce capacity.' },
      { q: 'Do sale parcels arrive later?', a: 'Often, yes. Warehouse and carrier congestion increases after major events.' }
    ],
    related: ['consolidation-vs-direct-shipping', 'landed-cost-calculation', 'china-consolidation-shipping-guide']
  }
];
