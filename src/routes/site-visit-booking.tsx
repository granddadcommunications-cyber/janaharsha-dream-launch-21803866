import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { LeadForm } from "@/components/site/LeadForm";
import { SITE, waLink } from "@/lib/site";
import { Calendar, Clock, MapPin, Phone } from "lucide-react";

export const Route = createFileRoute("/site-visit-booking")({
  head: () => ({
    meta: [
      { title: "Book a Site Visit — Janaharsha Plots Ibrahimpatnam" },
      { name: "description", content: "Schedule a guided site visit to Janaharsha Dream City layouts in Ibrahimpatnam. Personalized walkthrough by RRP Realty. Call 9010341194." },
      { property: "og:title", content: "Book Site Visit — Janaharsha Plots" },
      { property: "og:description", content: "Free guided site visit to Janaharsha layouts." },
      { property: "og:url", content: "https://janaharsha-dream-launch.lovable.app/site-visit-booking" },
    ],
    links: [{ rel: "canonical", href: "https://janaharsha-dream-launch.lovable.app/site-visit-booking" }],
  }),
  component: SiteVisit,
});

function SiteVisit() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Site Visit"
        title="Book Your Personal Site Visit"
        subtitle="See Janaharsha Dream City layouts first-hand. Our team will guide you through phases, pricing and the investment story."
      />
      <Section>
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10">
          <div className="space-y-6">
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { Icon: Calendar, t: "Flexible Slots", d: "Weekdays & weekends available." },
                { Icon: Clock, t: "60–90 minutes", d: "Walk-through of selected phases." },
                { Icon: MapPin, t: "On-Site Guidance", d: "Meet our team directly at the layout." },
              ].map(({ Icon, t, d }) => (
                <div key={t} className="bg-secondary rounded-xl p-5 border border-border">
                  <Icon className="h-6 w-6 text-gold" />
                  <div className="font-display font-semibold text-navy mt-2">{t}</div>
                  <p className="text-sm text-muted-foreground mt-1">{d}</p>
                </div>
              ))}
            </div>
            <div className="bg-navy text-white rounded-2xl p-8">
              <h2 className="text-2xl font-display font-semibold">What to expect</h2>
              <ul className="mt-4 space-y-2 text-white/80 text-sm">
                <li>• Detailed walk-through of the master plan and selected phases.</li>
                <li>• Review of layout documentation and pricing.</li>
                <li>• Discussion on appreciation potential and exit strategies.</li>
                <li>• Answers to all your questions — no obligation.</li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={`tel:${SITE.phoneTel}`} className="btn-gold btn-gold-hover"><Phone className="h-4 w-4" /> Call {SITE.phone}</a>
                <a href={waLink("Hi, I'd like to book a site visit.")} target="_blank" rel="noopener noreferrer" className="btn-outline-light hover:bg-white/10">WhatsApp</a>
              </div>
            </div>
          </div>
          <LeadForm title="Schedule Your Visit" subtitle="Pick a slot — we confirm via call within an hour." />
        </div>
      </Section>
    </PageLayout>
  );
}
