#!/usr/bin/env node
/**
 * Static guide generator.
 *
 * Authoring only: the published site is plain HTML/CSS/JS.
 * Run: node tools/build-guides.mjs
 *
 * Reads content/*.mjs plus site-data.json and writes:
 *   guides/<slug>/index.html
 *   en/guides/<slug>/index.html
 *   guides/index.html
 *   en/guides/index.html
 *   sitemap-guides.xml
 *   llms.txt  (regenerated with the full guide library)
 *   robots.txt (adds the guides sitemap line once)
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import zhUnboxing from '../content/zh-unboxing.mjs';
import zhCompare from '../content/zh-compare.mjs';
import zhReverse from '../content/zh-reverse.mjs';
import zhTutorial from '../content/zh-tutorial.mjs';
import enCost from '../content/en-cost.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SITE_DATA = JSON.parse(fs.readFileSync(path.join(ROOT, 'site-data.json'), 'utf8'));
const BASE = SITE_DATA.site_url.replace(/\/+$/, '');
const TODAY = '2026-10-28';

const GUIDES = [...zhUnboxing, ...zhCompare, ...zhReverse, ...zhTutorial, ...enCost];

const PILLARS = {
  unboxing: {
    zh: '好物开箱', en: 'Unboxing',
    zhDesc: '可直接照着拍的开箱 VLOG 脚本、选品清单与打包细节。',
    enDesc: 'Unboxing scripts, product lists and packing notes.'
  },
  compare: {
    zh: '集运对比', en: 'Comparisons',
    zhDesc: '按线路、时效、计费方式和服务边界做横向比较的方法与结论。',
    enDesc: 'How to compare carriers, routes, billing and service limits.'
  },
  reverse: {
    zh: '反向海淘', en: 'Reverse Shopping',
    zhDesc: '从国内平台下单、支付、合单到清关收货的完整攻略。',
    enDesc: 'Buying from Chinese platforms and getting parcels delivered abroad.'
  },
  tutorial: {
    zh: '集运教程', en: 'Tutorials',
    zhDesc: '从注册、入库预报、合单打包到理赔的逐步操作说明。',
    enDesc: 'Step-by-step consolidation operations, from warehouse address to claims.'
  },
  cost: {
    zh: '运费优化', en: 'Shipping Costs',
    zhDesc: '计费重、合单策略与目的地优惠码的成本优化方法。',
    enDesc: 'Billing weight, consolidation strategy and destination promo codes.'
  }
};

/* ------------------------------------------------------------------ utils */
const esc = (s) => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;').replace(/'/g, '&#39;');

function urlFor(g) {
  return g.lang === 'en' ? `/en/guides/${g.slug}/` : `/guides/${g.slug}/`;
}
function fileFor(g) {
  return path.join(ROOT, urlFor(g).replace(/^\//, ''), 'index.html');
}
function relLink(fromUrl, toUrl) {
  const fromDir = fromUrl.endsWith('/') ? fromUrl : fromUrl.replace(/[^/]*$/, '');
  let rel = path.posix.relative(fromDir, toUrl);
  if (!rel) rel = '.';
  if (toUrl.endsWith('/') && !rel.endsWith('/')) rel += '/';
  return rel;
}

const bySlug = new Map();
for (const g of GUIDES) {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(g.slug)) throw new Error(`Bad slug: ${g.slug}`);
  if (bySlug.has(g.slug)) throw new Error(`Duplicate slug: ${g.slug}`);
  if (!PILLARS[g.pillar]) throw new Error(`Bad pillar ${g.pillar} on ${g.slug}`);
  if (g.lang !== 'zh' && g.lang !== 'en') throw new Error(`Bad lang on ${g.slug}`);
  bySlug.set(g.slug, g);
}

function minutesFor(g) {
  if (g.minutes) return g.minutes;
  const tableText = (g.sections || []).flatMap(s => s.table ? [s.table.caption || '', ...s.table.head, ...s.table.rows.flat()] : []);
  const faqText = (g.faq || []).flatMap(x => [x.q, x.a]);
  const text = [
    g.lead, ...(g.takeaways || []),
    ...(g.sections || []).flatMap(s => [...(s.p || []), ...(s.ul || []), ...(s.ol || [])]),
    ...tableText, ...faqText
  ].join(' ');
  if (g.lang === 'zh') return Math.max(3, Math.round(text.replace(/\s/g, '').length / 300));
  return Math.max(3, Math.round(text.split(/\s+/).length / 200));
}

function inline(s, g) {
  let out = esc(s);
  out = out.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  out = out.replace(/\{\{guide:([a-z0-9-]+)\}\}/g, (_, slug) => {
    const target = bySlug.get(slug);
    if (!target) throw new Error(`Unknown related guide "${slug}" referenced by ${g.slug}`);
    return `<a href="${relLink(urlFor(g), urlFor(target))}">${esc(target.title)}</a>`;
  });
  return out;
}

function jsonLd(obj) {
  return JSON.stringify(obj).replace(/</g, '\\u003c');
}

/* --------------------------------------------------------------- fragments */
function head({ lang, title, desc, canonical, ogType, published, modified, extraLd, from }) {
  const root = relLink(from, '/');
  const css = relLink(from, '/assets/style.css');
  const guideCss = relLink(from, '/assets/guide.css');
  const icon = relLink(from, '/assets/favicon.svg');
  const img = BASE + '/assets/social-card.png';
  return `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="light">
<meta name="theme-color" content="#fff7f1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1">
<link rel="canonical" href="${esc(canonical)}">
<meta property="og:type" content="${ogType}">
<meta property="og:site_name" content="ShipSaver · Cainiao Shipping Guide">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${esc(canonical)}">
<meta property="og:locale" content="${lang === 'en' ? 'en_US' : 'zh_CN'}">
<meta property="og:image" content="${esc(img)}">
<meta name="twitter:card" content="summary_large_image">
${published ? `<meta property="article:published_time" content="${published}">\n<meta property="article:modified_time" content="${modified}">\n` : ''}<link rel="icon" href="${esc(icon)}" type="image/svg+xml">
<link rel="stylesheet" href="${esc(css)}">
<link rel="stylesheet" href="${esc(guideCss)}">
<script type="application/ld+json">${extraLd}</script>
<script src="${esc(relLink(from, '/assets/app.js'))}" defer></script>
</head>`;
}

function nav(from, lang) {
  const home = relLink(from, lang === 'en' ? '/en/' : '/');
  const codes = relLink(from, lang === 'en' ? '/en/' : '/') + '#codes';
  const hub = relLink(from, lang === 'en' ? '/en/guides/' : '/guides/');
  const other = lang === 'en' ? relLink(from, '/guides/') : relLink(from, '/en/guides/');
  const label = lang === 'en'
    ? { codes: 'Promo codes', guides: 'Guides', how: 'How it works', other: '中文指南' }
    : { codes: '优惠码', guides: '指南库', how: '使用步骤', other: 'English guides' };
  return `<div class="topline"></div>
<header class="wrap"><nav class="nav" aria-label="${lang === 'en' ? 'Main navigation' : '主导航'}">
<a class="brand" href="${home}"><span class="brand-icon" aria-hidden="true">✦</span><span class="brand-name">Ship<span style="color:#f36a35">Saver</span><small>CAINIAO CODE GUIDE</small></span></a>
<div class="nav-right"><a class="nav-link" href="${codes}">${label.codes}</a><a class="nav-link is-active" href="${hub}">${label.guides}</a><a class="nav-link" href="${home}#how">${label.how}</a><a class="nav-link" href="${other}" hreflang="${lang === 'en' ? 'zh-CN' : 'en'}">${label.other}</a></div></nav></header>`;
}

function footer(from, lang) {
  const official = SITE_DATA.official_info_url;
  const text = lang === 'en'
    ? 'Independent shipping guide. Not an official Cainiao website. No orders or payments are processed here. Promo codes are publisher-supplied and not independently verified; confirm every discount at checkout. Trademarks belong to their owners.'
    : '独立集运信息指南，非菜鸟官方网站。本站不处理订单与支付。优惠码由页面发布者提供，未经独立核实，所有优惠以结算页为准。相关商标归其权利人所有。';
  const link = lang === 'en' ? 'Official Cainiao service' : '菜鸟官方服务';
  const hub = relLink(from, lang === 'en' ? '/en/guides/' : '/guides/');
  const hubLabel = lang === 'en' ? 'All guides' : '全部指南';
  return `<footer class="footer"><div class="wrap"><div><strong>ShipSaver · Cainiao Shipping Guide</strong><p>${esc(text)}</p></div><div class="footer-links"><a href="${esc(hub)}">${esc(hubLabel)} →</a><a href="${esc(official)}" target="_blank" rel="noopener noreferrer">${esc(link)} ↗</a></div></div></footer>
<div class="toast" id="toast" role="status" aria-live="polite"></div>`;
}

function codebox(g) {
  if (!g.code) return '';
  const dest = SITE_DATA.destinations.find(d => d.code === g.code);
  if (!dest) throw new Error(`Unknown code ${g.code} on ${g.slug}`);
  const lang = g.lang;
  const label = lang === 'en' ? 'Destination code' : '目的地优惠码';
  const note = lang === 'en'
    ? 'Publisher-supplied and not independently verified. Check that the code applies before paying; eligibility, caps and expiry are set by the checkout page.'
    : '代码由页面发布者提供，未经独立核实。付款前请确认是否生效；适用条件、封顶与有效期均以结算页为准。';
  const copy = lang === 'en' ? 'Copy' : '复制';
  return `<aside class="codebox">
<div><p class="cb-label">${label}</p><p class="cb-dest">${esc(dest.flag)} ${esc(lang === 'en' ? dest.en : dest.zh)}</p><code>${esc(dest.code)}</code><p class="cb-note">${esc(note)}</p></div>
<button type="button" class="copy" data-copy="${esc(dest.code)}" aria-label="${esc(copy + ' ' + dest.code)}"><span class="copy-text">${esc(copy)}</span></button>
</aside>`;
}

function codeStrip(lang, from, featuredCode) {
  const isEn = lang === 'en';
  const title = isEn ? '7 destination promo codes' : '7 个目的地优惠码';
  const note = isEn
    ? 'Codes and the advertised 15% off are publisher-supplied and not independently verified. Confirm the discount at checkout before paying.'
    : '代码与宣传的 85 折均由页面发布者提供，未经独立核实。付款前请在结算页确认折扣是否生效。';
  const copy = isEn ? 'Copy' : '复制';
  const items = SITE_DATA.destinations.map(d => {
    const featured = featuredCode && d.code === featuredCode;
    return `<div class="cs-item${featured ? ' is-featured' : ''}">
<span class="cs-flag" aria-hidden="true">${esc(d.flag)}</span>
<span class="cs-name">${esc(isEn ? d.en : d.zh)}</span>
<code class="cs-code">${esc(d.code)}</code>
<button type="button" class="copy cs-copy" data-copy="${esc(d.code)}" aria-label="${esc(copy + ' ' + d.code)}"><span class="copy-text">${esc(copy)}</span></button>
</div>`;
  }).join('\n');
  return `<section class="code-strip" id="codes" aria-label="${esc(title)}"><div class="wrap">
<div class="cs-head"><div><p class="cs-kicker">${isEn ? 'Save on shipping' : '运费立减'}</p><h2>${esc(title)}</h2><p class="cs-note">${esc(note)}</p></div><a class="cs-all" href="${relLink(from, isEn ? '/en/' : '/')}#codes">${isEn ? 'Full code page' : '完整优惠码页'} <span aria-hidden="true">→</span></a></div>
<div class="cs-grid">${items}</div>
</div></section>`;
}

function tableHtml(t, g) {
  const head = `<tr>${t.head.map(c => `<th scope="col">${inline(c, g)}</th>`).join('')}</tr>`;
  const rows = t.rows.map(r => `<tr>${r.map((c, i) => i === 0 ? `<th scope="row">${inline(c, g)}</th>` : `<td>${inline(c, g)}</td>`).join('')}</tr>`).join('\n');
  return `<div class="data-table-wrap"><table class="data-table">${t.caption ? `<caption>${inline(t.caption, g)}</caption>` : ''}<thead>${head}</thead><tbody>${rows}</tbody></table></div>`;
}

function sectionsHtml(g) {
  return g.sections.map((s, i) => {
    const id = `s${i + 1}`;
    let body = `<h2 id="${id}">${inline(s.h, g)}</h2>`;
    if (s.p) body += s.p.map(p => `<p>${inline(p, g)}</p>`).join('\n');
    if (s.ul) body += `<ul>${s.ul.map(li => `<li>${inline(li, g)}</li>`).join('')}</ul>`;
    if (s.ol) body += `<ol>${s.ol.map(li => `<li>${inline(li, g)}</li>`).join('')}</ol>`;
    if (s.table) body += tableHtml(s.table, g);
    if (s.note) body += `<div class="callout ${s.note.type || ''}">${inline(s.note.text, g)}</div>`;
    return `<section aria-labelledby="${id}">${body}</section>`;
  }).join('\n');
}

function tocHtml(g) {
  const lang = g.lang;
  return `<aside class="toc" aria-label="${lang === 'en' ? 'On this page' : '本页目录'}">
<p class="toc-title">${lang === 'en' ? 'On this page' : '本页目录'}</p>
<ol>${g.sections.map((s, i) => `<li><a href="#s${i + 1}">${esc(s.h)}</a></li>`).join('')}</ol>
<div class="toc-cta"><a href="${relLink(urlFor(g), lang === 'en' ? '/en/' : '/')}#codes">${lang === 'en' ? 'See all destination codes →' : '查看全部目的地优惠码 →'}</a></div>
</aside>`;
}

function relatedHtml(g) {
  const list = (g.related || []).map(slug => {
    const t = bySlug.get(slug);
    if (!t) throw new Error(`Unknown related guide "${slug}" on ${g.slug}`);
    if (t.lang !== g.lang) throw new Error(`Cross-language related guide "${slug}" on ${g.slug}`);
    return t;
  });
  if (!list.length) return '';
  return `<section class="related"><h2>${g.lang === 'en' ? 'Keep reading' : '继续阅读'}</h2><div class="related-grid">${list.map(t => `<a class="related-card" href="${relLink(urlFor(g), urlFor(t))}"><span class="rc-pillar">${esc(PILLARS[t.pillar][t.lang])}</span><strong>${esc(t.title)}</strong><small>${minutesFor(t)} ${g.lang === 'en' ? 'min read' : '分钟阅读'}</small></a>`).join('')}</div></section>`;
}

/* ------------------------------------------------------------------- page */
function renderGuide(g) {
  const url = urlFor(g);
  const canonical = BASE + url;
  const lang = g.lang === 'en' ? 'en' : 'zh-CN';
  const hubUrl = g.lang === 'en' ? '/en/guides/' : '/guides/';
  const homeUrl = g.lang === 'en' ? '/en/' : '/';
  const updated = g.updated || TODAY;
  const mins = minutesFor(g);

  const crumbs = `<nav class="crumbs" aria-label="${g.lang === 'en' ? 'Breadcrumb' : '面包屑'}">
<a href="${relLink(url, homeUrl)}">${g.lang === 'en' ? 'Home' : '首页'}</a><span aria-hidden="true">/</span>
<a href="${relLink(url, hubUrl)}">${g.lang === 'en' ? 'Guides' : '指南库'}</a><span aria-hidden="true">/</span>
<a href="${relLink(url, hubUrl)}#${g.pillar}">${esc(PILLARS[g.pillar][g.lang])}</a><span aria-hidden="true">/</span>
<span>${esc(g.h1.length > 42 ? g.h1.slice(0, 42) + '…' : g.h1)}</span></nav>`;

  const takeaways = (g.takeaways || []).length ? `<div class="takeaways"><h2>${g.lang === 'en' ? 'Key takeaways' : '本文要点'}</h2><ul>${g.takeaways.map(t => `<li>${inline(t, g)}</li>`).join('')}</ul></div>` : '';

  const faq = (g.faq || []).length ? `<section class="faq-block" aria-labelledby="faq"><h2 id="faq">${g.lang === 'en' ? 'Frequently asked questions' : '常见问题'}</h2><div class="faq-list">${g.faq.map(({ q, a }) => `<details><summary>${esc(q)}</summary><p>${inline(a, g)}</p></details>`).join('')}</div></section>` : '';

  const cta = `<aside class="cta-panel"><div><h2>${esc(g.cta?.h || (g.lang === 'en' ? 'Check the current destination codes' : '查看当前目的地优惠码'))}</h2><p>${esc(g.cta?.p || (g.lang === 'en' ? 'Seven destination-specific codes, one-click copy, and the exact steps to verify them at checkout.' : '七个目的地专属代码，一键复制，并附付款前的核对步骤。'))}</p></div><a class="btn btn-primary" href="${relLink(url, g.lang === 'en' ? '/en/' : '/')}#codes">${g.lang === 'en' ? 'Browse codes' : '查看优惠码'} <span aria-hidden="true">→</span></a></aside>`;

  const disclaimer = `<p class="guide-disclaimer"><strong>${g.lang === 'en' ? 'Verification note:' : '核实说明：'}</strong> ${g.lang === 'en'
    ? 'This is an independent guide, not an official Cainiao channel. Shipping times, prices and promo-code eligibility change frequently; confirm them on the carrier’s own checkout page. Nothing here is a guaranteed saving.'
    : '本站为独立信息指南，不是菜鸟官方渠道。时效、价格与优惠码资格会随时调整，请以承运方结算页为准。本文不构成任何收益或折扣保证。'}</p>`;

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: g.h1,
    description: g.desc,
    inLanguage: lang,
    datePublished: updated,
    dateModified: updated,
    articleSection: PILLARS[g.pillar][g.lang],
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
    author: { '@type': 'Organization', name: 'ShipSaver Editorial' },
    publisher: {
      '@type': 'Organization',
      name: 'ShipSaver',
      logo: { '@type': 'ImageObject', url: BASE + '/assets/favicon.svg' }
    },
    image: BASE + '/assets/social-card.png'
  };
  const kw = [g.keyword, g.code].filter(Boolean).join(', ');
  if (kw) articleLd.keywords = kw;
  const graph = [articleLd, {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: g.lang === 'en' ? 'Home' : '首页', item: BASE + homeUrl },
      { '@type': 'ListItem', position: 2, name: g.lang === 'en' ? 'Guides' : '指南库', item: BASE + hubUrl },
      { '@type': 'ListItem', position: 3, name: g.h1, item: canonical }
    ]
  }];
  if ((g.faq || []).length) {
    graph.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: lang,
      mainEntity: g.faq.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } }))
    });
  }
  if (g.howto) {
    graph.push({
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: g.howto.name,
      description: g.howto.description,
      inLanguage: lang,
      step: g.howto.steps.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.name, text: s.text }))
    });
  }
  const ld = jsonLd(graph.length === 1 ? graph[0] : { '@context': 'https://schema.org', '@graph': graph.map(x => { const y = { ...x }; delete y['@context']; return y; }) });

  const html = `${head({
    lang,
    title: g.title,
    desc: g.desc,
    canonical,
    ogType: 'article',
    published: updated,
    modified: updated,
    extraLd: ld,
    from: url
  })}
<body class="guide-page" data-copied="${g.lang === 'en' ? 'Copied:' : '已复制：'}" data-copy-failed="${g.lang === 'en' ? 'Copy manually:' : '请手动复制：'}">
${nav(url, g.lang)}
<main>
<article>
<div class="guide-hero"><div class="wrap">
${crumbs}
<span class="pillar-badge">${esc(PILLARS[g.pillar][g.lang])}</span>
<h1>${esc(g.h1)}</h1>
<p class="guide-lead">${inline(g.lead, g)}</p>
<div class="guide-meta"><span>${g.lang === 'en' ? 'Updated' : '更新'} ${updated}</span><span class="dot" aria-hidden="true"></span><span>${mins} ${g.lang === 'en' ? 'min read' : '分钟阅读'}</span><span class="dot" aria-hidden="true"></span><span>${g.lang === 'en' ? 'ShipSaver Editorial' : 'ShipSaver 编辑组'}</span></div>
</div></div>
${codeStrip(g.lang, url, g.code)}
<div class="wrap guide-layout">
${tocHtml(g)}
<div class="guide-body">
${takeaways}
<div class="prose">
${sectionsHtml(g)}
${codebox(g)}
</div>
${faq}
${cta}
${relatedHtml(g)}
${disclaimer}
</div></div>
</article>
</main>
${footer(url, g.lang)}
</body></html>
`;
  fs.mkdirSync(path.dirname(fileFor(g)), { recursive: true });
  fs.writeFileSync(fileFor(g), html, 'utf8');
  return fileFor(g);
}

/* -------------------------------------------------------------------- hub */
function renderHub(lang) {
  const list = GUIDES.filter(g => g.lang === lang);
  const url = lang === 'en' ? '/en/guides/' : '/guides/';
  const canonical = BASE + url;
  const pillars = lang === 'en' ? ['cost', 'compare', 'reverse', 'tutorial'] : ['unboxing', 'compare', 'reverse', 'tutorial'];
  const isEn = lang === 'en';
  const title = isEn
    ? 'China Shipping Guides: Consolidation, Promo Codes & Costs'
    : '菜鸟集运指南库｜反向海淘、集运教程、开箱脚本与线路对比';
  const desc = isEn
    ? 'Practical guides to buying from Taobao and 1688, consolidating parcels, cutting volumetric weight and checking destination promo codes before you pay.'
    : '整理反向海淘、集运使用教程、集运公司对比与好物开箱脚本，覆盖美国、澳洲、加拿大、日本、新加坡、泰国、俄罗斯七条线路的实操细节。';
  const ld = jsonLd({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage', name: title, description: desc, url: canonical, inLanguage: isEn ? 'en' : 'zh-CN',
        isPartOf: { '@type': 'WebSite', name: 'ShipSaver', url: BASE + '/' }
      },
      {
        '@type': 'ItemList', name: title,
        itemListElement: list.map((g, i) => ({ '@type': 'ListItem', position: i + 1, name: g.title, url: BASE + urlFor(g) }))
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: isEn ? 'Home' : '首页', item: BASE + (isEn ? '/en/' : '/') },
          { '@type': 'ListItem', position: 2, name: isEn ? 'Guides' : '指南库', item: canonical }
        ]
      }
    ]
  });

  const sections = pillars.map(p => {
    const items = list.filter(g => g.pillar === p);
    if (!items.length) return '';
    return `<section class="hub-section" id="${p}">
<div class="hub-section-head"><h2>${esc(PILLARS[p][lang])}</h2><p>${esc(PILLARS[p][lang + 'Desc'])}</p></div>
<div class="hub-grid">${items.map(g => `<a class="hub-card" href="${relLink(url, urlFor(g))}">
<div class="hc-top"><span class="hc-kind">${esc(PILLARS[g.pillar][lang])}</span><span class="hc-time">${minutesFor(g)} ${isEn ? 'min' : '分钟'}</span></div>
<h3>${esc(g.title)}</h3><p>${esc(g.desc)}</p></a>`).join('')}</div>
</section>`;
  }).join('\n');

  const html = `${head({
    lang: isEn ? 'en' : 'zh-CN',
    title,
    desc,
    canonical,
    ogType: 'website',
    extraLd: ld,
    from: url
  })}
<body class="guide-page">
${nav(url, lang)}
<main>
<section class="hub-hero"><div class="wrap">
<nav class="crumbs" aria-label="${isEn ? 'Breadcrumb' : '面包屑'}"><a href="${relLink(url, isEn ? '/en/' : '/')}">${isEn ? 'Home' : '首页'}</a><span aria-hidden="true">/</span><span>${isEn ? 'Guides' : '指南库'}</span></nav>
<span class="pillar-badge">${isEn ? 'Guide library' : '集运知识库'}</span>
<h1>${isEn ? 'Buy from China.<br><span>Ship it smarter.</span>' : '从中国下单，<br><span>把运费花在刀刃上</span>'}</h1>
<p class="lead">${esc(desc)}</p>
<div class="hub-stats"><div class="hub-stat"><strong>${list.length}</strong><span>${isEn ? 'in-depth guides' : '篇实操指南'}</span></div><div class="hub-stat"><strong>7</strong><span>${isEn ? 'destinations' : '个目的国家'}</span></div><div class="hub-stat"><strong>${isEn ? '0' : '0'}</strong><span>${isEn ? 'sign-ups required' : '注册门槛'}</span></div></div>
</div></section>
${codeStrip(lang, url)}
<div class="wrap">
<nav class="hub-nav" aria-label="${isEn ? 'Jump to section' : '跳转到分类'}" style="margin-top:34px">${pillars.map(p => `<a href="#${p}">${esc(PILLARS[p][lang])}</a>`).join('')}<a href="#codes">${isEn ? 'Promo codes' : '优惠码速查'}</a></nav>
${sections}
<div class="hub-note"><strong>${isEn ? 'How to use this library.' : '怎么用这个指南库。'}</strong> ${isEn
    ? 'Start with the cost or comparison section if you are choosing a shipping method, then use the tutorial section while you set up your first consolidation. Promo codes are publisher-supplied and not independently verified — always test them at checkout before paying.'
    : '如果你还在选运输方式，先看“集运对比”和“运费优化”；第一次寄件，按“集运教程”的顺序操作。优惠码由页面发布者提供，未经独立核实，付款前务必在结算页实测。'}</div>
<p class="guide-footer-note">${isEn ? 'Updated 2026-10-28 · ShipSaver Editorial' : '更新于 2026-10-28 · ShipSaver 编辑组'}</p>
</div>
</main>
${footer(url, lang)}
</body></html>
`;
  const target = path.join(ROOT, url.replace(/^\//, ''), 'index.html');
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, html, 'utf8');
  return target;
}

/* --------------------------------------------------------------- outputs */
function writeSitemap() {
  const urls = [
    { loc: BASE + '/guides/', mod: TODAY },
    { loc: BASE + '/en/guides/', mod: TODAY },
    ...GUIDES.map(g => ({ loc: BASE + urlFor(g), mod: g.updated || TODAY }))
  ];
  const body = urls.map(u => `<url><loc>${esc(u.loc)}</loc><lastmod>${u.mod}</lastmod></url>`).join('\n');
  fs.writeFileSync(path.join(ROOT, 'sitemap-guides.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`, 'utf8');
}

function writeLlms() {
  const zh = GUIDES.filter(g => g.lang === 'zh');
  const en = GUIDES.filter(g => g.lang === 'en');
  let out = '# ShipSaver — Cainiao Shipping & Reverse-Shopping Guide\n\n';
  out += '> Independent information guide. Not an official Cainiao channel. Promo codes and the advertised 15% discount are publisher-supplied and not independently verified; confirm every saving at checkout.\n\n';
  out += '## Destination promo codes\n\n';
  for (const d of SITE_DATA.destinations) out += `- ${d.en}: \`${d.code}\`\n`;
  out += '\n## Language editions\n\n';
  out += `- 简体中文: ${BASE}/\n- English: ${BASE}/en/\n- 日本語: ${BASE}/ja/\n- ไทย: ${BASE}/th/\n- Русский: ${BASE}/ru/\n- Français (CA): ${BASE}/fr-ca/\n`;
  out += `\n## Guide library (${GUIDES.length} articles)\n\n`;
  out += `- Chinese index: ${BASE}/guides/\n- English index: ${BASE}/en/guides/\n\n`;
  const order = ['unboxing', 'compare', 'reverse', 'tutorial', 'cost'];
  for (const p of order) {
    const items = GUIDES.filter(g => g.pillar === p);
    if (!items.length) continue;
    out += `### ${PILLARS[p].en}\n\n`;
    for (const g of items) out += `- [${g.title}](${BASE}${urlFor(g)}): ${g.desc}\n`;
    out += '\n';
  }
  out += '## Reference and scope\n\n';
  out += `- Official Cainiao consolidated shipping information: ${SITE_DATA.official_info_url}\n`;
  out += `- Guide content updated: ${TODAY}\n`;
  out += '- Codes are not verified against public official offer terms.\n';
  out += '- No purchases, payments or shipping orders are processed on this site.\n';
  fs.writeFileSync(path.join(ROOT, 'llms.txt'), out, 'utf8');
  void zh; void en;
}

function updateRobots() {
  const p = path.join(ROOT, 'robots.txt');
  let txt = fs.existsSync(p) ? fs.readFileSync(p, 'utf8') : 'User-agent: *\nAllow: /\n';
  if (!/Sitemap:.*sitemap\.xml/.test(txt)) txt += `\nSitemap: ${BASE}/sitemap.xml\n`;
  if (!txt.includes('sitemap-guides.xml')) txt += `Sitemap: ${BASE}/sitemap-guides.xml\n`;
  txt = txt.replace(/\n{3,}/g, '\n\n');
  fs.writeFileSync(p, txt, 'utf8');
}

/* ------------------------------------------------------------------- main */
const counts = {};
for (const g of GUIDES) counts[g.pillar] = (counts[g.pillar] || 0) + 1;
if (GUIDES.length !== 100) throw new Error(`Expected 100 guides, found ${GUIDES.length}`);
for (const g of GUIDES) {
  if (!g.desc || g.desc.length > 175) throw new Error(`Description too long/short on ${g.slug} (${g.desc?.length})`);
  if (!g.sections?.length) throw new Error(`No sections on ${g.slug}`);
  if (!g.faq?.length) throw new Error(`No FAQ on ${g.slug}`);
}

GUIDES.forEach(renderGuide);
renderHub('zh');
renderHub('en');
writeSitemap();
writeLlms();
updateRobots();

console.log(`Built ${GUIDES.length} guide pages`);
console.log(counts);
console.log('Built guides/index.html, en/guides/index.html, sitemap-guides.xml, llms.txt, robots.txt');
