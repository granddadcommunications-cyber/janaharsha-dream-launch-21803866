import { mkdir, rm, cp, writeFile, readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const dist = path.join(root, "dist");
const checkOnly = process.argv.includes("--check");

const SITE = {
  name: "Janaharsha Plots",
  domain: "JanaharshaPlots.com",
  url: "https://janaharshaplots.com",
  phone: "9010341194",
  phoneTel: "+919010341194",
  whatsapp: "919010341194",
  operator: "RRP Realty",
};
const asset = (name) => `/assets/${name}`;
const wa = (msg = "Hi, I'm interested in Janaharsha Plots. Please share details.") =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;

const PHASES = [
  "Phase A",
  "Phase B",
  "Phase C",
  "Phase D",
  "Phase E",
  "Phase H",
  "Phase L",
  "Phase M",
  "Phase N",
  "Phase P",
  "Phase Q",
  "Phase S",
  "Phase T",
];
const FEATURED_LAYOUTS = [
  { name: "Phase A", village: "Mangalpally", road: "40 ft", availability: "Available" },
  { name: "Phase C", village: "Yacharam", road: "33 ft", availability: "Filling Fast" },
  { name: "Phase E", village: "Kandukur", road: "40 ft", availability: "Available" },
  { name: "Phase L", village: "Tukkuguda", road: "30 ft", availability: "Limited" },
  { name: "Phase N", village: "Maheshwaram", road: "40 ft", availability: "Available" },
  { name: "Phase Q", village: "Ibrahimpatnam", road: "33 ft", availability: "Available" },
];
const NAV = [
  ["Home", "/"],
  ["Layouts", "/layout-downloads"],
  ["Dream City", "/janaharsha-dream-city"],
  ["Investment", "/investment-plots-hyderabad"],
  ["Sell / Resale", "/sell-your-plot-ibrahimpatnam"],
  ["About", "/about-rrp-realty"],
  ["Contact", "/contact"],
];
const FAQS = [
  [
    "Who operates Janaharsha Plots?",
    "Janaharsha Plots is owned and operated by RRP Realty, a Hyderabad-based real estate developer focused on plotted developments across the Ibrahimpatnam corridor.",
  ],
  [
    "Do you only sell plots, or also buy them back?",
    "Both. We sell new plots across Janaharsha Dream City phases and we also buy back previously sold plots, including eligible resale plots elsewhere in the Ibrahimpatnam belt.",
  ],
  [
    "Are Janaharsha layouts properly documented?",
    "Yes. Each phase is supported with documentation and our team shares available title, layout and registration details before purchase.",
  ],
  [
    "Can I book a site visit?",
    "Yes. You can book a guided site visit on weekdays or weekends. Our team will walk you through phases, pricing, layouts and documentation.",
  ],
  [
    "How do I get layout PDFs?",
    "Open the Layout Downloads page and request any phase PDF through WhatsApp, or submit the lead form to receive the full set.",
  ],
];
const POSTS = [
  {
    slug: "top-10-reasons-to-invest-in-ibrahimpatnam",
    title: "Top 10 Reasons to Invest in Ibrahimpatnam",
    description:
      "Ibrahimpatnam is Hyderabad's fastest growing corridor. Here's why investors are choosing it for long-term land plays.",
    date: "Jan 2026",
    readTime: "6 min",
    category: "Investment",
    content: [
      "Ibrahimpatnam, situated along Hyderabad's eastern Outer Ring Road, has emerged as the city's hottest emerging real estate corridor. Driven by Pharma City, Adibatla IT cluster, TCS campuses and rapid infrastructure spending, the region offers a rare combination of affordability and appreciation potential.",
      "1. Outer Ring Road connectivity — direct ORR access cuts travel times to all major employment hubs.",
      "2. Pharma City employment — thousands of high-paying jobs anchoring residential demand.",
      "3. Adibatla IT cluster — TCS and other IT majors driving white-collar migration.",
      "4. Industrial expansion — Tukkuguda and surrounding industrial parks generating consistent demand.",
      "5. Educational institutions — premier engineering colleges and universities nearby.",
      "6. Affordable entry pricing — significantly lower per-sq-yd cost vs western Hyderabad.",
      "7. Government infrastructure push — roads, metro extensions and utility expansion.",
      "8. Land appreciation history — sustained 15–20% annual price increases in best pockets.",
      "9. Low holding costs — no EMIs, no maintenance, no tenant management.",
      "10. Diversified buyer base — investors, end-users and NRIs all converging on the corridor.",
      "If you've been waiting for the right moment to enter Hyderabad's land market, Ibrahimpatnam — and specifically Janaharsha Dream City — offers the most compelling combination of location, brand trust and upside.",
    ],
  },
  {
    slug: "hyderabad-real-estate-growth-trends",
    title: "Hyderabad Real Estate Growth Trends 2026",
    description:
      "An honest look at where Hyderabad's real estate market is heading and what buyers should focus on this year.",
    date: "Jan 2026",
    readTime: "5 min",
    category: "Market Trends",
    content: [
      "Hyderabad has consistently outperformed most Indian metros in real estate appreciation over the past decade, driven by IT growth, infrastructure spending and stable governance.",
      "In 2026, three trends define the market: eastern corridor outperformance, plotted developments outpacing apartments, and a shift towards branded land investments.",
      "Eastern corridor — areas like Ibrahimpatnam, Adibatla, Maheshwaram and Pharma City are seeing demand that western Hyderabad saw a decade ago.",
      "Plotted developments — land has structurally outperformed apartments in price per sq yd appreciation, with much lower carrying costs.",
      "Branded land — buyers increasingly prefer plots from established developers like Janaharsha for documentation transparency and resale liquidity.",
      "For investors, the message is clear: focus on emerging eastern corridors, prefer plots over apartments for pure appreciation plays, and choose branded developers for peace of mind.",
    ],
  },
  {
    slug: "land-vs-apartment-investment",
    title: "Land vs Apartment Investment — Which is Better?",
    description:
      "A side-by-side comparison of land and apartment investments for Hyderabad buyers in 2026.",
    date: "Jan 2026",
    readTime: "5 min",
    category: "Investment",
    content: [
      "It's the question every Indian investor eventually asks: should I buy land or an apartment? Both have merits, but the answer often depends on your goals and timeline.",
      "Land — pure appreciation play, no depreciation, zero maintenance, full ownership, flexibility to build or hold, but lower rental income and longer liquidity cycle.",
      "Apartment — immediate utility, but ongoing maintenance, depreciation of structure, society overhead and slower per-unit appreciation.",
      "For long-term wealth creation, land in emerging corridors typically outperforms apartments. For immediate rental yield, apartments win.",
      "If your goal is generational wealth and you have a 7+ year horizon, a plot in Janaharsha Dream City offers one of the cleanest, lowest-friction land investment options near Hyderabad.",
    ],
  },
  {
    slug: "future-of-pharma-city-region",
    title: "The Future of Pharma City Region",
    description:
      "Hyderabad's Pharma City is one of the largest pharma clusters in the world. Here's what it means for nearby land values.",
    date: "Jan 2026",
    readTime: "4 min",
    category: "Location Insights",
    content: [
      "Hyderabad Pharma City, planned as one of the largest integrated pharma clusters in the world, is set to be a structural employment anchor for the entire eastern corridor.",
      "When fully operational, the cluster is expected to generate hundreds of thousands of direct and indirect jobs, creating sustained residential demand across Ibrahimpatnam, Maheshwaram and surrounding villages.",
      "Historical parallels — areas like Kondapur and Gachibowli saw major land appreciation in the years following IT cluster activation. Pharma City is poised to repeat this pattern.",
      "Buying a plot near Pharma City today positions you ahead of the curve. Janaharsha Dream City phases offer some of the closest, best-planned layouts in the influence zone.",
    ],
  },
  {
    slug: "best-plot-investments-near-hyderabad",
    title: "Best Plot Investments Near Hyderabad in 2026",
    description:
      "A practical guide to selecting the right plot investment in and around Hyderabad this year.",
    date: "Jan 2026",
    readTime: "5 min",
    category: "Guide",
    content: [
      "Not all plots are created equal. The right plot investment combines location, planning, documentation, and brand — anything missing can create capital lock-in.",
      "Location — prioritize plots along Hyderabad's eastern growth corridor where structural demand drivers are strongest.",
      "Planning — choose master-planned layouts with wide internal roads, residential zoning and future utility access.",
      "Documentation — never compromise on title clarity, approvals and transparency. Always demand full document sets before purchase.",
      "Brand — prefer established developers like Janaharsha who stand behind every plot they sell.",
      "Janaharsha Dream City delivers all four — making it one of the most credible plot investment options near Hyderabad in 2026.",
    ],
  },
];

const landings = [
  {
    path: "/investment-plots-hyderabad",
    eyebrow: "Investment Plots",
    title: "Investment Plots in Hyderabad — Build Generational Wealth",
    subtitle:
      "Land remains the most powerful long-term wealth creator. Janaharsha Plots gives you access to Hyderabad's most promising appreciation corridor.",
    intro:
      "Plotted land in Hyderabad's eastern corridor has historically outperformed most asset classes, with appreciation rates fueled by IT expansion, Pharma City, ORR and government infrastructure.",
    body: "For investors seeking durable returns, low maintenance and full ownership, plots in Janaharsha Dream City offer the ideal vehicle — backed by transparent documentation and an established brand.",
    meta: "Investment plots in Hyderabad's high-growth Ibrahimpatnam corridor. Janaharsha Dream City. Call 9010341194.",
    highlights: [
      ["Strong appreciation history", "Ibrahimpatnam land has compounded over years."],
      ["Low holding cost", "No EMIs, no maintenance, no tenant hassles."],
      ["Full ownership", "100% asset under your name, freely transferable."],
      ["Loan options", "Plot loans available through partner banks."],
    ],
  },
  {
    path: "/janaharsha-dream-city",
    eyebrow: "Dream City",
    title: "Janaharsha Dream City — Hyderabad's Largest Plotted Vision",
    subtitle:
      "A master-planned plotted township spread across multiple phases in Ibrahimpatnam, designed for the next generation of Hyderabad homeowners and investors.",
    intro:
      "Janaharsha Dream City isn't a single project — it's an integrated plotted ecosystem of 13+ phases, each strategically located along Hyderabad's eastern growth corridor.",
    body: "From Phase A to Phase T, every layout is conceived with one philosophy: deliver enduring value through location, planning and trust. Wide internal roads, residential zoning, future-ready connectivity and curated micro-markets — all under one brand.",
    meta: "Janaharsha Dream City — one of Hyderabad's largest plotted developments in Ibrahimpatnam. 13+ phases. Call 9010341194.",
    highlights: [
      ["13+ Active Phases", "Spanning premium villages across Ibrahimpatnam."],
      ["Single trusted brand", "Consistent quality, documentation and service."],
      ["Future-ready planning", "Plots designed for tomorrow's Hyderabad."],
      ["Diversified locations", "Choose by budget, village or proximity."],
    ],
  },
  {
    path: "/open-plots-near-hyderabad",
    eyebrow: "Open Plots",
    title: "Open Plots Near Hyderabad — Curated for Growth",
    subtitle:
      "Discover ready-to-register open plots in Ibrahimpatnam with wide roads, clear titles and proximity to the city's biggest employment hubs.",
    intro:
      "Open plots near Hyderabad — specifically in the Ibrahimpatnam corridor — are seeing unprecedented investor demand thanks to ORR connectivity and government infrastructure spending.",
    body: "Janaharsha Dream City offers a curated catalogue of open plots that match every budget and goal, from first-time buyers to seasoned investors building a land portfolio.",
    meta: "Open plots near Hyderabad in Ibrahimpatnam. Multiple layouts, premium amenities, ready for investment. Call 9010341194.",
    highlights: [
      ["Ready-to-register", "Quick and transparent registration process."],
      ["Multiple budgets", "Plots starting from affordable to premium tiers."],
      ["Investor-friendly", "Strong resale demand and historical appreciation."],
      ["Site visits weekly", "Personalized site tours every weekend."],
    ],
  },
  {
    path: "/plots-in-ibrahimpatnam",
    eyebrow: "Plots in Ibrahimpatnam",
    title: "Premium Plots in Ibrahimpatnam — Built for Long-Term Wealth",
    subtitle:
      "Janaharsha Dream City brings 13+ master-planned phases across Hyderabad's most strategic eastern corridor.",
    intro:
      "Ibrahimpatnam has emerged as the fastest growing real estate corridor in Hyderabad, driven by Outer Ring Road connectivity, Pharma City employment, and rapid industrial expansion towards Adibatla and Tukkuguda.",
    body: "Owning a plot in Ibrahimpatnam means owning a piece of Hyderabad's future. Janaharsha Plots offers transparent documentation, wide internal roads, residential zoning and a brand-led ownership experience — everything you need to invest with confidence.",
    meta: "Premium plots in Ibrahimpatnam, Hyderabad by Janaharsha Dream City. Wide roads, clear documents, resale support.",
    highlights: [
      ["30–40 km from Hyderabad", "Excellent connectivity via ORR, NH-65 and arterial roads."],
      ["Multiple plot sizes", "From compact 150 sq yd to premium 300+ sq yd plots."],
      ["Wide internal roads", "30 ft to 40 ft black-topped roads across phases."],
      ["Clear documentation", "Full title and layout approvals shared transparently."],
    ],
  },
  {
    path: "/residential-plots-hyderabad",
    eyebrow: "Residential Plots",
    title: "Residential Plots in Hyderabad — Your Dream Home Starts Here",
    subtitle:
      "Janaharsha layouts are designed for families who want to build, not just invest. Quiet roads, residential neighbourhoods, future utilities.",
    intro:
      "A home is more than a building — it's the land it sits on. Choosing the right plot determines decades of family memories, lifestyle and wealth.",
    body: "Our residential-focused phases offer the right plot sizes, road widths and community planning to support your dream home — today or whenever you're ready.",
    meta: "Residential plots in Hyderabad's Ibrahimpatnam corridor. Build your dream home in Janaharsha Dream City. Call 9010341194.",
    highlights: [
      ["Family-friendly zones", "Quiet residential neighbourhoods, away from industrial noise."],
      ["Build at your pace", "Hold the plot, build when ready."],
      ["Utility access", "Strategically planned around future utility lines."],
      ["Community planning", "Wide roads, open spaces and green pockets."],
    ],
  },
  {
    path: "/sell-your-plot-ibrahimpatnam",
    eyebrow: "Resale & Buyback",
    title: "We Buy Previously Sold Plots in Ibrahimpatnam",
    subtitle:
      "Janaharsha Plots — operated by RRP Realty — is not just a seller. We also actively buy back resale plots from existing owners in and around Ibrahimpatnam, Hyderabad.",
    intro:
      "Whether you bought a plot from us years ago or hold land elsewhere in the Ibrahimpatnam corridor, our team offers fair, market-aligned valuations and quick, paperwork-clean settlements.",
    body: "Selling a plot privately can take months and involve uncertain buyers. Share your plot details — phase, village, extent and documents — and our acquisitions team will revert with an indicative quote within 24 hours.",
    meta: "We buy back previously sold plots in Ibrahimpatnam, Hyderabad. Fair valuation, fast settlement. Call 9010341194.",
    highlights: [
      [
        "Buyback of past plots",
        "Sold a Janaharsha plot earlier? We'll evaluate it for repurchase.",
      ],
      [
        "Resale acquisitions",
        "We also acquire eligible third-party plots in the Ibrahimpatnam belt.",
      ],
      ["Fair market valuation", "Pricing benchmarked against current corridor and phase rates."],
      [
        "Fast, clean settlement",
        "Document verification and payout handled by RRP Realty's legal desk.",
      ],
    ],
  },
];

function esc(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
function attrs(pathname) {
  return NAV.map(
    ([label, href]) =>
      `<a href="${href}" class="${pathname === href ? "active" : ""}">${label}</a>`,
  ).join("");
}
function pagePath(route) {
  return route === "/"
    ? path.join(dist, "index.html")
    : path.join(dist, route.slice(1), "index.html");
}
function form(title = "Get Layout & Pricing", subtitle = "Talk to our investment advisor today.") {
  return `<div class="card shadow form-card"><h3>${esc(title)}</h3><p class="lead">${esc(subtitle)}</p><form data-lead-form class="form-grid"><input required name="name" maxlength="80" placeholder="Full name"><input required name="phone" inputmode="tel" placeholder="Phone (10-digit)"><select name="budget"><option value="">Budget range</option><option>Under ₹10 Lakhs</option><option>₹10 - ₹25 Lakhs</option><option>₹25 - ₹50 Lakhs</option><option>Above ₹50 Lakhs</option></select><select name="purpose"><option>Investment</option><option>Self-Use / Build Home</option><option>Resale</option></select><button class="btn gold" type="submit">Book Site Visit</button><p class="form-status" data-form-status></p><small>By submitting, you agree to be contacted via call/WhatsApp.</small></form></div>`;
}
function header(pathname) {
  return `<header class="header"><div class="topbar"><div class="container"><span>A venture operated by <b>RRP Realty</b></span><span>Buying & Selling Plots in Ibrahimpatnam, Hyderabad</span></div></div><div class="container header-main"><a class="logo" href="/"><span class="logo-mark">J</span><span>Janaharsha <span style="color:var(--gold)">Plots</span><span class="logo-sub">By RRP Realty</span></span></a><nav class="nav">${attrs(pathname)}</nav><div class="header-actions"><a href="tel:${SITE.phoneTel}">☎ ${SITE.phone}</a><a class="btn gold" href="/site-visit-booking">Book Site Visit</a></div><button class="menu-btn" data-menu-toggle aria-expanded="false" aria-label="Menu">☰</button></div><nav class="container mobile-nav" data-mobile-nav>${attrs(pathname)}<a href="tel:${SITE.phoneTel}">Call ${SITE.phone}</a></nav></header>`;
}
function footer() {
  return `<footer class="footer"><div class="container footer-grid"><div><a class="logo" href="/"><span class="logo-mark">J</span><span>Janaharsha <span style="color:var(--gold)">Plots</span></span></a><p style="margin-top:16px;max-width:520px">Premium plotted developments across Ibrahimpatnam, Hyderabad. Strategic locations, wide roads, residential zoning and long-term appreciation potential.</p><p style="margin-top:18px">☎ <a href="tel:${SITE.phoneTel}">${SITE.phone}</a><br>📍 Ibrahimpatnam, Hyderabad, Telangana</p></div><div><h4>Quick Links</h4><ul>${[
    ["Home", "/"],
    ["Layouts", "/layout-downloads"],
    ["Investment Opportunities", "/investment-plots-hyderabad"],
    ["About", "/about-rrp-realty"],
    ["Contact", "/contact"],
    ["Blog", "/blog"],
  ]
    .map(([l, h]) => `<li><a href="${h}">${l}</a></li>`)
    .join("")}</ul></div><div><h4>Locations</h4><ul>${[
    ["Plots in Ibrahimpatnam", "/plots-in-ibrahimpatnam"],
    ["Open Plots Near Hyderabad", "/open-plots-near-hyderabad"],
    ["Sell / Resale Your Plot", "/sell-your-plot-ibrahimpatnam"],
    ["Residential Plots", "/residential-plots-hyderabad"],
    ["Dream City", "/janaharsha-dream-city"],
    ["Site Visit", "/site-visit-booking"],
  ]
    .map(([l, h]) => `<li><a href="${h}">${l}</a></li>`)
    .join(
      "",
    )}</ul></div></div><div class="container footer-bottom"><p><b>Disclaimer:</b> Information provided is for marketing purposes. Buyers are advised to verify approvals, documentation and availability before purchase.</p><p>Operated by <span style="color:var(--gold)">${SITE.operator}</span><br>© 2026 ${SITE.domain}</p></div></footer><div class="sticky-buttons"><a class="float-btn whatsapp" href="${wa()}" target="_blank" aria-label="WhatsApp">☏</a><a class="float-btn call" href="tel:${SITE.phoneTel}" aria-label="Call">☎</a></div>`;
}
function html({ title, description, path: route, body, schema = [] }) {
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${esc(title)}</title><meta name="description" content="${esc(description)}"><meta name="author" content="Janaharsha Plots — RRP Realty"><meta property="og:site_name" content="Janaharsha Plots"><meta property="og:type" content="website"><meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(description)}"><meta property="og:url" content="${route}"><meta name="twitter:card" content="summary_large_image"><meta name="theme-color" content="#0F172A"><link rel="canonical" href="${route}"><link rel="stylesheet" href="/styles.css"><script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@type": "RealEstateAgent", name: SITE.name, url: SITE.url, telephone: SITE.phoneTel, areaServed: "Hyderabad, Telangana, India", description: "Plotted developments across Ibrahimpatnam, Hyderabad — Janaharsha Dream City. Operated by RRP Realty.", address: { "@type": "PostalAddress", addressLocality: "Ibrahimpatnam", addressRegion: "Telangana", addressCountry: "IN" } })}</script>${schema.map((s) => `<script type="application/ld+json">${JSON.stringify(s)}</script>`).join("")}</head><body>${header(route)}${body}${footer()}<script src="/site.js" defer></script></body></html>`;
}
function pageHero(eyebrow, title, subtitle) {
  return `<section class="page-hero"><div class="container"><p class="eyebrow">${esc(eyebrow)}</p><h1>${esc(title)}</h1><p class="lead">${esc(subtitle)}</p></div></section>`;
}
function section({ eyebrow, title, subtitle = "", content = "", cls = "" }) {
  return `<section class="section ${cls}"><div class="container">${title ? `<div class="section-head ${cls.includes("center") ? "center" : ""}">${eyebrow ? `<p class="eyebrow">${esc(eyebrow)}</p>` : ""}<h2>${esc(title)}</h2>${subtitle ? `<p class="lead">${esc(subtitle)}</p>` : ""}</div>` : ""}${content}</div></section>`;
}
function faq() {
  return `<section class="section alt"><div class="container" style="max-width:850px"><div class="section-head center"><p class="eyebrow">FAQ</p><h2>Frequently Asked Questions</h2></div><div class="faq-list">${FAQS.map(([q, a], i) => `<div class="faq-item ${i === 0 ? "is-open" : ""}"><button data-faq-button>${esc(q)} <span>⌄</span></button><div class="faq-answer">${esc(a)}</div></div>`).join("")}</div></div></section>`;
}
function landingPage(p) {
  const cards = p.highlights
    .map(([t, d]) => `<div class="check-card"><strong>✓ ${esc(t)}</strong><p>${esc(d)}</p></div>`)
    .join("");
  return html({
    title: p.title,
    description: p.meta,
    path: p.path,
    body: `${pageHero(p.eyebrow, p.title, p.subtitle)}<section class="section"><div class="container split"><div class="text-stack"><p class="lead" style="color:var(--navy);font-weight:700">${esc(p.intro)}</p><p>${esc(p.body)}</p><div class="grid-2">${cards}</div><div class="cta-row"><a class="btn gold" href="/layout-downloads">Download Layouts →</a><a class="btn navy" href="/site-visit-booking">Book Site Visit</a></div></div>${form()}</div></section>${faq()}`,
  });
}
function home() {
  return html({
    title: "Janaharsha Plots — Premium Plots in Ibrahimpatnam, Hyderabad",
    description:
      "Own residential plots in Janaharsha Dream City, Ibrahimpatnam — by RRP Realty. We also buy back previously sold plots. Multiple phases, ORR access. Call 9010341194.",
    path: "/",
    body: `<section class="hero"><img class="hero-img" src="${asset("hero-aerial.jpg")}" alt="Aerial view of Janaharsha plotted layout"><div class="container hero-grid"><div><p class="eyebrow">Janaharsha Dream City • Ibrahimpatnam • Operated by RRP Realty</p><h1>Buy, Sell or Resell Land in Hyderabad's <span style="color:var(--gold)">Fastest Growing</span> Investment Corridor</h1><p class="lead">Janaharsha Dream City, by <span style="color:var(--gold)">RRP Realty</span>, offers premium plots across Ibrahimpatnam — and we also buy back previously sold plots from existing owners.</p><div class="cta-row"><a class="btn gold" href="/site-visit-booking">Book Site Visit →</a><a class="btn light" href="/layout-downloads">Download Layout</a><a class="btn light" href="tel:${SITE.phoneTel}">Call Now</a></div><div class="stat-grid">${[
      ["13+", "Layout Phases"],
      ["Prime", "Ibrahimpatnam"],
      ["ORR", "Connected"],
      ["Clear", "Documentation"],
    ]
      .map(([k, v]) => `<div class="stat"><strong>${k}</strong><span>${v}</span></div>`)
      .join(
        "",
      )}</div></div>${form()}</div></section>${section({ eyebrow: "About Janaharsha", title: "Hyderabad's Premier Plotted Development Brand", content: `<div class="split"><div class="text-stack"><p><b>Janaharsha Dream City</b> is one of the largest plotted development opportunities in Ibrahimpatnam, Hyderabad — featuring multiple approved layout phases across strategic growth corridors.</p><p>With Hyderabad's relentless expansion towards the eastern corridor, Ibrahimpatnam has emerged as the most sought-after investment destination — anchored by the Outer Ring Road, Pharma City, Adibatla IT hub and TCS campuses.</p><p>Each Janaharsha phase is master-planned with wide internal roads, residential zoning and clear documentation — giving you a future-proof asset, whether you build your dream home or hold for appreciation.</p></div><img class="card" src="${asset("growth-corridor.jpg")}" alt="Hyderabad growth corridor"></div>` })}${section(
      {
        eyebrow: "Why Ibrahimpatnam",
        title: "The Growth Story Driving Demand",
        cls: "navy",
        content: `<div class="grid-3">${[
          [
            "🛣️",
            "ORR Connectivity",
            "Fast access to Hyderabad employment hubs through the Outer Ring Road.",
          ],
          ["🏭", "Pharma City", "A major employment anchor powering residential demand."],
          ["💼", "Adibatla IT", "TCS and IT campuses continue to drive migration and investment."],
          ["✈️", "Airport Access", "Connectivity to Shamshabad and southern Hyderabad."],
          ["🎓", "Education Belt", "Institutions and colleges add durable local demand."],
          [
            "🌳",
            "Land Scarcity",
            "Planned plotted land becomes harder to secure as the corridor matures.",
          ],
        ]
          .map(
            ([i, t, d]) =>
              `<div class="card" style="background:rgba(255,255,255,.08);border-color:rgba(255,255,255,.14)"><div class="icon">${i}</div><h3>${t}</h3><p>${d}</p></div>`,
          )
          .join("")}</div>`,
      },
    )}${section({ eyebrow: "Layout Gallery", title: "Explore Our Phases", subtitle: "Master-planned layouts across Janaharsha Dream City. Click any phase to request the full layout PDF.", content: `<div class="grid-4">${PHASES.map(phaseCard).join("")}</div>` })}${section({ eyebrow: "Featured Layouts", title: "Available Now", cls: "alt", content: `<div class="grid-3">${FEATURED_LAYOUTS.map((l) => `<div class="card"><span class="badge">${l.availability}</span><h3 style="margin-top:12px">${l.name}</h3><p>${l.village}</p><p>Road: ${l.road}</p><a class="btn gold" href="${wa(`Hi, please share pricing for Janaharsha ${l.name}.`)}" target="_blank">Ask Price</a></div>`).join("")}</div>` })}${section({ eyebrow: "Location", title: "Strategic Connectivity", content: `<div class="split"><div class="map"><iframe title="Ibrahimpatnam location" src="https://www.google.com/maps?q=Ibrahimpatnam,+Hyderabad&output=embed" loading="lazy"></iframe></div><div class="card shadow"><p class="eyebrow">Get In Touch</p><h2>Ready to own your piece of Hyderabad's future?</h2><p>Talk to our investment advisor today and unlock exclusive pricing, layout PDFs and curated site visit slots.</p><div class="cta-row"><a class="btn gold" href="tel:${SITE.phoneTel}">Call ${SITE.phone}</a><a class="btn navy" href="${wa()}" target="_blank">WhatsApp</a></div></div></div>` })}${faq()}`,
  });
}
function phaseCard(p) {
  return `<a class="card layout-card" href="${wa(`Hi, please send me the layout PDF for Janaharsha ${p}.`)}" target="_blank"><figure><img src="${asset("layout-plan.jpg")}" alt="${esc(p)} layout"><figcaption>${esc(p)}</figcaption></figure><div class="card-body"><span>Request PDF</span><span>↓</span></div></a>`;
}
function layouts() {
  return html({
    title: "Download Layouts — Janaharsha Dream City Phases",
    description:
      "Download Janaharsha Dream City layout PDFs for all phases — Ibrahimpatnam, Hyderabad. Call 9010341194.",
    path: "/layout-downloads",
    body: `${pageHero("Layouts", "Download Janaharsha Layout PDFs", "Request the layout PDF for any phase. We send it instantly via WhatsApp or email.")}<section class="section"><div class="container split"><div class="grid-3">${PHASES.map(phaseCard).join("")}</div>${form("Get All Layouts", "One quick form — receive the full set.")}</div></section>`,
  });
}
function about() {
  return html({
    title: "About RRP Realty — Janaharsha Plots Hyderabad",
    description:
      "RRP Realty operates Janaharsha Plots — premium plotted developments across Ibrahimpatnam, Hyderabad.",
    path: "/about-rrp-realty",
    body: `${pageHero("Our Story", "About RRP Realty", "The team behind Janaharsha Plots — building one of Hyderabad's largest plotted ecosystems.")}<section class="section"><div class="container split"><div class="text-stack"><p class="lead" style="color:var(--navy);font-weight:700">RRP Realty is a Hyderabad-based real estate company focused on bringing transparency, planning and brand trust to the plotted development category.</p><p>Through our flagship initiative — <b>Janaharsha Dream City</b> — we have curated a portfolio of 13+ layout phases spanning the most promising villages across Ibrahimpatnam.</p><p>Our approach is simple: choose strategic locations, plan with discipline, document transparently and stand behind every plot we sell. That's how we've built trust with thousands of investors and home-builders.</p><h2>What we stand for</h2><ul><li><b>Transparency</b> — every document, every detail, shared upfront.</li><li><b>Long-term value</b> — we invest in locations that compound over decades.</li><li><b>Service</b> — guidance from first call to registration and beyond.</li></ul><div class="grid-2">${["13+ Active Phases", "Thousands of investors", "Single-market focus", "Brand-led ownership"].map((x) => `<div class="check-card"><strong>✓ ${x}</strong></div>`).join("")}</div></div>${form()}</div></section>`,
  });
}
function siteVisit() {
  return html({
    title: "Book a Site Visit — Janaharsha Plots Ibrahimpatnam",
    description:
      "Schedule a guided site visit to Janaharsha Dream City layouts in Ibrahimpatnam. Free cab pickup. Call 9010341194.",
    path: "/site-visit-booking",
    body: `${pageHero("Site Visit", "Book Your Personal Site Visit", "See Janaharsha Dream City layouts first-hand. Our team will guide you through phases, pricing and the investment story.")}<section class="section"><div class="container split"><div class="text-stack"><div class="grid-3">${[
      ["📅", "Flexible Slots", "Weekdays & weekends available."],
      ["⏱️", "60–90 minutes", "Walk-through of selected phases."],
      ["📍", "Cab Pickup", "Optional pickup from your location."],
    ]
      .map(
        ([i, t, d]) =>
          `<div class="check-card"><div class="icon">${i}</div><strong>${t}</strong><p>${d}</p></div>`,
      )
      .join(
        "",
      )}</div><div class="card" style="background:var(--navy);color:white"><h2>What to expect</h2><ul><li>Detailed walk-through of the master plan and selected phases.</li><li>Review of layout documentation and pricing.</li><li>Discussion on appreciation potential and exit strategies.</li><li>Answers to all your questions — no obligation.</li></ul><div class="cta-row"><a class="btn gold" href="tel:${SITE.phoneTel}">Call ${SITE.phone}</a><a class="btn light" href="${wa("Hi, I'd like to book a site visit.")}" target="_blank">WhatsApp</a></div></div></div>${form("Schedule Your Visit", "Pick a slot — we confirm via call within an hour.")}</div></section>`,
  });
}
function contact() {
  return html({
    title: "Contact Janaharsha Plots — Call 9010341194",
    description:
      "Contact Janaharsha Plots — call, WhatsApp or schedule a site visit. Office in Hyderabad. Operated by RRP Realty.",
    path: "/contact",
    body: `${pageHero("Contact", "Let's Talk", "Our team is available 7 days a week to answer your questions about plots, pricing and site visits.")}<section class="section"><div class="container split"><div class="text-stack"><a class="card" href="tel:${SITE.phoneTel}"><h3>☎ Call</h3><p class="lead">${SITE.phone}</p></a><a class="card" href="${wa()}" target="_blank"><h3>☏ WhatsApp</h3><p class="lead">Chat instantly</p></a><div class="card"><h3>📍 Office</h3><p>Ibrahimpatnam, Hyderabad, Telangana</p></div><div class="map"><iframe title="Ibrahimpatnam map" src="https://www.google.com/maps?q=Ibrahimpatnam,+Hyderabad&output=embed" loading="lazy"></iframe></div></div>${form("Send a Message", "We'll respond within an hour.")}</div></section>`,
  });
}
function blogIndex() {
  return html({
    title: "Janaharsha Blog — Hyderabad Real Estate Insights",
    description:
      "Insights on Hyderabad real estate, Ibrahimpatnam growth, and smart plot investing — from the Janaharsha team.",
    path: "/blog",
    body: `${pageHero("Blog", "Insights from the Janaharsha Team", "Honest analysis of Hyderabad real estate, plotted investment strategy and emerging corridors.")}<section class="section"><div class="container grid-3">${POSTS.map((p) => `<a class="card blog-card" href="/blog/${p.slug}"><span class="eyebrow">${p.category}</span><h3>${p.title}</h3><p>${p.description}</p><small>${p.readTime} • ${p.date}</small></a>`).join("")}</div></section>`,
  });
}
function blogPost(post) {
  return html({
    title: `${post.title} — Janaharsha Blog`,
    description: post.description,
    path: `/blog/${post.slug}`,
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.title,
        description: post.description,
        author: { "@type": "Organization", name: "Janaharsha Plots" },
        publisher: { "@type": "Organization", name: "RRP Realty" },
      },
    ],
    body: `<article class="page-hero"><div class="container article"><a class="eyebrow" href="/blog">← All posts</a><p class="eyebrow" style="margin-top:24px">${post.category}</p><h1>${post.title}</h1><p class="lead">${post.readTime} • ${post.date}</p></div></article><section class="section"><div class="container split"><div class="article"><p class="intro">${post.description}</p>${post.content.map((p) => `<p>${esc(p)}</p>`).join("")}<div class="notice"><h3>Want to explore Janaharsha Dream City?</h3><p>Book a site visit and see the layouts in person — no obligation.</p><div class="cta-row"><a class="btn gold" href="/site-visit-booking">Book Site Visit</a><a class="btn navy" href="/layout-downloads">Download Layouts</a></div></div></div>${form()}</div></section>`,
  });
}
function notFound() {
  return html({
    title: "Page not found — Janaharsha Plots",
    description: "The page you requested could not be found.",
    path: "/404",
    body: `<section class="page-hero"><div class="container"><p class="eyebrow">404</p><h1>Page not found</h1><p class="lead">The page you're looking for doesn't exist or has been moved.</p><div class="cta-row"><a class="btn gold" href="/">Go home</a></div></div></section>`,
  });
}

async function write(route, content) {
  const file = route === "/404" ? path.join(dist, "404.html") : pagePath(route);
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, content);
}
async function build() {
  await rm(dist, { recursive: true, force: true });
  await mkdir(dist, { recursive: true });
  await cp(path.join(root, "static", "assets"), path.join(dist, "assets"), { recursive: true });
  await cp(path.join(root, "static", "styles.css"), path.join(dist, "styles.css"));
  await cp(path.join(root, "static", "site.js"), path.join(dist, "site.js"));
  if (existsSync(path.join(root, "public")))
    await cp(path.join(root, "public"), dist, { recursive: true });
  await write("/", home());
  for (const p of landings) await write(p.path, landingPage(p));
  await write("/layout-downloads", layouts());
  await write("/about-rrp-realty", about());
  await write("/site-visit-booking", siteVisit());
  await write("/contact", contact());
  await write("/blog", blogIndex());
  for (const post of POSTS) await write(`/blog/${post.slug}`, blogPost(post));
  await write("/404", notFound());
  const entries = [
    "/",
    ...landings.map((p) => p.path),
    "/layout-downloads",
    "/about-rrp-realty",
    "/site-visit-booking",
    "/contact",
    "/blog",
    ...POSTS.map((p) => `/blog/${p.slug}`),
  ];
  await writeFile(
    path.join(dist, "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.map((loc) => `  <url><loc>${SITE.url}${loc}</loc><changefreq>weekly</changefreq><priority>${loc === "/" ? "1.0" : "0.8"}</priority></url>`).join("\n")}\n</urlset>`,
  );
  await writeFile(
    path.join(dist, "_headers"),
    `/*\n  X-Content-Type-Options: nosniff\n  Referrer-Policy: strict-origin-when-cross-origin\n  Cache-Control: public, max-age=3600\n/assets/*\n  Cache-Control: public, max-age=31536000, immutable\n`,
  );
  await writeFile(path.join(dist, "_redirects"), `/* /404.html 404\n`);
  console.log(`Built ${entries.length + 1} HTML pages to dist/`);
}

await build();
if (checkOnly) {
  const index = await readFile(path.join(dist, "index.html"), "utf8");
  if (!index.includes("Janaharsha Dream City")) throw new Error("Static build check failed");
}
