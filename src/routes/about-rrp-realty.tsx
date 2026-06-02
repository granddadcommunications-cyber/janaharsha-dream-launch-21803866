import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { LeadForm } from "@/components/site/LeadForm";
import { Award, Building, Users, Target } from "lucide-react";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/about-rrp-realty")({
  head: () => ({
    meta: [
      { title: "About RRP Realty — Independent Plot Dealer, Ibrahimpatnam" },
      { name: "description", content: "RRP Realty is an independent Hyderabad real estate firm dealing in plots across the Janaharsha venture, Ibrahimpatnam. 4,00,000+ sq yards sold since 2016." },
      { property: "og:title", content: "About RRP Realty — Janaharsha Plot Dealer" },
      { property: "og:description", content: "Independent realty firm. 4 lakh+ sq yards transacted in Ibrahimpatnam since 2016." },
      { property: "og:url", content: "https://janaharsha-dream-launch.lovable.app/about-rrp-realty" },
    ],
    links: [{ rel: "canonical", href: "https://janaharsha-dream-launch.lovable.app/about-rrp-realty" }],
  }),
  component: About,
});

function About() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Our Story"
        title="About RRP Realty"
        subtitle="An independent real estate firm specialising in the Janaharsha venture and the Ibrahimpatnam plotted market."
      />
      <Section>
        <div className="grid lg:grid-cols-[1.6fr_1fr] gap-10">
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-4">
            <p className="text-navy font-medium text-lg">RRP Realty is a Hyderabad-based, independent real estate firm. We are not the developers of the Janaharsha venture — we are the on-ground sales and resale partner that buyers and sellers in the Ibrahimpatnam corridor have trusted since 2016.</p>
            <p>Over the last decade, we have transacted more than <strong className="text-navy">{SITE.sqYardsSold} sq yards</strong> of plotted inventory across Ibrahimpatnam — primarily within the Janaharsha venture phases, plus select resale plots from existing owners.</p>
            <p>Our edge is simple: deep, single-market focus. We know every Janaharsha phase, every village boundary, every approval status and every realistic resale rate in this corridor. That's why families, NRIs and long-horizon investors come to us — first to buy, and years later to resell.</p>
            <h3 className="text-navy font-display text-2xl pt-4">What we do</h3>
            <ul className="space-y-2">
              <li>• <strong className="text-navy">Sell plots</strong> in active Janaharsha venture phases.</li>
              <li>• <strong className="text-navy">Buy back / resell plots</strong> for existing owners at fair, current-market rates.</li>
              <li>• <strong className="text-navy">Document walkthroughs</strong> — every approval, parent document and encumbrance, shared upfront.</li>
              <li>• <strong className="text-navy">Site visits & guidance</strong> — from first call to registration.</li>
            </ul>
            <p className="pt-2 text-sm italic">Disclaimer: Janaharsha and Janaharsha Dream City are ventures developed by the Janaharsha group. RRP Realty is an independent real estate firm authorised to deal in plots within these layouts. We do not claim ownership of the venture brand.</p>
            <div className="grid sm:grid-cols-2 gap-4 not-prose pt-4">
              {[
                { Icon: Building, t: "4,00,000+ Sq Yards Sold" },
                { Icon: Users, t: "Since 2016 in Ibrahimpatnam" },
                { Icon: Target, t: "Single-market specialists" },
                { Icon: Award, t: "Buy + Resale desk" },
              ].map(({ Icon, t }) => (
                <div key={t} className="bg-secondary rounded-xl p-4 flex items-center gap-3 border border-border">
                  <Icon className="h-6 w-6 text-gold" />
                  <span className="font-medium text-navy">{t}</span>
                </div>
              ))}
            </div>
          </div>
          <LeadForm />
        </div>
      </Section>
    </PageLayout>
  );
}
