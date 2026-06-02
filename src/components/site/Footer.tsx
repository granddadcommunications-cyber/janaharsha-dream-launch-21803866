import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Mail } from "lucide-react";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="container-luxe py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-gold text-gold-foreground font-bold font-display">J</span>
            <span className="font-display font-semibold text-xl">Janaharsha <span className="text-gold">Plots</span></span>
          </div>
          <p className="text-white/70 text-sm max-w-md leading-relaxed">
            Premium plotted developments across Ibrahimpatnam, Hyderabad. Strategic locations, wide roads, residential zoning and long-term appreciation potential.
          </p>
          <div className="mt-5 space-y-2 text-sm text-white/80">
            <a href={`tel:${SITE.phoneTel}`} className="flex items-center gap-2 hover:text-gold"><Phone className="h-4 w-4 text-gold" /> {SITE.phone}</a>
            <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-gold" /> Ibrahimpatnam, Hyderabad, Telangana</p>
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4 text-gold text-sm tracking-wider uppercase">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link to="/" className="hover:text-gold">Home</Link></li>
            <li><Link to="/layout-downloads" className="hover:text-gold">Layouts</Link></li>
            <li><Link to="/investment-plots-hyderabad" className="hover:text-gold">Investment Opportunities</Link></li>
            <li><Link to="/about-rrp-realty" className="hover:text-gold">About</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
            <li><Link to="/blog" className="hover:text-gold">Blog</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4 text-gold text-sm tracking-wider uppercase">Locations</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link to="/plots-in-ibrahimpatnam" className="hover:text-gold">Plots in Ibrahimpatnam</Link></li>
            <li><Link to="/open-plots-near-hyderabad" className="hover:text-gold">Open Plots Near Hyderabad</Link></li>
            <li><Link to="/hmda-plots-ibrahimpatnam" className="hover:text-gold">HMDA Plots</Link></li>
            <li><Link to="/residential-plots-hyderabad" className="hover:text-gold">Residential Plots</Link></li>
            <li><Link to="/janaharsha-dream-city" className="hover:text-gold">Dream City</Link></li>
            <li><Link to="/site-visit-booking" className="hover:text-gold">Site Visit</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-luxe py-6 text-xs text-white/60 grid gap-3 md:flex md:items-center md:justify-between">
          <p className="max-w-3xl">
            <strong className="text-white/80">Disclaimer:</strong> Information provided is for marketing purposes. Buyers are advised to verify all approvals, documentation, and availability before purchase.
          </p>
          <div className="flex flex-col md:items-end gap-1">
            <span>Operated by <span className="text-gold">{SITE.operator}</span></span>
            <span>© 2026 {SITE.domain}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
