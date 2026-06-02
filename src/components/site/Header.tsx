import { Link } from "@tanstack/react-router";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { NAV_LINKS, SITE } from "@/lib/site";
import { Logo } from "@/components/site/Logo";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-navy/95 backdrop-blur supports-[backdrop-filter]:bg-navy/80 text-navy-foreground border-b border-white/10">
      <div className="bg-black/40 text-[11px] tracking-wider uppercase text-white/70 border-b border-white/10">
        <div className="container-luxe flex items-center justify-between h-7">
          <span>A venture operated by <span className="text-gold font-semibold">RRP Realty</span></span>
          <span className="hidden sm:inline">Buying & Selling Plots in Ibrahimpatnam, Hyderabad</span>
        </div>
      </div>
      <div className="container-luxe flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-3">
          <Logo variant="light" className="h-10 w-auto" />
          <span className="font-display font-semibold tracking-tight text-lg leading-tight flex flex-col">
            <span>Janaharsha <span className="text-gold">Plots</span></span>
            <span className="text-[10px] font-normal text-white/60 tracking-wider uppercase">By RRP Realty</span>
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-7 text-sm">
          {NAV_LINKS.map(n => (
            <Link key={n.to} to={n.to} className="text-white/80 hover:text-gold transition-colors" activeProps={{ className: "text-gold" }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a href={`tel:${SITE.phoneTel}`} className="inline-flex items-center gap-2 text-sm text-white/90 hover:text-gold">
            <Phone className="h-4 w-4" /> {SITE.phone}
          </a>
          <Link to="/site-visit-booking" className="btn-gold btn-gold-hover text-sm">Book Site Visit</Link>
        </div>
        <button onClick={() => setOpen(!open)} className="lg:hidden text-white" aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-white/10 bg-navy">
          <div className="container-luxe py-4 flex flex-col gap-3">
            {NAV_LINKS.map(n => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="text-white/90 py-1">{n.label}</Link>
            ))}
            <a href={`tel:${SITE.phoneTel}`} className="text-gold pt-2 border-t border-white/10">Call {SITE.phone}</a>
          </div>
        </div>
      )}
    </header>
  );
}
