import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { LeadForm } from "@/components/site/LeadForm";
import { PHASES, waLink } from "@/lib/site";
import { Download } from "lucide-react";
import layoutImg from "@/assets/layout-plan.jpg";

export const Route = createFileRoute("/layout-downloads")({
  head: () => ({
    meta: [
      { title: "Download Layouts — Janaharsha Dream City Phases" },
      { name: "description", content: "Download Janaharsha Dream City layout PDFs for all phases — Ibrahimpatnam, Hyderabad. Call 9010341194." },
      { property: "og:title", content: "Layout Downloads — Janaharsha Plots" },
      { property: "og:description", content: "Get layout PDFs for all Janaharsha phases." },
      { property: "og:url", content: "https://janaharsha-dream-launch.lovable.app/layout-downloads" },
    ],
    links: [{ rel: "canonical", href: "https://janaharsha-dream-launch.lovable.app/layout-downloads" }],
  }),
  component: Layouts,
});

function Layouts() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Layouts"
        title="Download Janaharsha Layout PDFs"
        subtitle="Request the layout PDF for any phase. We send it instantly via WhatsApp or email."
      />
      <Section>
        <div className="grid lg:grid-cols-[2fr_1fr] gap-10">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PHASES.map(p => (
              <a key={p} href={waLink(`Hi, please send me the layout PDF for Janaharsha ${p}.`)}
                target="_blank" rel="noopener noreferrer"
                className="group bg-white border border-border rounded-xl overflow-hidden hover:shadow-[var(--shadow-luxe)] transition-shadow">
                <div className="relative aspect-[4/3] bg-navy">
                  <img src={layoutImg} alt={`${p} layout`} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-60" />
                  <div className="absolute inset-0 grid place-items-center text-white font-display font-semibold text-2xl">{p}</div>
                </div>
                <div className="p-4 flex items-center justify-between">
                  <span className="text-sm text-navy font-medium">Request PDF</span>
                  <Download className="h-4 w-4 text-gold group-hover:translate-y-0.5 transition-transform" />
                </div>
              </a>
            ))}
          </div>
          <LeadForm title="Get All Layouts" subtitle="One quick form — receive the full set." />
        </div>
      </Section>
    </PageLayout>
  );
}
