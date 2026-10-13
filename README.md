# ShipSaver — Cainiao Shipping Promo Code Guide

A **static, six-language, single-page-per-language** coupon directory for seven Cainiao international consolidated-shipping destinations. The live website uses only HTML, CSS and vanilla JavaScript. No backend, Node.js, database, API, build command, login, analytics or external assets are required.

> **Important — coupon verification and affiliation:** The codes and advertised 85折 (15% off) were supplied by the site publisher and have **not** been independently verified against an authoritative Cainiao promotion notice. **Do not claim "official channel codes", guaranteed savings, a current expiry date, or Cainiao authorization without evidence.** The website clearly identifies itself as an independent information guide and directs users to Cainiao's own domain for transactions.

## What is included

| Page URL | Language | Purpose |
|---|---|---|
| `/` | Simplified Chinese | Chinese-speaking overseas shoppers |
| `/en/` | English | USA, Australia, Canada, Singapore and global audiences |
| `/ja/` | Japanese | Japan |
| `/th/` | Thai | Thailand |
| `/ru/` | Russian | Russia |
| `/fr-ca/` | Canadian French | Francophone Canada |

All six pages contain all seven destination-specific promo codes:

| Destination | Code |
|---|---|
| Australia | `AUONLY` |
| United States | `USONLY` |
| Canada | `CAONLY` |
| Japan | `JPONLY` |
| Singapore | `SG5BSE` |
| Thailand | `THONLY` |
| Russia | `RUONLY` |

Features: destination search, one-click copy, responsive cards, usage instructions, accessibility support, FAQ answers, JSON-LD `WebSite`/`WebPage`/`FAQPage`/`ItemList`, `hreflang`, self-canonical links, Open Graph image, XML sitemap, robots rules, basic HTTP security headers. Static HTML is readable by search bots and text-first AI retrieval systems without executing JavaScript.

## Repository layout

```text
cainiao-global-coupons/
├── public/                   # Deploy THIS directory on Cloudflare Pages
│   ├── index.html            # / (zh-CN)
│   ├── en/index.html         # /en/
│   ├── ja/index.html         # /ja/
│   ├── th/index.html         # /th/
│   ├── ru/index.html         # /ru/
│   ├── fr-ca/index.html      # /fr-ca/
│   ├── assets/style.css
│   ├── assets/app.js
│   ├── assets/favicon.svg
│   ├── assets/social-card.png
│   ├── _headers
│   ├── robots.txt
│   ├── sitemap.xml
│   └── llms.txt
├── site-data.json            # Codes, names, source and domain (editable)
├── tools/build.py            # Optional offline standard-library generator
├── tools/set_domain.py       # Configure production domain and regenerate HTML
├── tools/make_social_card.py # Optional preview image generator (requires Pillow)
├── README.zh-CN.md
├── .gitignore
└── README.md
```

**Static production does not run Python.** Python is only an optional local authoring convenience. `public/` already includes pre-rendered HTML and all browser assets.

## First: set the actual domain (required for search indexing)

Each page initially contains the intentional placeholder `https://YOUR-DOMAIN.example` in its canonical/alternate/Open Graph URLs; the sitemap and robots file also use it. **Replace this before publishing for SEO**.

With Python 3 installed, from the repository folder run:

```powershell
python tools/set_domain.py https://deals.yourdomain.com
```

The script updates `site-data.json` and regenerates all six pages, `sitemap.xml` and `robots.txt`. You can run it again with another domain later.

Without Python, replace `https://YOUR-DOMAIN.example` in every file under `public/` and change `site_url` in `site-data.json` manually. Do not leave the placeholder in production.

## Preview locally (optional)

```powershell
python -m http.server 8080 --directory public
```

Open `http://localhost:8080/` or `http://localhost:8080/en/`. Opening `public/index.html` as a `file://` path is not recommended because absolute asset links begin with `/` (they work correctly on a web host).

## Upload to GitHub

Create a **new, empty** GitHub repository, e.g. `cainiao-global-coupons`, then from the folder (PowerShell or a terminal with Git):

```powershell
git init
git add .
git commit -m "Launch multilingual static promo landing site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/cainiao-global-coupons.git
git push -u origin main
```

Replace `YOUR_USERNAME`. GitHub's **Add file → Upload files** also works if you prefer uploading without the command line; preserve the folders and `public/` directory.

## Deploy on Cloudflare Pages (recommended)

1. In the Cloudflare dashboard open **Workers & Pages → Create application → Pages → Connect to Git** and connect your new GitHub repository.
2. Set production branch to `main` and **Framework preset** to `None`.
3. Set **Build command** to `exit 0` (or leave empty if allowed) and **Build output directory** to **`public`**. Do not publish the repository root.
4. Click **Save and Deploy**. Confirm that the temporary `*.pages.dev` URL works, including `/en/` and `/ja/`.
5. Open the Pages project → **Custom domains → Set up a domain**. Add the *exact* domain configured in `site-data.json`, e.g. `deals.yourdomain.com`. Complete Cloudflare's DNS verification instructions.
6. After the custom domain serves correctly, visit `https://deals.yourdomain.com/sitemap.xml` and `https://deals.yourdomain.com/robots.txt`.
7. Add the domain to Google Search Console; submit the sitemap. Consider Bing Webmaster Tools as well.

For an **apex domain** (e.g. `yourdomain.com`), the domain must be on the Cloudflare zone with the appropriate name servers. For a **subdomain** such as `deals.yourdomain.com`, follow the CNAME and ownership instructions presented by the Pages custom-domain setup. **Adding DNS alone is not enough: attach the domain in Pages first**.

Future GitHub pushes automatically redeploy the website. Cloudflare Pages' free-tier quotas and domain registration fees are separate; check the current pricing if traffic is high.

Official deployment documentation: https://developers.cloudflare.com/pages/framework-guides/deploy-anything/ and https://developers.cloudflare.com/pages/configuration/custom-domains/

## Update the codes or content

- Codes, country names, content date, authoritative service link and canonical domain are in `site-data.json`. Update there and run `python tools/build.py`.
- The text of the six locales lives in the `T` dictionary in `tools/build.py`, near the top. Edit locale strings, then run the generator.
- The public HTML files are ready to edit directly, but regeneration overwrites such manual edits. Do not edit generated HTML and then run the generator without porting edits to its templates.
- When a coupon is **actually verified** at checkout, record its destination, timestamp, eligibility and evidence. Update only the corresponding wording rather than asserting that all codes were validated.
- Keep page content and structured data consistent; `dateModified` means the page was updated, not necessarily that the coupons were checked.

## Search / GEO notes

- Distinct URL per language and reciprocal `hreflang` links; never auto-redirect based on the visitor's guessed location.
- Each page has fully visible text, all country names and exact codes, so search bots and AI retrieval tools do not need to execute client-side code.
- JSON-LD FAQ and item listings describe visible content; they do **not** imply Google will show FAQ rich results or that an AI engine will cite/rank the page.
- The promotional 15% amount is not marked as a verified `Offer` because the details have not been confirmed.
- Self-reported promotions and first-party brand statements must not be presented as verified independently.
- For stronger long-term rankings, add *genuinely verified* promotion terms, country-specific eligibility details, useful tutorials and reliable attribution. Avoid fabricated reviews, fake scarcity or duplicate keyword pages.

## Quick checks before launch

- [ ] Check all seven codes in actual eligible country accounts / Cainiao checkout.
- [ ] Confirm which shipping methods, accounts, discounts, caps and expiry dates apply.
- [ ] If you claim “official code,” obtain a primary Cainiao promotion page or documented authorization.
- [ ] Set real HTTPS canonical domain using `tools/set_domain.py`.
- [ ] Preview all six locales and all seven copy buttons on desktop/mobile.
- [ ] Confirm correct routing on `/`, `/en/`, `/ja/`, `/th/`, `/ru/`, `/fr-ca/`.
- [ ] Link an appropriate privacy/contact page if you later add analytics, affiliate links, or forms.

© Independent information guide. No implication of endorsement or affiliation with Cainiao.
