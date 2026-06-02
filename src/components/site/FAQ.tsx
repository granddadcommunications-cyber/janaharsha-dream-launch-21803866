import { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface FaqItem { q: string; a: string }

export function FAQ({ items, title = "Frequently Asked Questions" }: { items: FaqItem[]; title?: string }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="section-pad bg-secondary">
      <div className="container-luxe max-w-3xl">
        <p className="eyebrow text-center">FAQ</p>
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-navy mt-2 mb-10">{title}</h2>
        <div className="space-y-3">
          {items.map((it, i) => (
            <div key={i} className="bg-white rounded-xl border border-border overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between text-left px-5 py-4 font-medium text-navy"
              >
                {it.q}
                <ChevronDown className={`h-5 w-5 text-gold transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{it.a}</div>}
            </div>
          ))}
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map(it => ({ "@type": "Question", name: it.q, acceptedAnswer: { "@type": "Answer", text: it.a } })),
      }) }} />
    </section>
  );
}

export const DEFAULT_FAQS: FaqItem[] = [
  { q: "Who operates Janaharsha Plots?", a: "Janaharsha Plots is owned and operated by RRP Realty, a Hyderabad-based real estate developer with a focus on plotted developments across the Ibrahimpatnam corridor." },
  { q: "Do you only sell plots, or also help resell them?", a: "Both. We sell new plots across Janaharsha Dream City phases and we also handle resale of previously owned plots in the Ibrahimpatnam belt — including plots originally purchased through us." },
  { q: "Are Janaharsha layouts properly documented?", a: "Yes. Each phase follows proper documentation and approvals. We share complete paperwork transparently during your site visit so you can verify everything before purchase." },
  { q: "How far is Ibrahimpatnam from Hyderabad?", a: "Ibrahimpatnam is approximately 30–40 km from central Hyderabad, well-connected via the Outer Ring Road and major arterial routes." },
  { q: "Can I schedule a site visit?", a: "Yes. Click 'Book Site Visit' anywhere on the site or call 9010341194. We arrange convenient slots including weekends." },
  { q: "Are bank loans available?", a: "Loan availability depends on the layout, your eligibility and the bank's policy. Our team can guide you to partner banks offering plot loans." },
  { q: "How do I download layouts?", a: "Visit our Layout Downloads page and request the specific phase. We send the layout PDF via WhatsApp or email instantly." },
];
