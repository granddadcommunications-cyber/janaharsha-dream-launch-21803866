import { useState } from "react";
import { toast } from "sonner";
import { waLink } from "@/lib/site";

interface Props { title?: string; subtitle?: string; compact?: boolean }

export function LeadForm({ title = "Get Layout & Pricing", subtitle = "Share your details — we'll send the layout PDF & pricing on WhatsApp.", compact }: Props) {
  const [form, setForm] = useState({ name: "", phone: "", budget: "", purpose: "Investment" });
  const [loading, setLoading] = useState(false);

  const buildMessage = () =>
    `Hi RRP Realty, I'm interested in Janaharsha plots, Ibrahimpatnam.%0A%0A` +
    `• Name: ${form.name}%0A` +
    `• Phone: ${form.phone}%0A` +
    `• Budget: ${form.budget || "Open"}%0A` +
    `• Purpose: ${form.purpose}%0A%0A` +
    `Please share the layout PDF and current pricing.`;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !/^[6-9]\d{9}$/.test(form.phone)) {
      toast.error("Please enter your name and a valid 10-digit Indian mobile number.");
      return;
    }
    setLoading(true);
    // Decoded once because waLink will encode again
    const msg = decodeURIComponent(buildMessage());
    window.open(waLink(msg), "_blank");
    setTimeout(() => { setLoading(false); toast.success("Opening WhatsApp with your details…"); }, 500);
  };

  const fieldCls = "h-11 px-4 rounded-lg border border-input bg-background text-sm text-navy placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-gold";
  const labelCls = "text-xs font-semibold text-navy uppercase tracking-wider";

  return (
    <div className={`bg-white rounded-2xl p-6 md:p-8 ${compact ? "" : "shadow-[var(--shadow-luxe)] border border-border"}`}>
      <h3 className="font-display text-2xl font-semibold text-navy">{title}</h3>
      <p className="text-muted-foreground text-sm mt-1">{subtitle}</p>
      <form onSubmit={submit} className="mt-5 grid gap-4">
        <div className="grid gap-1.5">
          <label htmlFor="lf-name" className={labelCls}>Your Name</label>
          <input id="lf-name" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
            maxLength={80} placeholder="e.g. Ramesh Kumar" className={fieldCls} />
        </div>
        <div className="grid gap-1.5">
          <label htmlFor="lf-phone" className={labelCls}>WhatsApp Number</label>
          <input id="lf-phone" required value={form.phone}
            onChange={e => setForm({ ...form, phone: e.target.value.replace(/\D/g, "").slice(0, 10) })}
            inputMode="tel" placeholder="10-digit mobile, e.g. 98765 43210" className={fieldCls} />
        </div>
        <div className="grid gap-1.5">
          <label htmlFor="lf-budget" className={labelCls}>Budget Range</label>
          <select id="lf-budget" value={form.budget} onChange={e => setForm({ ...form, budget: e.target.value })} className={fieldCls}>
            <option value="">Select your budget</option>
            <option>Under ₹10 Lakhs</option>
            <option>₹10 - ₹25 Lakhs</option>
            <option>₹25 - ₹50 Lakhs</option>
            <option>Above ₹50 Lakhs</option>
          </select>
        </div>
        <div className="grid gap-1.5">
          <label htmlFor="lf-purpose" className={labelCls}>I'm looking to</label>
          <select id="lf-purpose" value={form.purpose} onChange={e => setForm({ ...form, purpose: e.target.value })} className={fieldCls}>
            <option>Buy for Investment</option>
            <option>Buy for Self-Use / Build Home</option>
            <option>Resell my existing plot</option>
          </select>
        </div>
        <div className="grid grid-cols-2 gap-3 pt-1">
          <button disabled={loading} type="submit" className="btn-gold btn-gold-hover text-sm h-11 w-full">
            {loading ? "Opening…" : "Send on WhatsApp"}
          </button>
          <a
            href={`tel:+919010341194`}
            className="h-11 grid place-items-center rounded-full border border-navy text-navy font-semibold text-sm hover:bg-navy hover:text-white transition-colors"
          >
            Call Instead
          </a>
        </div>
        <p className="text-[11px] text-muted-foreground pt-1">By submitting, you agree to be contacted via call / WhatsApp by RRP Realty.</p>
      </form>
    </div>
  );
}
