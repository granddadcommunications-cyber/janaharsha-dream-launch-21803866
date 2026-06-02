import { Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-aerial.jpg";

export function PageHero({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle: string }) {
  return (
    <section className="relative bg-navy text-white overflow-hidden">
      <img src={heroImg} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" loading="eager" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="container-luxe relative py-20 md:py-28">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 text-4xl md:text-5xl font-semibold max-w-3xl leading-[1.1]">{title}</h1>
        <p className="mt-5 max-w-2xl text-white/80 text-lg">{subtitle}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/site-visit-booking" className="btn-gold btn-gold-hover">Book Site Visit</Link>
          <Link to="/contact" className="btn-outline-light hover:bg-white/10">Talk to Advisor</Link>
        </div>
      </div>
    </section>
  );
}
