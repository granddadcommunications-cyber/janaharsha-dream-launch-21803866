import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { PageLayout } from "./PageLayout";
import { PageHero } from "./PageHero";
import { Section } from "./Section";
import { LeadForm } from "./LeadForm";
import { FAQ, DEFAULT_FAQS } from "./FAQ";
import { CheckCircle2, ArrowRight } from "lucide-react";

interface Props {
  eyebrow: string;
  title: string;
  subtitle: string;
  intro: string;
  highlights: { t: string; d: string }[];
  body?: ReactNode;
}

export function LandingTemplate({ eyebrow, title, subtitle, intro, highlights, body }: Props) {
  return (
    <PageLayout>
      <PageHero eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <Section>
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-10">
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p className="text-lg text-navy font-medium">{intro}</p>
            {body}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {highlights.map(h => (
                <div key={h.t} className="bg-secondary rounded-xl p-5 border border-border">
                  <div className="flex items-center gap-2 text-navy font-display font-semibold"><CheckCircle2 className="h-5 w-5 text-gold" /> {h.t}</div>
                  <p className="mt-2 text-sm">{h.d}</p>
                </div>
              ))}
            </div>
            <div className="pt-6 flex flex-wrap gap-3">
              <Link to="/layout-downloads" className="btn-gold btn-gold-hover">Download Layouts <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/site-visit-booking" className="rounded-full border border-navy text-navy font-semibold px-5 py-3 hover:bg-navy hover:text-white transition-colors">Book Site Visit</Link>
            </div>
          </div>
          <div><LeadForm /></div>
        </div>
      </Section>
      <FAQ items={DEFAULT_FAQS} />
    </PageLayout>
  );
}
