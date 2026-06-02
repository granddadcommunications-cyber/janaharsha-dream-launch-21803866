import { useState } from "react";
import { toast } from "sonner";
import { waLink } from "@/lib/site";

interface Props { title?: string; subtitle?: string; compact?: boolean }

export function LeadForm({ title = "Get Layout & Pricing", subtitle = "Talk to our investment advisor today.", compact }: Props) {
  const [form, setForm] = useState({ name: "", phone: "", budget: "", purpose: "Investment" });
  const [loading, setLoading] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !/^[6-9]\d{9}$/.test(form.phone)) {
      toast.error("Please enter a valid name and 10-digit Indian mobile number.");
      return;
    }
    setLoading(true);
    const msg = `Hi, I'm ${form.name}. Phone: ${form.phone}. Budget: ${form.budget || "Open"}. Purpose: ${form.purpose}. Please share Janaharsha Plots details.`;
    window.open(waLink(msg), "_blank");
    setTimeout(() => { setLoading(false); toast.success("Thanks! We'll reach out shortly."); }, 600);
  };

  return (
    <div className={`bg-white rounded-2xl p-6 md:p-8 ${compact ? "" : "shadow-[var(--shadow-luxe)] border border-border"}`}>
      <h3 className="font-display text-2xl font-semibold text-navy">{title}</h3>
      <p className="text-muted-foreground text-sm mt-1">{subtitle}</p>
      <form onSubmit={submit} className="mt-5 grid gap-3">
        <input
          required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
          maxLength={80} placeholder="Full name"
          className="h-11 px-4 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-gold"
        />
        <input
          required value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value.replace(/\D/g, "").slice(0, 10) })}
          inputMode="tel" placeholder="Phone (10-digit)"
          className="h-11 px-4 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-gold"
        />
        <select
          value={form.budget} onChange={e => setForm({ ...form, budget: e.target.value })}
          className="h-11 px-4 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-gold"
        >
          <option value="">Budget range</option>
          <option>Under ₹10 Lakhs</option>
          <option>₹10 - ₹25 Lakhs</option>
          <option>₹25 - ₹50 Lakhs</option>
          <option>Above ₹50 Lakhs</option>
        </select>
        <select
          value={form.purpose} onChange={e => setForm({ ...form, purpose: e.target.value })}
          className="h-11 px-4 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-gold"
        >
          <option>Investment</option>
          <option>Self-Use / Build Home</option>
          <option>Resale</option>
        </select>
        <div className="grid grid-cols-2 gap-3 pt-1">
          <button disabled={loading} type="submit" className="btn-gold btn-gold-hover text-sm h-11 w-full">
            {loading ? "Sending..." : "Book Site Visit"}
          </button>
          <button
            type="button"
            onClick={() => { setForm({ ...form }); submit(new Event("submit") as unknown as React.FormEvent); }}
            className="h-11 rounded-full border border-navy text-navy font-semibold text-sm hover:bg-navy hover:text-white transition-colors"
          >
            Request Callback
          </button>
        </div>
        <p className="text-[11px] text-muted-foreground pt-1">By submitting, you agree to be contacted via call/WhatsApp.</p>
      </form>
    </div>
  );
}
