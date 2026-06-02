import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { Section } from "@/components/site/Section";
import { LeadForm } from "@/components/site/LeadForm";
import { FAQ, DEFAULT_FAQS } from "@/components/site/FAQ";
import { SITE, PHASES, FEATURED_LAYOUTS, waLink } from "@/lib/site";
import heroImg from "@/assets/hero-aerial.jpg";
import growthImg from "@/assets/growth-corridor.jpg";
import layoutImg from "@/assets/layout-plan.jpg";
import {
  Download, Phone, MapPin, ShieldCheck, TrendingUp, Building2, Trees,
  Plane, Briefcase, GraduationCap, Factory, Route as RouteIcon, ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Janaharsha Plots in Ibrahimpatnam, Hyderabad | RRP Realty" },
      { name: "description", content: "Buy & resell plots in the Janaharsha venture, Ibrahimpatnam. RRP Realty has sold 4,00,000+ sq yards since 2016. 13+ phases. Call 9010341194." },
      { property: "og:title", content: "Janaharsha Plots, Ibrahimpatnam — by RRP Realty" },
      { property: "og:description", content: "Independent plot dealer for the Janaharsha venture. 4 lakh+ sq yards sold across Ibrahimpatnam since 2016." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <PageLayout>
      <section className="relative bg-navy text-white overflow-hidden">
        <img src={heroImg} alt="Aerial view of Janaharsha plotted layout in Ibrahimpatnam, Hyderabad"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
          width={1920} height={1080} fetchPriority="high" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="container-luxe relative grid lg:grid-cols-[1.4fr_1fr] gap-12 items-center py-20 md:py-28">
          <div>
            <p className="eyebrow">RRP Realty • Independent Plot Dealer • Janaharsha Venture, Ibrahimpatnam</p>
            <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-[1.05] tracking-tight">
              Buy or Resell Plots in <span className="text-gold">Janaharsha Venture</span>, Ibrahimpatnam
            </h1>
            <p className="mt-6 text-lg text-white/80 max-w-xl leading-relaxed">
              <span className="text-gold font-medium">RRP Realty</span> is an independent real estate firm dealing in plots across the Janaharsha venture in Ibrahimpatnam. We've sold <span className="text-gold font-semibold">{SITE.sqYardsSold} sq yards</span> in this corridor since {SITE.since} — and we actively buy back previously sold plots too.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/site-visit-booking" className="btn-gold btn-gold-hover">Book Site Visit <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/layout-downloads" className="btn-outline-light hover:bg-white/10"><Download className="h-4 w-4" /> Get Layouts</Link>
              <a href={`tel:${SITE.phoneTel}`} className="btn-outline-light hover:bg-white/10"><Phone className="h-4 w-4" /> Call Now</a>
            </div>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl">
              {[
                { k: "4L+", v: "Sq Yards Sold" },
                { k: "Since 2016", v: "In Ibrahimpatnam" },
                { k: "13+", v: "Layout Phases" },
                { k: "ORR", v: "Connected" },
              ].map(s => (
                <div key={s.v} className="border-l-2 border-gold pl-3">
                  <div className="text-2xl font-display font-semibold text-gold">{s.k}</div>
                  <div className="text-xs text-white/70 uppercase tracking-wider">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:block"><LeadForm /></div>
        </div>
      </section>

      <div className="bg-secondary border-y border-border">
        <div className="container-luxe py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
          {[
            { Icon: Building2, label: "Multiple Layout Phases" },
            { Icon: MapPin, label: "Prime Ibrahimpatnam Location" },
            { Icon: TrendingUp, label: "Investment Potential" },
            { Icon: ShieldCheck, label: "Clear Documentation" },
          ].map(({ Icon, label }) => (
            <div key={label} className="flex items-center gap-3 text-navy font-medium">
              <span className="h-10 w-10 rounded-full bg-gold/15 text-gold grid place-items-center"><Icon className="h-5 w-5" /></span>
              {label}
            </div>
          ))}
        </div>
      </div>

      <Section eyebrow="About RRP Realty" title="Ibrahimpatnam's Most Active Plot Dealer Since 2016">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p><strong className="text-navy">RRP Realty</strong> is an independent Hyderabad real estate firm specialising in the buying, selling and resale of plots within the <strong className="text-navy">Janaharsha venture</strong> in Ibrahimpatnam. The Janaharsha layouts are developed by the Janaharsha group — we are the on-ground sales and resale partner buyers trust.</p>
            <p>Since 2016, we've transacted over <strong className="text-navy">4,00,000 sq yards</strong> of plotted inventory across this corridor — helping families build homes, investors accumulate land, and existing owners exit at fair, current market rates.</p>
            <p>With Hyderabad expanding aggressively eastward — anchored by the ORR, Pharma City, Adibatla IT hub and TCS campuses — Ibrahimpatnam is the city's most actively appreciating land market. We help you transact in it the right way.</p>
            <div className="pt-2"><Link to="/about-rrp-realty" className="inline-flex items-center gap-2 text-navy font-semibold hover:text-gold">Read our story <ArrowRight className="h-4 w-4" /></Link></div>
          </div>
          <div className="relative">
            <img src={growthImg} alt="Hyderabad eastern growth corridor infrastructure" width={1280} height={800} loading="lazy" className="rounded-2xl shadow-[var(--shadow-luxe)] w-full h-auto" />
            <div className="absolute -bottom-6 -left-6 bg-gold text-gold-foreground p-5 rounded-xl max-w-[240px] shadow-[var(--shadow-gold)] hidden md:block">
              <div className="text-3xl font-display font-bold">4,00,000+</div>
              <div className="text-xs uppercase tracking-wider font-semibold">Sq Yards Sold Since 2016</div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-navy text-white" eyebrow="Why Ibrahimpatnam" title="The Growth Story Driving Demand">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { Icon: RouteIcon, t: "Outer Ring Road Access", d: "Seamless connectivity to all of Hyderabad via ORR exit points." },
            { Icon: Factory, t: "Pharma City Influence", d: "World's largest pharma cluster bringing thousands of jobs." },
            { Icon: GraduationCap, t: "Educational Institutions", d: "Top engineering colleges & universities nearby." },
            { Icon: Briefcase, t: "Industrial Expansion", d: "Adibatla, Tukkuguda industrial parks driving demand." },
            { Icon: Building2, t: "Infrastructure Growth", d: "Government push on roads, metro extension & utilities." },
            { Icon: Trees, t: "Future Employment Corridors", d: "TCS, IT SEZs and defence labs anchor the region." },
          ].map(({ Icon, t, d }) => (
            <div key={t} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-gold transition-colors">
              <Icon className="h-7 w-7 text-gold" />
              <h3 className="mt-4 font-display font-semibold text-lg">{t}</h3>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Layout Gallery" title="Explore Our Phases" subtitle="Master-planned layouts across Janaharsha Dream City. Click any phase to request the full layout PDF.">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {PHASES.map(p => (
            <Link key={p} to="/layout-downloads" className="group relative aspect-square rounded-xl overflow-hidden border border-border bg-navy">
              <img src={layoutImg} alt={`${p} layout — Janaharsha Dream City`} loading="lazy"
                className="absolute inset-0 h-full w-full object-cover opacity-50 group-hover:opacity-70 transition-opacity" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
              <div className="absolute inset-0 p-4 flex flex-col justify-between text-white">
                <span className="text-xs uppercase tracking-wider text-gold">Janaharsha</span>
                <div>
                  <div className="font-display font-semibold text-lg">{p}</div>
                  <div className="text-xs text-white/70 flex items-center gap-1 mt-1"><Download className="h-3 w-3" /> View layout</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="bg-secondary" eyebrow="Featured Layouts" title="Available Now">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_LAYOUTS.map(l => (
            <article key={l.name} className="bg-white rounded-2xl overflow-hidden border border-border hover:shadow-[var(--shadow-luxe)] transition-shadow">
              <div className="relative aspect-[16/10]">
                <img src={layoutImg} alt={`${l.name} layout at ${l.village}`} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                <span className="absolute top-3 right-3 text-xs font-semibold bg-gold text-gold-foreground px-3 py-1 rounded-full">{l.availability}</span>
              </div>
              <div className="p-5">
                <h3 className="font-display font-semibold text-lg text-navy">{l.name}</h3>
                <div className="text-sm text-muted-foreground mt-1 flex items-center gap-1"><MapPin className="h-3.5 w-3.5 text-gold" /> {l.village}</div>
                <div className="mt-4 flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Road width</span>
                  <span className="font-semibold text-navy">{l.road}</span>
                </div>
                <div className="mt-5 grid grid-cols-2 gap-2">
                  <Link to="/layout-downloads" className="text-sm h-10 grid place-items-center rounded-full border border-navy text-navy hover:bg-navy hover:text-white transition-colors">Download</Link>
                  <a href={waLink(`Hi, I'm interested in Janaharsha ${l.name} (${l.village}).`)} target="_blank" rel="noopener noreferrer" className="text-sm h-10 grid place-items-center btn-gold btn-gold-hover">Enquire</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Buy & Resell" title="We Sell New Plots — And Buy Resale Plots Too" subtitle="RRP Realty runs an active buy-and-resell desk for plots across the Janaharsha venture and the wider Ibrahimpatnam corridor.">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-border rounded-2xl p-7">
            <span className="text-xs uppercase tracking-wider text-gold font-semibold">For Buyers</span>
            <h3 className="font-display font-semibold text-2xl text-navy mt-2">Buy a plot in Janaharsha</h3>
            <p className="text-muted-foreground mt-3 leading-relaxed">Choose from 13+ Janaharsha venture phases across Ibrahimpatnam — wide roads, residential zoning and full documentation walkthrough before you buy.</p>
            <Link to="/layout-downloads" className="mt-5 inline-flex items-center gap-2 btn-gold btn-gold-hover">Browse Layouts <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="bg-navy text-white rounded-2xl p-7 border border-gold/40">
            <span className="text-xs uppercase tracking-wider text-gold font-semibold">For Sellers</span>
            <h3 className="font-display font-semibold text-2xl mt-2">Resell your existing plot</h3>
            <p className="text-white/80 mt-3 leading-relaxed">Already own a plot in Janaharsha or anywhere in Ibrahimpatnam? Our acquisitions desk offers fair, current-market valuation and clean, fast settlement.</p>
            <Link to="/sell-your-plot-ibrahimpatnam" className="mt-5 inline-flex items-center gap-2 btn-gold btn-gold-hover">Get a Resale Quote <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </Section>



      <Section eyebrow="Location" title="Strategic Connectivity">
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          <div className="rounded-2xl overflow-hidden border border-border h-[420px]">
            <iframe title="Ibrahimpatnam location" src="https://www.google.com/maps?q=Ibrahimpatnam,+Hyderabad&output=embed" className="w-full h-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
          <div className="grid grid-cols-2 gap-3 content-start">
            {[
              { p: "LB Nagar", d: "25 km" }, { p: "Outer Ring Road", d: "0 km" },
              { p: "Adibatla", d: "12 km" }, { p: "TCS Adibatla", d: "14 km" },
              { p: "Pharma City", d: "8 km" }, { p: "Airport (RGIA)", d: "35 km" },
              { p: "Ibrahimpatnam Town", d: "5 km" }, { p: "Hayathnagar", d: "18 km" },
            ].map(it => (
              <div key={it.p} className="bg-white border border-border rounded-xl p-4 flex items-center gap-3">
                <Plane className="h-5 w-5 text-gold shrink-0" />
                <div>
                  <div className="font-semibold text-navy text-sm">{it.p}</div>
                  <div className="text-xs text-muted-foreground">~ {it.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <section className="bg-navy text-white section-pad">
        <div className="container-luxe grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="eyebrow">Get In Touch</p>
            <h2 className="text-3xl md:text-4xl font-semibold mt-3">Ready to own your piece of Hyderabad's future?</h2>
            <p className="mt-4 text-white/80 leading-relaxed">Talk to our investment advisor today and unlock exclusive pricing, layout PDFs and curated site visit slots.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={`tel:${SITE.phoneTel}`} className="btn-gold btn-gold-hover"><Phone className="h-4 w-4" /> {SITE.phone}</a>
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-outline-light hover:bg-white/10">WhatsApp Us</a>
            </div>
          </div>
          <LeadForm />
        </div>
      </section>

      <FAQ items={DEFAULT_FAQS} />
    </PageLayout>
  );
}
