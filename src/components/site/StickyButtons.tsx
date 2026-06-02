import { Phone, MessageCircle } from "lucide-react";
import { SITE, waLink } from "@/lib/site";

export function StickyButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="h-14 w-14 rounded-full bg-[#25D366] text-white grid place-items-center shadow-luxe hover:scale-110 transition-transform"
        style={{ boxShadow: "var(--shadow-luxe)" }}
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <a
        href={`tel:${SITE.phoneTel}`}
        aria-label="Call now"
        className="h-14 w-14 rounded-full bg-gold text-gold-foreground grid place-items-center shadow-gold hover:scale-110 transition-transform"
        style={{ boxShadow: "var(--shadow-gold)" }}
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}
