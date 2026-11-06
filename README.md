# ShipSaver — Cainiao Shipping Promo Code Guide

A **static, six-language Cainiao shipping guide** for nine international consolidated-shipping destinations: a coupon directory plus a **100-article guide library** (80 Chinese, 20 English). The published website uses only HTML, CSS and vanilla JavaScript. No backend, database, API, login, analytics or runtime build step is required. Node.js is used only as an optional offline authoring tool for the guide pages.

> **Site positioning:** ShipSaver is a specialist, publisher-run directory of Cainiao consolidated-shipping promo codes. On-page copy is written in a confident, authoritative tone — the site carries no "unverified / not guaranteed / independent, not an official site" style disclaimers. Two internal guardrails remain: never invent prices, transit times or reviews, and never claim official Cainiao authorization or endorsement that does not exist. The site collects no orders and processes no payments; every transaction takes place inside Cainiao's own service.

## What is included

| Page URL | Language | Purpose |
|---|---|---|
| `/` | Simplified Chinese | Chinese-speaking overseas shoppers |
| `/en/` | English | USA, Australia, Canada, Singapore and global audiences |
| `/ja/` | Japanese | Japan |
| `/th/` | Thai | Thailand |
| `/ru/` | Russian | Russia |
| `/fr-ca/` | Canadian French | Francophone Canada |
| `/guides/` | Simplified Chinese | 80-article Chinese guide hub |
| `/en/guides/` | English | 20-article English guide hub |

The guide library covers five content pillars:

| Pillar | Chinese pages | English pages | Purpose |
|---|---|---|---|
| Unboxing VLOG scripts | 20 | — | Honest, shootable scripts that naturally mention parcels arriving via Cainiao consolidation |
| Carrier / route comparisons | 18 | — | Structural comparison of consolidation options without invented prices or transit times |
| Reverse-shopping guides | 22 | — | Practical buying-from-China advice, including anti-scam guidance |
| Consolidation tutorials | 20 | — | Step-by-step packing, declaration, tracking and delivery workflows |
| Cost and promo-code guides | — | 20 | Destination-specific savings, including the supplied `AUONLY`/`USONLY`/`JPONLY` code article |

All six home pages, both guide hubs and every one of the 100 guide pages contain all nine destination-specific promo codes. Guide pages repeat them in a dark, copy-enabled strip directly below the article hero, with the page's own destination highlighted:

| Destination | Code |
|---|---|
| Australia | `AUONLY` |
| United States | `USONLY` |
| Canada | `CAONLY` |
| Japan | `JPONLY` |
| Singapore | `SG5BSE` |
| Thailand | `THONLY` |
| Taiwan | `TW8LLQ` |
| Malaysia | `MYONLY` |
| Russia | `RUONLY` |

Features: destination search, one-click copy, responsive cards, a nine-code strip on every guide page, usage instructions, accessibility support, FAQ answers, JSON-LD `WebSite`/`WebPage`/`FAQPage`/`ItemList`, `hreflang`, self-canonical links, Open Graph image, XML sitemaps, robots rules, basic HTTP security headers. The 100 guide pages add `Article`/`BreadcrumbList`/`FAQPage`/`HowTo` structured data, tables of contents, source notes and same-language related links. Static HTML is readable by search bots and text-first AI retrieval systems without executing JavaScript.

## Repository layout

```text
cainiao-global-coupons/
├── index.html                # / (zh-CN) — repository root IS the web root
├── en/index.html             # /en/
├── ja/index.html             # /ja/
├── th/index.html             # /th/
├── ru/index.html             # /ru/
├── fr-ca/index.html          # /fr-ca/
├── guides/index.html         # /guides/ — Chinese guide hub
├── guides/<slug>/index.html  # 80 Chinese guide articles
├── en/guides/index.html      # /en/guides/ — English guide hub
├── en/guides/<slug>/index.html # 20 English guide articles
├── content/                  # Guide source content (one module per pillar)
│   ├── zh-unboxing.mjs       # 20 Chinese unboxing VLOG scripts
│   ├── zh-compare.mjs        # 18 Chinese carrier/route comparisons
│   ├── zh-reverse.mjs        # 22 Chinese reverse-shopping guides
│   ├── zh-tutorial.mjs       # 20 Chinese consolidation tutorials
│   └── en-cost.mjs           # 20 English cost/promo guides
├── assets/style.css
├── assets/guide.css          # Article, hub, table and TOC styles
├── assets/app.js
├── assets/favicon.svg
├── assets/social-card.png
├── _headers                  # Static HTTP response headers
├── .nojekyll                 # Tells GitHub Pages to publish files as-is
├── robots.txt
├── sitemap.xml               # Six locale landing pages
├── sitemap-guides.xml        # Two guide hubs + 100 guide articles
├── llms.txt
├── site-data.json            # Codes, names, source and domain (editable)
├── tools/build.py            # Optional offline generator for the six locale pages
├── tools/build-guides.mjs    # Optional offline generator for the 100 guide pages
├── tools/set_domain.py       # Configure production domain and regenerate HTML
├── tools/make_social_card.py # Optional preview image generator (requires Pillow)
├── README.zh-CN.md
├── .gitignore
└── README.md
```

**Static production does not run Python.** Python is only an optional local authoring convenience. The repository root already contains the pre-rendered HTML and all browser assets, so it can be published directly on GitHub Pages.

## Domain configuration

The site is currently configured for `https://cainiao-coupons.biggemedtech.com` in `site-data.json`. Canonical, `hreflang`, Open Graph, sitemap and `llms.txt` URLs all use that domain.

To change it with Python 3 installed, from the repository folder run:

```powershell
python tools/set_domain.py https://deals.yourdomain.com
```

The script updates `site-data.json`, regenerates the six locale pages and `sitemap.xml`, then runs the Node guide generator so the 100 guide URLs follow. Without Python, change `site_url` in `site-data.json` and run both generators:

```powershell
python tools/build.py
node tools/build-guides.mjs
```

Never publish with a canonical domain that does not match the domain actually serving the site.

## Preview locally (optional)

```powershell
python -m http.server 8080
```

Run it from the repository root (the folder containing `index.html`). Open `http://localhost:8080/` or `http://localhost:8080/en/`. Opening `index.html` as a `file://` path is not recommended because absolute asset links begin with `/` (they work correctly on a web host).

## Upload to GitHub

Create a **new, empty** GitHub repository, e.g. `cainiao-global-coupons`, then from the folder (PowerShell or a terminal with Git):

```powershell
git init
git add .
git commit -m "Launch multilingual static promo landing site"
git branch -M master
git remote add origin https://github.com/YOUR_USERNAME/cainiao-global-coupons.git
git push -u origin master
```

Replace `YOUR_USERNAME`. GitHub's **Add file → Upload files** also works if you prefer uploading without the command line; preserve the folder structure.

## Deploy on GitHub Pages (recommended)

The repository root is the web root — no build step is needed.

1. Push the repository to GitHub (above), then open **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **Deploy from a branch**.
3. Branch: `master` (or `main`), folder: **`/ (root)`**, then **Save**.
4. Wait about a minute. The site is published at `https://YOUR_USERNAME.github.io/cainiao-global-coupons/`. Check `/en/` and `/ja/` too.
5. The committed `.nojekyll` file disables Jekyll processing, so `_headers` and every other file is published as-is.
6. Internal links and assets use relative paths (`assets/...`, `../en/`), so the site works both at the github.io project subpath and at a custom domain. For SEO, still bind the **exact** HTTPS domain configured in `site-data.json` via **Settings → Pages → Custom domain** (run `tools/set_domain.py` first), since canonical/hreflang/sitemap URLs are absolute.
7. Once the final domain serves correctly, verify `https://deals.yourdomain.com/sitemap.xml` and `/robots.txt`, then add the domain to Google Search Console and submit the sitemap. Bing Webmaster Tools is optional.

Future pushes to the selected branch automatically redeploy the site.

## Alternative: deploy on Cloudflare Pages

1. In the Cloudflare dashboard open **Workers & Pages → Create application → Pages → Connect to Git** and connect the repository.
2. Set production branch to `master` and **Framework preset** to `None`.
3. Set **Build command** to `exit 0` (or leave empty if allowed) and **Build output directory** to **`/`** (the repository root — it now contains `index.html` directly).
4. Click **Save and Deploy**. Confirm that the temporary `*.pages.dev` URL works, including `/en/` and `/ja/`.
5. Open the Pages project → **Custom domains → Set up a domain**. Add the *exact* domain configured in `site-data.json`, e.g. `deals.yourdomain.com`. Complete Cloudflare's DNS verification instructions.
6. After the custom domain serves correctly, visit `https://deals.yourdomain.com/sitemap.xml` and `https://deals.yourdomain.com/robots.txt`, then submit the sitemap in Google Search Console.

For an **apex domain** (e.g. `yourdomain.com`), the domain must be on the Cloudflare zone with the appropriate name servers. For a **subdomain** such as `deals.yourdomain.com`, follow the CNAME and ownership instructions presented by the Pages custom-domain setup. **Adding DNS alone is not enough: attach the domain in Pages first**.

Cloudflare Pages' free-tier quotas and domain registration fees are separate; check the current pricing if traffic is high.

Official deployment documentation: https://developers.cloudflare.com/pages/framework-guides/deploy-anything/ and https://developers.cloudflare.com/pages/configuration/custom-domains/

## Guide library: architecture and authoring

The 100 guide pages are plain static HTML. Each article has its own indexable URL, canonical link, language-switch link, Open Graph tags, breadcrumb, table of contents, FAQ and same-language related links.

- Chinese articles: `/guides/<slug>/` (80 pages)
- English articles: `/en/guides/<slug>/` (20 pages)
- Hubs: `/guides/` and `/en/guides/`

Authoring workflow (Node.js 18+; no dependencies):

```powershell
node tools/build-guides.mjs
```

The generator reads `site-data.json` and the five modules in `content/`, then writes the guide pages, both hubs, `sitemap-guides.xml`, `llms.txt`, and the guide sitemap line in `robots.txt`. It refuses to build unless there are exactly 100 guides with unique slugs, a valid pillar/language, sufficient description length, body sections, FAQ entries and resolvable same-language related links.

Generator ownership:

| Output | Owner |
|---|---|
| Six locale landing pages, `sitemap.xml`, `robots.txt` | `tools/build.py` |
| Guide pages, guide hubs, `sitemap-guides.xml`, `llms.txt`, guide sitemap line in `robots.txt` | `tools/build-guides.mjs` |

If you change `site-data.json`, run both generators, in this order:

```powershell
python tools/build.py
node tools/build-guides.mjs
```

`build.py` no longer writes `llms.txt`, so running it alone will not erase the guide index. The committed HTML is already up to date; neither command is needed to deploy.

**Asset cache-busting:** the production domain sits behind Cloudflare, which caches `style.css`/`guide.css` by URL. Whenever you change either stylesheet, bump `ASSET_VER` in `tools/build.py` and `tools/build-guides.mjs` (same value, e.g. a date stamp) and regenerate — the rendered `<link>` URLs become `*.css?v=<ASSET_VER>`, a new cache key that forces browsers and the edge to fetch the new CSS. Without the bump, newly added CSS classes can render unstyled.

Editorial rules used by the library:

- Unboxing pages are **production scripts**, not claims that the author personally bought or received each item.
- Comparisons do not invent competitor prices, transit times or service failures; Cainiao advantages are described structurally (consolidation, tracking, destination coverage).
- Customs and tax pages avoid fixed exemption thresholds because rules change; they point to CBP, ABF, CBSA, Japan Customs and similar primary sources.
- Promo codes and the advertised 15% discount are presented in a confident, authoritative tone — no "unverified", "not guaranteed" or "not an official site" wording on rendered pages. Troubleshooting content (what to check when a code does not apply) is framed as practical application guidance, not as doubt about the codes.

## Update the codes or content

- Codes, country names, content date, authoritative service link and canonical domain are in `site-data.json`. Update there and run `python tools/build.py`, then `node tools/build-guides.mjs`.
- **Adding a destination is a one-file change.** Append one destination object (slug, flag, code, six locale names, synonyms) to the `destinations` array in `site-data.json` and run both generators. Counts, landing-page titles/descriptions, every guide-page code strip and hub statistic, `llms.txt`, JSON-LD item lists and the `codeTable`/token-driven lists inside articles all update automatically. `tools/make_social_card.py` also reads the JSON and auto-fits the prefix line width.
- Authoring tokens available in `content/*.mjs` (expanded at build time from `site-data.json`): `{{dest_count}}`, `{{names:zh}}`, `{{names:en}}`, `{{codes:zh}}`, `{{codes:en}}`, `{{code_list:en}}`, `{{code_prefixes}}`, `{{code_for:en}}`; a `codeTable: { caption }` section renders the full destination/code table without hand-written rows.
- The only manual spots after adding a destination are the two editorial tables with per-country notes — the address-format table in `content/zh-reverse.mjs` and the "what to check first" table in `content/en-cost.mjs` — because their note columns are hand-written. Add one row each, then rerun the guide generator.
- The text of the six locale landing pages lives in the `T` dictionary in `tools/build.py`, near the top. Edit locale strings, then run the generator.
- Guide articles live in `content/`. Edit the relevant module, then run `node tools/build-guides.mjs`. The generator enforces exactly 100 guides, so adding or removing an article also means updating the count check, the related-link graph and any hub copy.
- The generated HTML files at the repository root are ready to edit directly, but regeneration overwrites such manual edits. Do not edit generated HTML and then run the generator without porting edits to its templates.
- Keep page content and structured data consistent; `dateModified` records the latest content update.

## Search / GEO notes

- Distinct URL per language and reciprocal `hreflang` links; never auto-redirect based on the visitor's guessed location.
- Each page has fully visible text, all country names and exact codes, so search bots and AI retrieval tools do not need to execute client-side code.
- JSON-LD FAQ and item listings describe visible content; they do **not** imply Google will show FAQ rich results or that an AI engine will cite/rank the page.
- The promotional 15% amount is presented as visible page copy, not as a schema.org `Offer` with invented price specifications.
- For stronger long-term rankings, keep adding country-specific eligibility details, useful tutorials, screenshots and reliable primary-source attribution. Avoid fabricated reviews, fake scarcity or duplicate keyword pages.

## Quick checks before launch

- [ ] Set real HTTPS canonical domain using `tools/set_domain.py`.
- [ ] Preview all six locales and all nine copy buttons on desktop/mobile.
- [ ] Confirm correct routing on `/`, `/en/`, `/ja/`, `/th/`, `/ru/`, `/fr-ca/`, `/guides/` and `/en/guides/`.
- [ ] Grep rendered HTML for banned hedge wording (`unverified`, `not guaranteed`, `not an official`, `未经独立核实`, `不保证`, `非菜鸟官方`) — it must not appear.
- [ ] Spot-check several guide pages: table of contents, tables, FAQ, related links and the promo-code strip.
- [ ] Confirm `sitemap-guides.xml` contains 102 URLs (two hubs + 100 articles) and is listed in `robots.txt`.
- [ ] Verify `llms.txt` lists all 100 guides after running the guide generator.
- [ ] Link an appropriate privacy/contact page if you later add analytics, affiliate links, or forms.

© ShipSaver — specialist Cainiao shipping code directory. No claim of official Cainiao authorization is made or implied.
