import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { LeadForm } from "@/components/site/LeadForm";
import { SITE, waLink } from "@/lib/site";
import { Phone, MessageCircle, MapPin, Mail } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Janaharsha Plots — Call 9010341194" },
      { name: "description", content: "Contact Janaharsha Plots — call, WhatsApp or schedule a site visit. Office in Hyderabad. Operated by RRP Realty." },
      { property: "og:title", content: "Contact — Janaharsha Plots" },
      { property: "og:description", content: "Reach Janaharsha Plots for pricing, layouts and site visits." },
      { property: "og:url", content: "https://janaharsha-dream-launch.lovable.app/contact" },
    ],
    links: [{ rel: "canonical", href: "https://janaharsha-dream-launch.lovable.app/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <PageLayout>
      <PageHero eyebrow="Contact" title="Let's Talk" subtitle="Our team is available 7 days a week to answer your questions about plots, pricing and site visits." />
      <Section>
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="space-y-4">
            <a href={`tel:${SITE.phoneTel}`} className="flex items-center gap-4 bg-secondary rounded-xl p-5 border border-border hover:border-gold transition-colors">
              <span className="h-12 w-12 grid place-items-center rounded-full bg-gold text-gold-foreground"><Phone className="h-5 w-5" /></span>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Call</div>
                <div className="font-display font-semibold text-navy text-xl">{SITE.phone}</div>
              </div>
            </a>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-secondary rounded-xl p-5 border border-border hover:border-gold transition-colors">
              <span className="h-12 w-12 grid place-items-center rounded-full bg-[#25D366] text-white"><MessageCircle className="h-5 w-5" /></span>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">WhatsApp</div>
                <div className="font-display font-semibold text-navy text-xl">Chat instantly</div>
              </div>
            </a>
            <div className="flex items-center gap-4 bg-secondary rounded-xl p-5 border border-border">
              <span className="h-12 w-12 grid place-items-center rounded-full bg-navy text-white"><MapPin className="h-5 w-5" /></span>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Office</div>
                <div className="font-medium text-navy">Ibrahimpatnam, Hyderabad, Telangana</div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-border h-72">
              <iframe title="Ibrahimpatnam map" src="https://www.google.com/maps?q=Ibrahimpatnam,+Hyderabad&output=embed" className="w-full h-full" loading="lazy" />
            </div>
          </div>
          <LeadForm title="Send a Message" subtitle="We'll respond within an hour." />
        </div>
      </Section>
    </PageLayout>
  );
}
