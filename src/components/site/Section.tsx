import type { ReactNode } from "react";

export function Section({
  eyebrow, title, subtitle, children, className = "", center = false,
}: { eyebrow?: string; title?: string; subtitle?: string; children: ReactNode; className?: string; center?: boolean }) {
  return (
    <section className={`section-pad ${className}`}>
      <div className="container-luxe">
        {(eyebrow || title || subtitle) && (
          <div className={`mb-12 max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            {title && <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-navy">{title}</h2>}
            {subtitle && <p className="mt-3 text-muted-foreground leading-relaxed">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
