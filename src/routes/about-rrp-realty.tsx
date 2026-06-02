import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { LeadForm } from "@/components/site/LeadForm";
import { Award, Building, Users, Target } from "lucide-react";

export const Route = createFileRoute("/about-rrp-realty")({
  head: () => ({
    meta: [
      { title: "About RRP Realty — Janaharsha Plots Hyderabad" },
      { name: "description", content: "RRP Realty operates Janaharsha Plots — premium plotted developments across Ibrahimpatnam, Hyderabad." },
      { property: "og:title", content: "About RRP Realty — Janaharsha Plots" },
      { property: "og:description", content: "Trusted plotted development operator in Hyderabad." },
      { property: "og:url", content: "/about-rrp-realty" },
    ],
    links: [{ rel: "canonical", href: "/about-rrp-realty" }],
  }),
  component: About,
});

function About() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Our Story"
        title="About RRP Realty"
        subtitle="The team behind Janaharsha Plots — building one of Hyderabad's largest plotted ecosystems."
      />
      <Section>
        <div className="grid lg:grid-cols-[1.6fr_1fr] gap-10">
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-4">
            <p className="text-navy font-medium text-lg">RRP Realty is a Hyderabad-based real estate company focused on bringing transparency, planning and brand trust to the plotted development category.</p>
            <p>Through our flagship initiative — <strong className="text-navy">Janaharsha Dream City</strong> — we have curated a portfolio of 13+ layout phases spanning the most promising villages across Ibrahimpatnam.</p>
            <p>Our approach is simple: choose strategic locations, plan with discipline, document transparently and stand behind every plot we sell. That's how we've built trust with thousands of investors and home-builders.</p>
            <h3 className="text-navy font-display text-2xl pt-4">What we stand for</h3>
            <ul className="space-y-2">
              <li>• <strong className="text-navy">Transparency</strong> — every document, every detail, shared upfront.</li>
              <li>• <strong className="text-navy">Long-term value</strong> — we invest in locations that compound over decades.</li>
              <li>• <strong className="text-navy">Service</strong> — guidance from first call to registration and beyond.</li>
            </ul>
            <div className="grid sm:grid-cols-2 gap-4 not-prose pt-4">
              {[
                { Icon: Building, t: "13+ Active Phases" },
                { Icon: Users, t: "Thousands of investors" },
                { Icon: Target, t: "Single-market focus" },
                { Icon: Award, t: "Brand-led ownership" },
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
